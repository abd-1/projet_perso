import React from 'react';
import styled from 'styled-components';
import HeaderSide from './headerSide';
import GameAffiliateSide from './gameAffiliateSide';
import FooterSide from './footerSide';

const SideModule = () => {
  return (
    <MainDiv>
      <HeaderSide></HeaderSide>
      <GameAffiliateSide></GameAffiliateSide>
      <FooterSide></FooterSide>
    </MainDiv>
  );
};

const MainDiv = styled.div`
  margin-bottom: 1.25rem;
  background-color: #fff;
  color: #212121;
  overflow: hidden;
`;

export default SideModule;
