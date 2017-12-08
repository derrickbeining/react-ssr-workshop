import 'babel-polyfill';
import React from 'react'
import ReactDOM from 'react-dom';
import {renderRoutes} from 'react-router-config';
import Routes from 'routes';
import {BrowserRouter} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import constructStore from 'store';
import axios from 'axios';

ReactDOM.hydrate(
  <Provider store={constructStore()}>
    <BrowserRouter>
      {/* this replaces the typical <Routes /> component  */}
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
