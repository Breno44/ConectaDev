import React from 'react';
import { Route } from 'react-router-dom';

import authService from '../services/authService';
import { Home } from '../pages/Home';

export function GuestRoute({ component, ...rest }) {
  const isAuthenticated = authService.isAuthenticated();

  return <Route {...rest} component={isAuthenticated ? <Home /> : component} />;
}
