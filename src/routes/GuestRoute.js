import React from 'react';
import { Route } from 'react-router-dom';

import authService from '../services/authService';
import { Home } from '../pages/Home';
import { SignIn } from '../pages/SignIn';

export function GuestRoute({ element, ...rest }) {
  const isAuthenticated = authService.isAuthenticated();

  return <Route {...rest} element={isAuthenticated ? <Home /> : <SignIn />} />;
}
