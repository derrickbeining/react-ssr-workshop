import React from 'react';
import {renderRoutes} from 'react-router-config';
import Header from 'client/components/Header';
import {fetchCurrentUser} from 'store/actions';

const App = ({route}) => {

  return (
    <div>
      <Header />
      {renderRoutes(route.routes)}
      <h2>Footer</h2>
    </div>
  )
};


App.loadData = (store) => store.dispatch(fetchCurrentUser());
export default App;
