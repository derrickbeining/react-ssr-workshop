import 'babel-polyfill';
import express from 'express';
import proxy from 'express-http-proxy';
import renderApp from 'server/render';
import {matchRoutes} from 'react-router-config';
import Routes from 'Routes';
import createStore from 'server/createStore';

const app = express();

app.use('/api', proxy('http;//react-ssr-api.herokuapp.com', {
  proxyReqOptDecorator (opts) {
    opts.headers['x-forwarded-host'] = 'localhost:3000';
    return opts;
  }
}))

app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = createStore(req);
  const dataLoading = matchRoutes(Routes, req.path).map(({route}) => {
    return route.loadData ? route.loadData(store) : null
  })

  Promise.all(dataLoading)
    .then(() => res.send(renderApp(req, store)))
})


app.listen(3000, () => {
  console.log(`Listenging of port 3000`);
});
