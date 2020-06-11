import React from 'react';
import styled from 'styled-components';
import footer from '../../../../assets/footer.png';

const BootomFooter = () => {
  return (
    <MainContainer>
      <LogoContainer src={footer}></LogoContainer>
      <PContainaire>
        <SpanStyle>jeuxvideo.com est édité par Webedia</SpanStyle>
        <SpanStyle>Copyright © 1997-2020 Webedia.</SpanStyle>
        <SpanStyle>Tous droits réservés.</SpanStyle>
      </PContainaire>
    </MainContainer>
  );
};

const SpanStyle = styled.span`
  display: block;
  color: #4da0cd;
  font-size: 0.75rem;
  line-height: 1.15;
  text-align: center;
`;

const PContainaire = styled.p`
  color: #4da0cd;
  font-size: 0.75rem;
  line-height: 1.15;
  margin: 0 0 0.625rem;
  text-align: center;
`;

const LogoContainer = styled.img`
  height: 32px;
  margin: 4px 0;
  vertical-align: middle;
  border: 0px;
`;

const MainContainer = styled.div`
  padding: 10px;
  background-color: #002f46;
  text-align: center;
`;

export default BootomFooter;
