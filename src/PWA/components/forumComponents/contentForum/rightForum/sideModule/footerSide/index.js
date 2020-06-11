import React from 'react';
import styled from 'styled-components';

const FooterSide = () => {
  return (
    <MainDiv>
      <ButtonFooter>Voir toutes les offres</ButtonFooter>
    </MainDiv>
  );
};

const ButtonFooter = styled.a`
  display: inline-block;
  padding: 0 1.25rem;
  margin: 0;
  border: 0.0625rem solid #ff572e;
  height: 2.25rem;
  line-height: 2.25rem;
  font-size: 0.9375rem;
  text-decoration: none;
  color: #fff;
  border-radius: 0.25rem;
  background-color: #ff572e;
  white-space: nowrap;
  cursor: pointer;
`;

const MainDiv = styled.div`
  border-top: 0.0625rem solid #e0e0e0;
  padding: 1.25rem 0;
  text-align: center;
`;

export default FooterSide;
