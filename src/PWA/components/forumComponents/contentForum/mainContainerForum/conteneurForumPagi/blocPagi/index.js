import React from 'react';
import styled from 'styled-components';
import fin from '../../../../../../../assets/fin.png';
import suivante from '../../../../../../../assets/suivante.png';
import LinkList from './linkList';

const BlocPagi = () => {
  return (
    <BlocPagiDefault>
      <PagiBefore></PagiBefore>
      <BlocListeNum>
        <SpanBlocList>1</SpanBlocList>
        <LinkList num='2'></LinkList>
        <LinkList num='3'></LinkList>
        <LinkList num='4'></LinkList>
        <LinkList num='5'></LinkList>
        <LinkList num='6'></LinkList>
        <LinkList num='7'></LinkList>
        <LinkList num='8'></LinkList>
        <LinkList num='9'></LinkList>
        <LinkList num='10'></LinkList>
        <LinkList num='11'></LinkList>
        ...
        <LinkList num='114'></LinkList>
        <LinkList num='»'></LinkList>
      </BlocListeNum>
      <PagiAfter>
        <span>
          <LinkPagiAfter></LinkPagiAfter>
        </span>
        <span style={{ margin: '0 0 0 .9375rem ' }}>
          <LinkPagiAfter2></LinkPagiAfter2>
        </span>
      </PagiAfter>
    </BlocPagiDefault>
  );
};

const SpanBlocList = styled.span`
  display: inline-block;
  height: 1.75rem;
  min-width: 1.25rem;
  line-height: 1.75rem;
  font-size: 0.75rem;
  padding: 0 0.25rem;
  text-align: center;
  vertical-align: middle;
  font-weight: 700;
  background: #f60;
  color: #fff;
`;

const LinkPagiAfter2 = styled.a`
  display: inline-block;
  width: 1.75rem;
  height: 1.75rem;
  line-height: 1.75rem;
  background: #d2d2d2;
  text-align: center;
  vertical-align: middle;
  color: #000;
  background-image: url(${fin});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center center;
`;

const LinkPagiAfter = styled.a`
  display: inline-block;
  width: 1.75rem;
  height: 1.75rem;
  line-height: 1.75rem;
  background: #d2d2d2;
  text-align: center;
  vertical-align: middle;
  color: #000;
  background-image: url(${suivante});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center center;
`;

const PagiAfter = styled.div`
  text-align: right;
  width: 5rem;
  min-height: 1.5625rem;
  display: table-cell;
`;

const BlocListeNum = styled.div`
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  height: 1.75rem;
  line-height: 1.75rem;
  overflow: hidden;
  font-size: 0.6875rem;
  font-weight: 700;
  word-wrap: break-word;
`;

const PagiBefore = styled.div`
  text-align: left;
  width: 5rem;
  min-height: 1.5625rem;
  display: table-cell;
`;

const BlocPagiDefault = styled.div`
  margin-bottom: 0.625rem;
  height: 1.5rem;
  line-height: 0;
  text-align: center;
  display: table;
  table-layout: fixed;
  width: 100%;
`;

export default BlocPagi;
