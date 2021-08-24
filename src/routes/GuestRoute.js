import React from 'react';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import authService from '../services/authService';
import { Home } from '../pages/Home';

export function GuestRoute({ element: Component, ...rest }) {
  const account = useSelector((state) => state.account);
  const isAuthenticated = Boolean(account.user);

  return <Route {...rest} element={isAuthenticated ? <Home /> : Component} />;
}
