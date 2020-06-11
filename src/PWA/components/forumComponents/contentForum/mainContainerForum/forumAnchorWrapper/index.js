import React from 'react';
import styled from 'styled-components';

const ForumAnchorWrapper = () => {
  return (
    <ForumAnchorWrapperStyle>
      <AnchorWrapper>
        <div>
          <AnchorCard>
            <AnchorImgContainer>
              <AnchorImg></AnchorImg>
            </AnchorImgContainer>
            <AnchorInfo>
              <AnchorMeatdata>
                <AnchorTypeTitle>News inside jeuxvideo.com</AnchorTypeTitle>
                <AnchorTitle>
                  <AnchorTitleLink>
                    Votre usage des forums, l'enquête
                  </AnchorTitleLink>
                  <AnchorDescrtion>
                    À l'heure où les réseaux sociaux et les outils permettant
                    d'échanger sur internet occupent de plus en plus de place,
                    quel usage pour les forums ?
                  </AnchorDescrtion>
                </AnchorTitle>
              </AnchorMeatdata>
            </AnchorInfo>
            <AnchorFooter>
              <AnchorPlatform></AnchorPlatform>
            </AnchorFooter>
          </AnchorCard>
        </div>
      </AnchorWrapper>
    </ForumAnchorWrapperStyle>
  );
};

const AnchorPlatform = styled.div`
  font-size: 0.75rem;
  line-height: 2rem;
  height: 2rem;
  max-width: 8.75rem;
  color: #757575;
  word-spacing: 0.3125rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const AnchorFooter = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: 2rem;
  height: 2rem;
  border-top: 0.0625rem solid #e0e0e0;
`;
const AnchorDescrtion = styled.div`
  position: relative;
  font-size: 0.9375rem;
  line-height: 1.5625rem;
  color: #212121;
`;

const AnchorTitleLink = styled.a`
  display: block;
  max-height: 4.6875rem;
  overflow: hidden;
  line-height: 1.15;
  word-wrap: break-word;
  color: #212121;
`;

const AnchorTitle = styled.div`
  margin: 0 0 1rem;
  font-weight: 400;
  font-size: 1.375rem;
  line-height: normal;
  font-family: arial, sans-serif;
`;

const AnchorTypeTitle = styled.div`
  font-size: 0.75rem;
  line-height: 1rem;
  margin-bottom: 1rem;
  color: #757575;
`;

const AnchorMeatdata = styled.div`
  flex-grow: 1;
  max-height: 9.375rem;
  overflow: hidden;
  margin-bottom: 1.25rem;
`;

const AnchorInfo = styled.div`
  display: flex;
  flex-flow: column-reverse;
  justify-content: flex-end;
`;

const AnchorImg = styled.div`
  padding-bottom: 56.25%;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
  background-image: url('http://image.jeuxvideo.com/medias-md/158988/1589879359-4214-card.png');
`;

const AnchorImgContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 1.25rem;
  height: 180px;
`;

const AnchorCard = styled.div`
  flex-direction: column;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
  background-color: #fff;
  padding: 2rem 0.875rem 0;
`;

const AnchorWrapper = styled.div`
  width: 100%;
  margin-bottom: 1.5625rem;
  font-size: 0.875rem;
`;

const ForumAnchorWrapperStyle = styled.div`
  border-top: 0.125rem solid #d5d5d5;
  padding-top: 1rem;
`;

export default ForumAnchorWrapper;
