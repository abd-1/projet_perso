import React from 'react';
import styled from 'styled-components';
import logoo from '../../../../assets/logoo.png';

const MiddleFooter = () => {
  return (
    <MiddleFooterContainer>
      <TitleContainer>À ne pas manquer</TitleContainer>
      <MainContent>
        <ContentStyle>
          <ImageContainer>
            <ImageStyle src='https://image.jeuxvideo.com/medias-md/158740/1587403753-footer-display-ghosts-3.jpg' />
          </ImageContainer>
          <SpanStyle>
            Faites le plein de frissons avec la box de Mai GHOSTS!
          </SpanStyle>
        </ContentStyle>
        <ContentStyle>
          <ImageContainer>
            <ImageStyle src='https://image.jeuxvideo.com/medias-md/158971/1589706904-7357-card.jpg' />
          </ImageContainer>
          <SpanStyle>Les femmes inspirantes du jeu vidéo en France</SpanStyle>
        </ContentStyle>
      </MainContent>
      <DivContainer>
        <DivLogo>
          <img src={logoo} />
        </DivLogo>
        <ListStyle>
          <LiStyle>
            <SpanList>Contact</SpanList>
          </LiStyle>
          <LiStyle>
            <SpanList>L'équipe</SpanList>
          </LiStyle>
          <LiStyle>
            <SpanList>Informations légales</SpanList>
          </LiStyle>
          <LiStyle>
            <SpanList>C.G.U.</SpanList>
          </LiStyle>
          <LiStyle>
            <SpanList>Modération</SpanList>
          </LiStyle>
          <LiStyle>
            <SpanList>Politique de confidentialité</SpanList>
          </LiStyle>
          <LiStyle>
            <SpanList>Cookies</SpanList>
          </LiStyle>
          <LiStyle>
            <SpanList>Newsletter</SpanList>
          </LiStyle>
          <LiStyle>
            <SpanList>RSS</SpanList>
          </LiStyle>
          <LiStyle>
            <SpanList>Jobs</SpanList>
          </LiStyle>
        </ListStyle>
      </DivContainer>
    </MiddleFooterContainer>
  );
};

const SpanList = styled.span`
  color: white;
  font-size: 17px;
  line-height: 30px;
  text-align: left;
`;

const LiStyle = styled.li`
  font-size: 1.0625rem;
  line-height: 1.875rem;
  font-family: 'Roboto Condensed', Arial, Helvetica, Sans-Serif;
`;

const ListStyle = styled.ul`
  margin: auto;
  padding: 0;
  list-style: none;
`;

const DivLogo = styled.div`
  display: flex;
  font-size: 1.875rem;
  margin-bottom: 1rem;
  height: 1.875rem;
`;

const DivContainer = styled.div`
  display: block;
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  line-height: 1.42857;
  color: #000;
`;

const SpanStyle = styled.span`
  font-weight: 700;
  display: block;
  font-size: 1rem;
  margin-bottom: 1.875rem;
`;

const ImageStyle = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  vertical-align: middle;
`;

const ImageContainer = styled.div`
  margin-bottom: 0.9375rem;
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
`;

const ContentStyle = styled.div`
  display: block;
  font-size: 1rem;
  margin-bottom: 1.875rem;
  text-decoration: underline;
  color: white;
  height: 250.25px;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  font-family: 'Roboto Condensed', Arial, Helvetica, Sans-Serif;
  color: #fff;
  font-size: 1.375rem;
  margin-bottom: 30px;
  height: 31px;
`;

const MiddleFooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #004365;
  padding: 1.25rem 0.875rem;
`;

export default MiddleFooter;
