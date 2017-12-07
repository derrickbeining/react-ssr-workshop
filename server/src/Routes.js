import React from 'react';
import HomePage from 'client/pages/HomePage';
import UsersListPage from 'client/pages/UsersListPage';

export default [
  {
    path: '/',
    component: HomePage,
    exact: true,
  },
  {
    path: '/users',
    component: UsersListPage,
    loadData: UsersListPage.loadData,
  }
];
