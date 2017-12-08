import React from 'react';
import {renderToNodeStream, renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {renderRoutes} from 'react-router-config';
import Routes from 'routes';
import serialize from 'serialize-javascript';
import {matchRoutes} from 'react-router-config';
import constructStore from 'store';
import buildHTML from 'server/buildHTML';

export default (req, res) => {
  // --------------------- need the cookie from the req obj in order to authenticate
  // --------------------- proxied API request from the client
  const store = constructStore(req);
  // ---------------- matchRoutes generates array of route objs (from src/routes)
  // ---------------- that match the requested URL
  const matchedRoutes = matchRoutes(Routes, req.path);
  const page = matchedRoutes.find(({route}) => route.title).route;
  const dataLoading = matchedRoutes.map(({route: {component}}) => {
    // we can pre-load the redux store with any async data needed by the components
    // by checking each component for a loadData class method and calling it
    // with the store passed. Be sure it returns a promise so we can wait on
    // Promise.all below
    if (component.loadData) return component.loadData(store)
  })

  const dontReject = promise => {
    if (promise) {
      return new Promise((fulfill) => {
        promise.then(fulfill).catch(fulfill)
      })
    }
  };

  // only after all the necessary data has been loaded to the redux store
  // do we render the app to a string (or stream!) and send the request.
  // dontReject helps us handle a "gotcha" from Promise.all: if any of the thunk
  // requests fail, Promise.all will short-circuit any still pending promises and just
  // jump right to the .catch callback. That behavior would lead to undesireable
  // results for the user
  Promise.all(dataLoading.map(dontReject))
    .then(() => {
      // holding a reference to the context object before it's passed to
      // the app and rendered will allow us to check for important application
      // state after it's rendered, which will allow us to determine precisely
      // how to respond to the http request depnding on what get's rendered by
      //the Router logic
      const context = {};

      const appString = renderToString(
        <Provider store={store}>
          <StaticRouter location={req.path} context={context}>
            {/* transforms our arr of route objs to <Route /> components */}
            <div>{renderRoutes(Routes)}</div>
          </StaticRouter>
        </Provider>
      );

      const html = buildHTML(store, appString);
      // context.url is only added if <Redirect /> is rendered
      if (context.url) return res.redirect(301, context.url)
      // context.notFound is set if the <NotFoundPage /> is rendered
      if (context.notFound) res.status(404);
      res.send(html)
      // res.write(documentTop);
      // const stream = renderToNodeStream(reactApp)
      // stream.pipe(res, {end: false});
      // stream.on('end', () => {
      //   res.write(documentBottom);
      //   res.end(404);
      // })
    }).catch(reason => {
      console.error(reason.response)
      res.sendStatus(500);
    })



  // const content = renderToNodeStream(
  //   <Provider store={store}>
  //     <StaticRouter location={req.path} context={{}}>
  //       {/* transforms our arr of route objs to <Route /> components */}
  //       <div>{renderRoutes(Routes)}</div>
  //     </StaticRouter>
  //   </Provider>
  // );
  // return `
  //   <html>
  //     <head>
  //       <meta charset="UTF-8">
  //       <meta name="viewport" content="width=device-width, initial-scale=1.0">
  //       <meta http-equiv="X-UA-Compatible" content="ie=edge">
  //       <title>${page.title}</title>
  //       <script>
  //         window.INITIAL_STATE = ${serialize(store.getState(), {isJSON: true})}
  //       </script>
  //       <script defer src="bundle.js"></script>
  //     </head>
  //     <body>
  //       <div id="root">
  //         ${content}
  //       </div>
  //     </body>
  //   </html>
  // `;
}
