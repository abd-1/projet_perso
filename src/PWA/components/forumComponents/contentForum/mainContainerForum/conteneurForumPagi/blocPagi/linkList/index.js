import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const LinkList = ({ num }) => {
  return (
    <span>
      <LinkBlocList>{num}</LinkBlocList>
    </span>
  );
};

const LinkBlocList = styled.a`
  display: inline-block;
  height: 1.75rem;
  min-width: 1.25rem;
  font-size: 0.75rem;
  padding: 0 0.25rem;
  vertical-align: middle;
  color: #006bd7;
`;

LinkList.propTypes = { num: PropTypes.string };

export default LinkList;
