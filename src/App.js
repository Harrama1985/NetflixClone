import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Browser from './pages/Browser';
import Home from './pages/home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/browser">
          <Browser />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
