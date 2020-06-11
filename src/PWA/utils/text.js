import styled from 'styled-components';

export const Blockquote = styled.blockquote`
  margin: 0 0 1.25rem;
  text-align: left;
  margin-bottom: 0.9375rem;
  border-left: 0.3125rem solid #cfcfcf;
  color: #8b8b8b;
  margin-left: 0.9375rem;
  padding: 0.625rem;
  background: none;
  font-style: normal;
  font-size: inherit;
`;

export const Label = styled.label`
  max-width: 100%;
  margin-bottom: 0.3125rem;
  font-weight: 700;
  font-family: Tahoma, Trebuchet MS, sans-serif;
  height: 1.5rem;
  line-height: 1.5rem;
  cursor: pointer;
  position: relative;
  display: block;
`;

export const TxtSpoil = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 4.6875rem;
  font-size: 0.9285em;
  text-align: center;
  color: #fff;
  text-transform: uppercase;
  background: #d90000;
  font-weight: 700;
  display: block;
`;

export const AffSpoil = styled.span`
  color: #c40;
  font-size: 0.9285em;
  font-weight: 700;
  display: block;
  margin-left: 5.3125rem;
`;

export const MasqSpoil = styled.span`
  display: none;
  color: #c40;
  font-size: 0.9285em;
  font-weight: 700;
  margin-left: 5.3125rem;
`;

export const ContenuSpoil = styled.div`
  background: #ffecec;
  border: 0.0625rem solid #fdd;
  padding: 0.625rem;
  display: none;
  text-align: left;
`;
