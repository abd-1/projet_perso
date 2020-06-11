import React from 'react';
import styled from 'styled-components';
import TopFooter from './topFooter';
import MiddleFooter from './middleFooter';
import BottomFooter from './bottomFooter';

const Footer = () => {
  return (
    <FooterContainer>
      <TopFooter></TopFooter>
      <MiddleFooter></MiddleFooter>
      <BottomFooter></BottomFooter>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  background-color: #f2f2f2;
`;

export default Footer;
