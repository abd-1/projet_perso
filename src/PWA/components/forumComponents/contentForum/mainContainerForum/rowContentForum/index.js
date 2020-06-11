import React from 'react';
import styled from 'styled-components';
import connexion from '../../../../../../assets/connexion.png';

const RowContentForum = () => {
  return (
    <RowFlexLayout>
      <ForumMainCol>
        <TitleHeadBloc>
          <TitleBloc>
            <SpanConnexion></SpanConnexion>
            <span style={{ color: '#888' }}>Sujet :</span>
            <span>Le Bananier de la Modération !</span>
          </TitleBloc>
        </TitleHeadBloc>
        <BlocPreForum>
          <BlocPreLeft>
            <GroupOne>
              <LinkBlocLeft>
                <SpanBlocPreLeft>Répondre</SpanBlocPreLeft>
              </LinkBlocLeft>
            </GroupOne>
            <GroupTwo>
              <LinkBlocLeft>
                <SpanGroupTow>Nouveau sujet</SpanGroupTow>
              </LinkBlocLeft>
              <LinkBlocLeft>
                <SpanGroupTow>Liste des sujets</SpanGroupTow>
              </LinkBlocLeft>
            </GroupTwo>
          </BlocPreLeft>
          <BlocPreRight>
            <ButtonAct>Actualiser</ButtonAct>
          </BlocPreRight>
        </BlocPreForum>
      </ForumMainCol>
    </RowFlexLayout>
  );
};

const ButtonAct = styled.button`
  border: 0.0625rem solid #5d6871;
  background: #6c7984;
  color: #fff;
  min-width: 5.25rem;
  text-transform: uppercase;
  font-weight: 700;
  padding: 0;
  font-size: 0.625rem;
  height: 1.75rem;
  line-height: 1.6875rem;
  border-radius: 0.125rem;
  display: inline-block;
  margin-bottom: 0;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
`;

const SpanGroupTow = styled.span`
  border: 0.0625rem solid #5d6871;
  background: #6c7984;
  color: #fff;
  text-transform: uppercase;
  font-weight: 700;
  padding: 0;
  font-size: 0.625rem;
  height: 1.75rem;
  min-width: 6.375rem;
  line-height: 1.6875rem;
  border-radius: 0.125rem;
  display: inline-block;
  margin-bottom: 0;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
`;

const SpanBlocPreLeft = styled.span`
  border: 0.0625rem solid #e25403;
  background: #ff6205;
  color: #fff;
  font-size: 0.75rem;
  text-transform: uppercase;
  font-weight: 700;
  padding: 0;
  height: 1.75rem;
  min-width: 6.375rem;
  line-height: 1.6875rem;
  border-radius: 0.125rem;
  display: inline-block;
  margin-bottom: 0;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  user-select: none;
`;

const LinkBlocLeft = styled.a`
  margin-right: 0.3125rem;
  color: #006bd7;
  text-decoration: none;
  text-align: left;
`;

const BlocPreLeft = styled.div`
  float: left;
`;

const GroupOne = styled.div`
  float: none;
  text-align: left;
  margin-bottom: 0.3125rem;
`;

const GroupTwo = styled.div`
  float: none;
  text-align: left;
`;

const BlocPreRight = styled.div`
  position: absolute;
  right: 0;
  bottom: 1rem;
  float: right;
`;

const BlocPreForum = styled.div`
  border-bottom: 0.0625rem solid #cdcdcd;
  padding-bottom: 1rem;
  margin-bottom: 0.625rem;
  position: relative;
  overflow: hidden;
  text-align: center;
`;

const SpanConnexion = styled.span`
  width: 14px;
  height: 15px;
  font-size: 0.875rem;
  margin-right: 0.5rem;
  background-image: url(${connexion});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center center;
  cursor: pointer;
  display: inline-block;
`;

const TitleBloc = styled.div`
  float: none;
  margin-bottom: 0.75rem;
  line-height: 1em;
  font-family: robotoboldcondensed, Arial, Helvetica, sans-serif;
  font-weight: 700;
  color: #ff4000;
  margin: 0;
`;

const TitleHeadBloc = styled.div`
  border-top: 0.125rem solid #d5d5d5;
  margin-bottom: 0.75rem;
  overflow: hidden;
  padding-bottom: 0.75rem;
  padding-top: 1rem;
`;

const ForumMainCol = styled.div`
  padding-left: 0.3125rem;
  padding-right: 0.3125rem;
  display: block;
`;

const RowFlexLayout = styled.div`
  margin-left: -0.3125rem;
  margin-right: -0.3125rem;
  display: block;
`;

export default RowContentForum;
