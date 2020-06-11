import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Header from '../components/header';
import Signin from '../components/signin';
import Footer from '../components/footer';

const Login = ({ history }) => {
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      history.push('/forum');
    }
  }, []);
  return (
    <DivContainer>
      <Header></Header>
      <Signin></Signin>
      <DivSeparted></DivSeparted>
      <Footer></Footer>
    </DivContainer>
  );
};

const DivContainer = styled.div`
  background-color: #f4f2f2;
`;

const DivSeparted = styled.div`
  height: 30px;
  background: #d4d4d4;
`;

Login.propTypes = { history: PropTypes.object };
export default Login;
