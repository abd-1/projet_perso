import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { ecrireMessage } from '../../../../../../../actions/message';
import Hikkary from '../../../../../../../../assets/Hikkary.png';

const ButtonPost = ({ msg }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const getDate = () => {
    const timestamp = Date.now();
    return new Intl.DateTimeFormat('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }).format(timestamp);
  };

  const Post = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      history.push('/login');
    } else {
      dispatch(
        ecrireMessage({
          dateMsg: getDate(),
          img: Hikkary,
          message: msg,
          pseudo: 'Hikkary'
        })
      );
      history.push('/forum');
    }
  };
  return (
    <MainDiv>
      <ButtonPoster type='button' onClick={Post}>
        Poster
      </ButtonPoster>
      <SpanHarassment>
        Victime de harcèlement en ligne :{' '}
        <LinkHarassment>comment réagir ?</LinkHarassment>
      </SpanHarassment>
    </MainDiv>
  );
};

const LinkHarassment = styled.a`
  color: inherit;
  text-decoration: underline;
`;

const SpanHarassment = styled.span`
  display: block;
  color: #9e9e9e;
  font-style: italic;
  margin: 1.875rem 0 0;
  font-size: 0.75rem;
`;

const ButtonPoster = styled.button`
  border: 0.0625rem solid transparent;
  border-radius: 0.125rem;
  cursor: pointer;
  display: inline-block;
  margin-bottom: 0;
  padding: 0 2.5rem;
  text-align: center;
  vertical-align: bottom;
  white-space: nowrap;
  background: #fd612c;
  color: #fff;
  font-weight: 700;
  height: 2rem;
  text-transform: uppercase;
  font-size: 0.8125rem;
  margin-right: 0.75rem;
`;

const MainDiv = styled.div`
  padding-left: 0.3125rem;
  padding-right: 0.3125rem;
  position: relative;
  min-height: 0.0625rem;
`;

ButtonPost.propTypes = {
  msg: PropTypes.string
};

export default ButtonPost;
