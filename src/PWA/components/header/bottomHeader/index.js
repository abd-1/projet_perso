import React from 'react';
import styled from 'styled-components';
import connexion from '../../../../assets/connexion.png';

const BottomHeader = () => {
  return (
    <MainContainer>
      <HrContainer1 />
      <DivContainer>
        <ImgContainer src={connexion} />
        <SpanContainer>Se connecter</SpanContainer>
      </DivContainer>
      <HrContainer />

      <PContainer>
        Vous tentez d'accéder à un contenu qui nécessite que vous soyez
        connecté(e).
      </PContainer>
      <HrContainer />
    </MainContainer>
  );
};

const MainContainer = styled.div`
  padding-top: 55px;
`;

const DivContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 13px;
`;

const SpanContainer = styled.span`
  font-size: 19px;
  color: rgb(255, 64, 0);
  font-weight: bold;
  letter-spacing: -1px;
  font-family: Arial, Helvetica, sans-serif;
`;
const ImgContainer = styled.img`
  height: 13px;
  margin: 0px 9px 0px 0px;
`;

const HrContainer1 = styled.hr`
  width: 93%;
  text-align: center;
  background-color: #d4d4d4;
  color: #d4d4d4;
  margin-top: 21px;
`;

const HrContainer = styled.hr`
  width: 93%;
  text-align: center;
  background-color: #f4b59e;
  margin-top: 21px;
  border: solid 0.5px #f4b59e;
`;

const PContainer = styled.p`
  margin-left: 13px;
  color: rgb(255, 64, 0);
  font-weight: bold;
  font-size: 14px;
`;

export default BottomHeader;
