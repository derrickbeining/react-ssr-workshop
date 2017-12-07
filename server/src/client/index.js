import 'babel-polyfill';
import React from 'react'
import ReactDOM from 'react-dom';
import {renderRoutes} from 'react-router-config';
import Routes from 'Routes';
import {BrowserRouter} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import reducers from 'reducers';
import axios from 'axios';

const apiAxios = axios.create({
  baseURL: '/api',
})

const store = createStore(
  reducers,
  window.INITIAL_STATE,
  applyMiddleware(thunk.withExtraArgument(apiAxios))
)

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      {/* this replaces the typical <Routes /> component  */}
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
