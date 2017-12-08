import 'babel-polyfill';
import express from 'express';
import proxy from 'express-http-proxy';
import renderApp from 'server/render';


const app = express();

app.use('/api', proxy('http://react-ssr-api.herokuapp.com', {
  proxyReqOptDecorator (opts) {
    opts.headers['x-forwarded-host'] = 'localhost:3000';
    return opts;
  }
}))

app.use(express.static('public'));

app.get('*', renderApp)


app.listen(3000, () => {
  console.log(`Listening on port 3000`);
});
