import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import { BiMenu } from 'react-icons/bi';
import { blue } from '../common/color';
import MenuSlider from './slider';


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

const MenuIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #fff;
  svg {
    width: 2rem;
    height: 2rem;
    transform: translate(-100%, 100%);
    /* font-weight: bold; */
  }
`;

function Header({ isOpen, toggleMenuSlider }) {
  return (
    <HeaderContainer>
      <HomeLogo to="/">미니게임천국</HomeLogo>
      <MenuIcon>
        <BiMenu onClick={toggleMenuSlider} />
        <MenuSlider isOpen={isOpen} toggleMenuSlider={toggleMenuSlider}/>
      </MenuIcon>
    </HeaderContainer>
  )
};

export default Header;
