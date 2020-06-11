import React from 'react';
import styled from 'styled-components';
import chat from '../../../../assets/chat.png';
import forummenu from '../../../../assets/forummenu.png';

const SubNav = () => {
  return (
    <div>
      <HeaderSubNav>
        <SubNavContainer>
          <SpanForumIcon></SpanForumIcon>
          <SubNavTitle>Forum</SubNavTitle>
          <SubNavMenu></SubNavMenu>
        </SubNavContainer>
      </HeaderSubNav>
    </div>
  );
};

const SubNavMenu = styled.span`
  background-color: #e64a19;
  cursor: pointer;
  font-size: 1.5rem;
  width: 2.375rem;
  height: 2.375rem;
  border-radius: 50%;
  line-height: 2rem;
  text-align: center;
  background-image: url(${forummenu});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center center;
`;

const SubNavTitle = styled.span`
  flex-grow: 1;
  font-size: 1.0625rem;
`;

const SpanForumIcon = styled.span`
  width: 24px;
  height: 34px;
  font-size: 1.5rem;
  margin-bottom: 0.3125rem;
  margin-right: 0.625rem;
  background-image: url(${chat});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center center;
`;

const SubNavContainer = styled.div`
  display: flex;
  align-items: center;
  min-width: 20rem;
  position: relative;
  padding-left: 0.875rem;
  padding-right: 0.875rem;
  height: 4rem;
`;

const HeaderSubNav = styled.div`
  box-shadow: 0 0.125rem 0.25rem -0.0625rem rgba(0, 0, 0, 0.14),
    0 0.25rem 0.3125rem 0 rgba(0, 0, 0, 0.098),
    0 0.0625rem 0.625rem 0 rgba(0, 0, 0, 0.082);
  width: 100%;
  margin-bottom: 1.25rem;
  background-color: #ff572e;
  color: #fff;
`;

export default SubNav;
