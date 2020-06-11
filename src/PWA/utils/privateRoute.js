import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return <Route {...rest} render={props => <Component {...props} />}></Route>;
};

PrivateRoute.propTypes = { component: PropTypes.func };

export default PrivateRoute;
