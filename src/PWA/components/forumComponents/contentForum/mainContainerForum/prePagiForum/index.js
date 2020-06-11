import React from 'react';
import styled from 'styled-components';

const PrePagiForum = () => {
  return (
    <BlocPrePagiForum>
      <BlocPreLeft>
        <GroupTow>
          <NewListForum>Nouveau sujet</NewListForum>
          <NewListForum>Liste des sujets</NewListForum>
        </GroupTow>
      </BlocPreLeft>
      <BlocPreRight>
        <ButtonAct>Actualiser</ButtonAct>
      </BlocPreRight>
    </BlocPrePagiForum>
  );
};

const ButtonAct = styled.button`
  margin-right: 0.3125rem;
  display: inline-block;
  margin-bottom: 0;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  text-transform: uppercase;
  font-weight: 700;
  padding: 0;
  font-size: 0.625rem;
  height: 1.75rem;
  line-height: 1.6875rem;
  border-radius: 0.125rem;
  border: 0.0625rem solid #5d6871;
  background: #6c7984;
  color: #fff;
  min-width: 5.25rem;
`;

const NewListForum = styled.span`
  margin-right: 0.3125rem;
  display: inline-block;
  margin-bottom: 0;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  text-transform: uppercase;
  font-weight: 700;
  padding: 0;
  font-size: 0.625rem;
  height: 1.75rem;
  min-width: 6.375rem;
  line-height: 1.6875rem;
  border-radius: 0.125rem;
  border: 0.0625rem solid #5d6871;
  background: #6c7984;
  color: #fff;
`;

const GroupTow = styled.div`
  float: none;
  text-align: left;
`;

const BlocPreLeft = styled.div`
  float: left;
`;

const BlocPreRight = styled.div`
  top: 1rem;
  position: absolute;
  right: 0;
  bottom: 1rem;
  float: right;
`;

const BlocPrePagiForum = styled.div`
  border-top: 0.0625rem solid #cdcdcd;
  padding-top: 1rem;
  margin-bottom: 1rem;
  position: relative;
  overflow: hidden;
  text-align: center;
`;

export default PrePagiForum;
