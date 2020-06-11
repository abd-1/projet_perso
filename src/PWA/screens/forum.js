import React from 'react';
import styled from 'styled-components';
import TopHeader from '../components/header/topHeader';
import TopForum from '../components/forumComponents/topForum';
import SubNav from '../components/forumComponents/subNav';
import ContentForum from '../components/forumComponents/contentForum';
import FooterForum from '../components/forumComponents/footerForum';
import { useSelector } from 'react-redux';

const Forum = () => {
  const messageState = useSelector(state => state.message.messages);

  console.log('messageState');
  console.log(messageState);
  return (
    <MainContainer>
      <TopHeader></TopHeader>
      <TopForum></TopForum>
      <SubNav></SubNav>
      <ContentForum></ContentForum>
      <FooterForum></FooterForum>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  background-color: #d4d4d4;
`;

export default Forum;
