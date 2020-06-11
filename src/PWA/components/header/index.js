import React from 'react';
import styled from 'styled-components';
import BottomHeader from './bottomHeader';
import TopHeader from './topHeader';

const Header = () => {
  return (
    <DivContainer>
      <TopHeader> </TopHeader>
      <BottomHeader></BottomHeader>
    </DivContainer>
  );
};

const DivContainer = styled.div`
  background-color: #f4f2f2;
`;

export default Header;
