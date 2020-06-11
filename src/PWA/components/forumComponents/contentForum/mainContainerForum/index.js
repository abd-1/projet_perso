import React from 'react';
import styled from 'styled-components';
import param from '../../../../../assets/param.png';
import etoile from '../../../../../assets/etoile.png';
import rs from '../../../../../assets/rs.png';
import alarm from '../../../../../assets/alarm.png';
import RowContentForum from './rowContentForum';
import ConteneurForumPagi from './conteneurForumPagi';
import PrePagiForum from './prePagiForum';
import ForumAnchorWrapper from './forumAnchorWrapper';
import BlocFormulaireForum from './blocFormulaireForum';

const MainContainerForum = () => {
  return (
    <MainContainer>
      <BlocFil>
        <BlocFilForum>
          <OptionCrumb>
            <SpanOptionE></SpanOptionE>
            <SpanOptionA></SpanOptionA>
            <SpanOptionRs></SpanOptionRs>
            <SpanOptionP></SpanOptionP>
          </OptionCrumb>
          <FilCrumb>
            <FilCrumbSpan>
              <LinkStyle>jeuxvideo.com</LinkStyle>
            </FilCrumbSpan>
            &nbsp;/&nbsp;
            <FilCrumbSpan>
              <LinkStyle href='/jeux/switch/jeu-922027/'>
                Animal Crossing : New Horizons
              </LinkStyle>
            </FilCrumbSpan>
          </FilCrumb>
        </BlocFilForum>
      </BlocFil>
      <RowContentForum></RowContentForum>
      <ConteneurForumPagi></ConteneurForumPagi>
      <PrePagiForum></PrePagiForum>
      <ForumAnchorWrapper></ForumAnchorWrapper>
      <BlocFormulaireForum></BlocFormulaireForum>
    </MainContainer>
  );
};

const LinkStyle = styled.a`
  font-weight: bold;
  color: #a79a9a;
  font-size: 0.75rem;
  line-height: 1.25rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: robotoboldcondensed, Arial, Helvetica, sans-serif;
  padding-left: 0.0625rem;
  text-decoration: none;
`;
const FilCrumbSpan = styled.span`
  color: #aaa;
  font-size: 0.75rem;
  line-height: 1.25rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: robotoboldcondensed, Arial, Helvetica, sans-serif;
  padding-left: 0.0625rem;
`;

const FilCrumb = styled.div`
  color: #aaa;
  font-size: 0.75rem;
  line-height: 1.25rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: robotoboldcondensed, Arial, Helvetica, sans-serif;
  padding-left: 0.0625rem;
`;

const SpanOptionP = styled.span`
  margin-left: 0.625rem;
  height: 1.25rem;
  display: inline-block;
  background-image: url(${param});
  background-repeat: no-repeat;
  background-size: 100%;
  width: 1.25rem;
  background-position: center center;
  cursor: pointer;
`;
const SpanOptionRs = styled.span`
  margin-left: 0.625rem;
  height: 1.25rem;
  display: inline-block;
  background-image: url(${rs});
  background-repeat: no-repeat;
  background-size: 100%;
  width: 1.25rem;
  background-position: center center;
  cursor: pointer;
`;
const SpanOptionE = styled.span`
  margin-left: 0.625rem;
  height: 1.25rem;
  display: inline-block;
  background-image: url(${etoile});
  background-repeat: no-repeat;
  background-size: 100%;
  width: 1.25rem;
  background-position: center center;
  cursor: pointer;
`;
const SpanOptionA = styled.span`
  margin-left: 0.625rem;
  height: 1.25rem;
  display: inline-block;
  background-image: url(${alarm});
  background-repeat: no-repeat;
  background-size: 100%;
  width: 1.25rem;
  background-position: center center;
  cursor: pointer;
`;

const OptionCrumb = styled.div`
  float: right;
  height: 1.25rem;
`;

const BlocFilForum = styled.div`
  margin: -0.625rem 0 0.75rem;
  font-size: 0.875rem;
`;

const BlocFil = styled.div`
  padding-right: 0.3125rem;
  position: relative;
  min-height: 0.0625rem;
  text-size-adjust: 100%;
`;

const MainContainer = styled.div`
  background: #efefff;
  margin: 0 auto;
  padding: 1.25rem 0.625rem 0;
  min-height: 37.5rem;
  min-width: 20rem;
`;

export default MainContainerForum;
