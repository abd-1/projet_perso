import React from 'react';
import styled from 'styled-components';
import logo from '../../../../assets/logo.png';
import Menu from '../../../../assets/Menu.png';
import search from '../../../../assets/search.png';
import signin from '../../../../assets/signin.png';
import { useHistory } from 'react-router-dom';

const TopHeader = () => {
  const history = useHistory();

  const connect = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      history.push('/login/');
    } else {
      localStorage.removeItem('token');
      alert('vous êtes déconnecté');
    }
  };
  return (
    <MainContainer>
      <MainDiv>
        <div>
          <ImgContainer src={Menu} />
          <ImgContainer src={logo} />
        </div>
        <div>
          <ImgContainer src={search} />
          <ImgContainer src={signin} onClick={() => connect()} />
        </div>
      </MainDiv>
    </MainContainer>
  );
};

const MainDiv = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #064362;
`;
const MainContainer = styled.div`
  position: fixed;
  width: auto;
  display: block;
  top: 0;
  left: 0;
  z-index: 1999999987;
  right: 0;
`;

const ImgContainer = styled.img`
  height: 51px;
  margin: 0px 3px;
`;

export default TopHeader;
