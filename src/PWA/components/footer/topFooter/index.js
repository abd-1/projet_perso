import React from 'react';
import styled from 'styled-components';
import fb from '../../../../assets/fb.png';
import tw from '../../../../assets/tw.png';
import ins from '../../../../assets/ins.png';
import you from '../../../../assets/you.png';
import rss from '../../../../assets/rss.png';
import win from '../../../../assets/win.png';
import apple from '../../../../assets/apple.png';
import google from '../../../../assets/google.png';

const TopFooter = () => {
  return (
    <TopFooterStyle>
      <MainContainer>
        <TitleStyle>Nous suivre</TitleStyle>
        <UlStyle>
          <LiStyle>
            <ImgStyle src={fb} />
          </LiStyle>
          <LiStyle>
            <ImgStyle src={tw} />
          </LiStyle>
          <LiStyle>
            <ImgStyle src={ins} />
          </LiStyle>
          <LiStyle>
            <ImgStyle src={you} />
          </LiStyle>
          <LiStyle>
            <ImgStyle src={rss} />
          </LiStyle>
        </UlStyle>
      </MainContainer>
      <TelCantainer>
        <TextStyle>Télécharger l'app</TextStyle>
        <AppContiater>
          <ImgAppContainer src={google} />
          <ImgAppContainer src={apple} />
          <ImgAppContainer src={win} />
        </AppContiater>
      </TelCantainer>
    </TopFooterStyle>
  );
};

const ImgAppContainer = styled.img`
  margin: 0px 10px 10px 0px;
`;

const AppContiater = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const TextStyle = styled.div`
  color: #212121;
  font-family: Roboto_Condensed, Arial, Helvetica, Sans-Serif;
  font-size: 1.375rem;
  margin-bottom: 1.5625rem;
`;

const TelCantainer = styled.div`
  padding-top: 30px;
  width: 100%;
`;

const ImgStyle = styled.img`
  color: #3b5998;
  background-color: #fff;
  width: 100%;
  height: 100%;
  border-radius: 10%;
  line-height: 1;
  overflow: hidden;
  display: block;
`;

const LiStyle = styled.li`
  margin: 0 0.3125rem;
  width: 2rem;
  height: 2rem;
  font-size: 2rem;
`;

const UlStyle = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  font-size: 2.25rem;
  margin: auto;
  padding: 0;
  list-style: none;
`;

const TitleStyle = styled.div`
  color: #212121;
  font-family: Roboto Condensed, Arial, Helvetica, Sans-Serif;
  font-size: 1.375rem;
  margin-bottom: 1.5625rem;
`;

const MainContainer = styled.div`
  padding-bottom: 1.875rem;
  border-bottom: 0.0625rem solid #e0e0e0;
  width: 100%;
`;

const TopFooterStyle = styled.div`
  text-align: center;
  padding: 1.875rem 0;
  margin: auto;
`;

export default TopFooter;
