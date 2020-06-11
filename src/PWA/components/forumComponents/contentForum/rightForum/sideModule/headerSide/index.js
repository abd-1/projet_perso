import React from 'react';
import styled from 'styled-components';
import offre from '../../../../../../../assets/offre.png';

const HeaderSide = () => {
  return (
    <Header>
      <HeaderIcon>
        <HeaderImg></HeaderImg>
      </HeaderIcon>
      <HeaderTitle>Meilleures offres</HeaderTitle>
    </Header>
  );
};

const HeaderTitle = styled.span`
  display: table-cell;
  vertical-align: middle;
  font-size: 1.375rem;
  line-height: 1.5625rem;
  font-family: Roboto Condensed, Arial, Helvetica, Sans-Serif;
  font-weight: 400;
  padding: 1rem 0.875rem;
  text-align: left;
  padding-left: 0;
`;

const HeaderImg = styled.span`
  display: inline-block;
  background-image: url(${offre});
  background-repeat: no-repeat;
  background-size: 100%;
  height: 3.25rem;
  width: 3.25rem;
  background-position: bottom;
`;
const HeaderIcon = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  width: 4rem;
  color: #ff572e;
  font-size: 2rem;
`;

const Header = styled.div`
  display: table;
  min-height: 4.75rem;
  height: 0.0625rem;
  width: 100%;
  border-bottom: 0.0625rem solid #e0e0e0;
`;

export default HeaderSide;
