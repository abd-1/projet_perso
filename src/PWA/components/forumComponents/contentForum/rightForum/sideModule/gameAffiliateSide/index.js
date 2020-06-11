import React from 'react';
import styled from 'styled-components';
import Offre from './offre';

const GameAffiliateSide = () => {
  return (
    <GameAffiliate>
      <GameAffiliateContainer>
        <GameAffiliateTable>
          <Offre
            marchand='Cdiscount'
            support='Switch'
            prix='44.99€'
            position='0 -17.5rem'
          ></Offre>
          <Offre
            marchand='Fnac'
            support='Switch'
            prix='53.99€'
            position='0 -3.75rem'
          ></Offre>
          <Offre
            marchand='Rakuten'
            support='Switch'
            prix='54.49€'
            position='0 -6.25rem'
          ></Offre>
          <Offre
            marchand='Fnac'
            support='Switch'
            prix='54.99€'
            position='0 -3.75rem'
          ></Offre>
          <Offre
            marchand='Amazon'
            support='Switch'
            prix='54.99€'
            position='0 -11.25rem'
          ></Offre>
          <Offre
            marchand='Fnac Marketplace'
            support='Switch'
            prix='59.78€'
            position='0 -25rem'
          ></Offre>
        </GameAffiliateTable>
      </GameAffiliateContainer>
    </GameAffiliate>
  );
};

const GameAffiliateTable = styled.div`
  margin-bottom: 0;
  display: table;
  table-layout: auto;
  font-size: 0.8125rem;
  width: 100%;
`;

const GameAffiliateContainer = styled.div`
  padding: 1.875rem 0.875rem;
  background-color: #fafafa;
  overflow: hidden;
`;

const GameAffiliate = styled.div`
  background: #f2f2f2;
`;

export default GameAffiliateSide;
