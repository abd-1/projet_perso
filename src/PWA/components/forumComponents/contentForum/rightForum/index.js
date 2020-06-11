import React from 'react';
import styled from 'styled-components';
import PanelForum from './panelForum';
import SideModule from './sideModule';

const RightForum = () => {
  return (
    <MainDiv>
      <div>
        <PanelForum></PanelForum>
        <SideModule></SideModule>
      </div>
    </MainDiv>
  );
};

const MainDiv = styled.div`
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  display: block;
`;

export default RightForum;
