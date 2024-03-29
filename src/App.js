import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { IsUserRedirect, ProtectedRoute } from './helpers/routers';
import Browser from './pages/Browser';
import Home from './pages/home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import useAuthListener from './hooks/useAuthListener';

function App() {
  const { user } = useAuthListener();
  return (
    <BrowserRouter>
      <Switch>
        <IsUserRedirect exact user={user} loggedInPath="/browser" path="/">
          <Home />
        </IsUserRedirect>
        <ProtectedRoute user={user} path="/browser">
          <Browser />
        </ProtectedRoute>
        <IsUserRedirect user={user} loggedInPath="/browser" path="/signin">
          <Signin />
        </IsUserRedirect>
        <IsUserRedirect user={user} loggedInPath="/browser" path="/signup">
          <Signup />
        </IsUserRedirect>
      </Switch>
    </BrowserRouter>
  );
}

//ProtectedRoute > <Redirect to={{ pathname: '/signin', state: { from: location } }} /> ????????????

export default App;
