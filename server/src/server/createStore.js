import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from 'reducers';
import axios from 'axios';

export default (req) => {
  const customAxios = axios.create({
    baseURL: 'http://react-ssr-api.herokuapp.com',
    headers: {cookie: req.get('cookie') || ''},
  })

  const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk.withExtraArgument(customAxios))
  )

  return store;
}
