import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import { blue } from '../Common/color';

const HeaderContainer = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  font-weight: 700;
  padding: 2rem calc((100vw - 1300px)/2);
  background-color: ${blue};
`;

const HomeLogo = styled(Link)`
  font-size: 2rem;
  display: flex;
  justify-content: center;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 20px; 
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <HomeLogo to="/">미니게임천국</HomeLogo>
    </HeaderContainer>
  )
};

export default Header;
