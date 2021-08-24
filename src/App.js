import React from 'react';
import { Home } from './pages/Home';
import { GuestRoute } from './routes/GuestRoute';
import { SignIn } from './pages/SignIn';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import theme from './theme';

import './mock/index';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <GuestRoute path="/Sign-in" component={SignIn} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
