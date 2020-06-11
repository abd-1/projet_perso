import React from 'react';
import styled from 'styled-components';
import forum from '../../../../../../assets/forum.png';
import ForumPost from './forumPost';

const BlocFormulaireForum = () => {
  return (
    <div>
      <TitreHeadBloc>
        <TitreBloc>Répondre</TitreBloc>
      </TitreHeadBloc>
      <ForumPost></ForumPost>
    </div>
  );
};

const TitreBloc = styled.div`
  float: none;
  margin-bottom: 0.75rem;
  font-family: robotoboldcondensed, Arial, Helvetica, sans-serif;
  font-size: 1.25rem;
  line-height: 1em;
  color: #ff4000;
  font-weight: 700;
  &:before {
    content: url(${forum});
    font-size: 0.875rem;
    margin-right: 0.5rem;

    font-family: icons;
    speak: none;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    letter-spacing: 0;
    vertical-align: bottom;
  }
`;

const TitreHeadBloc = styled.div`
  border-top: 0.125rem solid #d5d5d5;
  margin-bottom: 0.75rem;
  overflow: hidden;
  padding-bottom: 0.75rem;
  padding-top: 1rem;
  font-size: 0.75rem;
`;

export default BlocFormulaireForum;
