import express from 'express';
import renderApp from 'server/render';
import createStore from 'server/createStore';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = createStore();

  res.send(renderApp(req, store));
})


app.listen(3000, () => {
  console.log(`Listenging of port 3000`);
});
