import React from 'react';
import styled from 'styled-components';
import whats from '../../../../assets/whats.png';
import facebook from '../../../../assets/facebook.png';
import twitter from '../../../../assets/twitter.png';

const TopForum = () => {
  return (
    <div>
      <DivMainContainer>
        <GameHeaderBarner>
          <HeaderBarnerContent>
            <LinkStyle>Animal Crossing : New Horizons</LinkStyle>
            <UlStyle>
              <LiStyle>
                <SpanStyle>Switch</SpanStyle>
              </LiStyle>
            </UlStyle>
            <GameHeaderBarnerBottom>
              <BarnerBottomSocial>
                <LinkSocial href='https://api.whatsapp.com/send?text=Forum%20Animal%20Crossing%20%3A%20New%20Horizons%20-%20http%3A%2F%2Fwww.jeuxvideo.com%2Fforums%2F0-3015138-0-1-0-1-0-animal-crossing-switch.htm'></LinkSocial>
                <LinkSocialF href='https://www.facebook.com/sharer/sharer.php?u=http://www.jeuxvideo.com/forums/0-3015138-0-1-0-1-0-animal-crossing-switch.htm'></LinkSocialF>
                <LinkSocialT href='https://twitter.com/intent/tweet?text=Forum%20Animal%20Crossing%20%3A%20New%20Horizons&url=http%3A%2F%2Fwww.jeuxvideo.com%2Fforums%2F0-3015138-0-1-0-1-0-animal-crossing-switch.htm&via=JVCom'></LinkSocialT>
              </BarnerBottomSocial>
            </GameHeaderBarnerBottom>
          </HeaderBarnerContent>
        </GameHeaderBarner>
      </DivMainContainer>
    </div>
  );
};

const LinkSocial = styled.a`
  margin-right: 0.75rem;
  color: #fff;
  background-color: #25d366;
  text-shadow: 0.0625rem 0 #25d366;
  display: inline-block;
  width: 1em;
  height: 1em;
  border-radius: 10%;
  overflow: hidden;
  background-image: url(${whats});
  background-repeat: no-repeat;
  background-size: 100%;
`;

const LinkSocialF = styled.a`
  margin-right: 0.75rem;
  color: #fff;
  background-color: #3b5998;
  text-shadow: 0.0625rem 0 #3b5998;
  display: inline-block;
  width: 1em;
  height: 1em;
  border-radius: 10%;
  overflow: hidden;
  background-image: url(${facebook});
  background-repeat: no-repeat;
  background-size: 100%;
`;

const LinkSocialT = styled.a`
  color: #fff;
  background-color: #55acee;
  text-shadow: 0.0625rem 0 #55acee;
  display: inline-block;
  width: 1em;
  height: 1em;
  border-radius: 10%;
  overflow: hidden;
  background-image: url(${twitter});
  background-repeat: no-repeat;
  background-size: 100%;
`;

const BarnerBottomSocial = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
`;

const GameHeaderBarnerBottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SpanStyle = styled.span`
  box-shadow: 0 0.125rem 0 #ff572e;
  color: #fff;
  display: block;
  padding: 0.3125rem 0;
  line-height: 0.875rem;
`;

const LiStyle = styled.li`
  display: inline-block;
`;

const UlStyle = styled.ul`
  font-size: 0.8125rem;
  margin-bottom: 0.9375rem;
  padding-left: 0;
  list-style: none;
  margin-top: 0px;
`;

const LinkStyle = styled.a`
  font-family: Roboto, Arial, Helvetica, Sans-Serif;
  color: #fff;
  font-size: 1.5rem;
  line-height: normal;
  text-decoration: none;
`;

const DivMainContainer = styled.div`
  display: block;
  margin-bottom: 0;
  background-color: #d4d4d4;
  background-repeat: no-repeat;
  background-position: top;
`;
const GameHeaderBarner = styled.div`
  background-color: #000;
  margin-top: 55px;
`;
const HeaderBarnerContent = styled.div`
  min-width: 20rem;
  padding: 0.875rem;
  text-align: left;
`;

export default TopForum;
