import React from 'react';
import { Home } from './pages/Home';
import { SignIn } from './pages/SignIn';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Sign-in" component={SignIn} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
