import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Login from '../screens/login';
import Forum from '../screens/forum';
import PrivateRoute from '../utils/privateRoute';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Forum} />
        <PrivateRoute path='/login/' component={Login} />
        <Redirect to='/'></Redirect>
      </Switch>
    </Router>
  );
};

export default Routes;
