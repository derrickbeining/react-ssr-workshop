import React from 'react';
import App from 'client/components/App';
import HomePage from 'client/pages/HomePage';
import AdminsListPage from 'client/pages/AdminsListPage';
import UsersListPage from 'client/pages/UsersListPage';
import NotFoundPage from 'client/pages/NotFoundPage';

export default [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        title: 'Home',
        component: HomePage,
      },
      {
        path: '/admins',
        component: AdminsListPage,
        title: 'Admins List'
      },
      {
        path: '/users',
        component: UsersListPage,
        title: 'Users Lists',
      },
      {
        component: NotFoundPage,
        title: 'Not Found',
      },
    ]
  }

];

