import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Offre = ({ marchand, support, prix, position }) => {
  return (
    <LinkTable>
      <SpanTable1>
        <LogoContainer>
          <LogoIcon
            style={{
              backgroundPosition: `${position}`
            }}
          ></LogoIcon>
          <LogoText>{marchand}</LogoText>
        </LogoContainer>
      </SpanTable1>
      <SpanTable2>{support}</SpanTable2>
      <SpanTable3>{prix}</SpanTable3>
    </LinkTable>
  );
};

const LogoText = styled.span`
  white-space: nowrap;
  display: inline-block;
  width: calc(100% - 1.875rem);
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.25rem;
  vertical-align: middle;
`;

const LogoIcon = styled.span`
  background-image: url('//static.jvc.gg/1.114.1/css/ee7e13_gp-icon-20x20.png');
  margin-right: 0.625rem;
  background-repeat: no-repeat;
  display: inline-block;
  width: 1.25rem;
  height: 1.25rem;
  vertical-align: top;
`;
const LogoContainer = styled.span`
  display: inline-block;
  white-space: nowrap;
  width: 100%;
`;
const SpanTable3 = styled.span`
  font-weight: 700;
  color: #ff572e;
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  padding-left: 2.1875rem;
  display: table-cell;
  vertical-align: middle;
  text-align: right;
`;

const SpanTable2 = styled.span`
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  color: #212121;
  display: table-cell;
  vertical-align: middle;
  text-align: right;
`;

const SpanTable1 = styled.span`
  display: table-cell;
  vertical-align: middle;
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  color: #212121;
  width: 100%;
  max-width: 0;
  text-align: left;
`;
const LinkTable = styled.a`
  display: table-row;
`;

Offre.propTypes = {
  marchand: PropTypes.string,
  support: PropTypes.string,
  prix: PropTypes.string,
  position: PropTypes.string
};

export default Offre;
