import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from 'store/reducers';
import axios from 'axios';

const clientToAPI = axios.create({
  baseURL: '/api',
})

const newServerAxios = req => axios.create({
  baseURL: 'http://react-ssr-api.herokuapp.com',
  headers: {cookie: req.get('cookie') || ''},
})

export default function constructStore (req) {
  let initialState;
  let customAxios;
  if (req) { // configure for server-side store
    initialState = {};
    customAxios = newServerAxios(req);
  } else { // configure for client-side store
    initialState = window.INITIAL_STATE;
    customAxios = clientToAPI;
  }

  return createStore(
    reducers,
    initialState,
    applyMiddleware(thunk.withExtraArgument(customAxios))
  )
}
