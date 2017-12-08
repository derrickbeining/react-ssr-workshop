import serialize from 'serialize-javascript';
import {Helmet} from 'react-helmet';

export default (store, appString) => {
  const helmet = Helmet.renderStatic();

  return (
    `<html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
      </head>
      <body>
        <div id="root">${appString}</div>
        <script>
          window.INITIAL_STATE = ${serialize(store.getState(), {isJSON: true})}
        </script>
        <script defer src="bundle.js"></script>
      </body>
      </html>`
  )
}
