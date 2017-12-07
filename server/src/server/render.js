import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {renderRoutes} from 'react-router-config';
import Routes from 'Routes';
import serialize from 'serialize-javascript';

export default (req, store) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        {/* this replaces the typical <Routes /> component  */}
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );
  return `
    <html>
      <head></head>
      <body>
        <div id="root">${content}</div>
        <script>                                          // see docs for this option
          window.INITIAL_STATE = ${serialize(store.getState(), {isJSON: true})}
        </script>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
}
