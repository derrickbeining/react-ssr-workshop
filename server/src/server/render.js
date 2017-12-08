import React from 'react';
import {renderToNodeStream, renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {renderRoutes} from 'react-router-config';
import Routes from 'routes';
import serialize from 'serialize-javascript';
import {matchRoutes} from 'react-router-config';
import constructStore from 'store';

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
  // only after all the necessary data has been loaded to the redux store
  // do we render the app to a string (or stream!) and send the request
  Promise.all(dataLoading)
    .then(() => {
      const context = {wat: 'wat'};
      const appContent = renderToString(
        <Provider store={store}>
          <StaticRouter location={req.path} context={context}>
            {/* transforms our arr of route objs to <Route /> components */}
            <div>{renderRoutes(Routes)}</div>
          </StaticRouter>
        </Provider>
      );

      const html =
        `<html>
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>${page.title}</title>
            <script>
              window.INITIAL_STATE = ${serialize(store.getState(), {isJSON: true})}
            </script>
            <script defer src="bundle.js"></script>
          </head>
          <body>
            <div id="root">${appContent}</div>
            </body>
          </html>`;

      if (context.notFound) res.status(404);
      res.send(html)
      // res.write(documentTop);
      // const stream = renderToNodeStream(reactApp)
      // stream.pipe(res, {end: false});
      // stream.on('end', () => {
      //   res.write(documentBottom);
      //   res.end(404);
      // })
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
