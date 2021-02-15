import React from 'react';
import styled from 'styled-components';
import { NavLink as Link  } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { yellow } from './common/color';

const SliderContainer = styled.div`
  top: 0;
  position: fixed;
  z-index: 999;
  width: 300px;
  height: 100%;
  background: ${yellow};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.3s ease-in-out;
  right: ${({ isOpen }) => ( isOpen ? '0' : '-2000px')};

  @media screen and (max-width: 400px) {
    width: 100%
  }
`;

const Icon = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background-color: transparent;
  border: transparent;
  cursor: pointer;
  outline: none;
  svg {
    width: 2rem;
    height: 2rem;
      &:hover {
      background-color: #fff;
      transition: 0.2s ease-in-out;
      color: #010606;
    }
  }
`;

const MenuList = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Menu = styled(Link)`
  display: flex;
  padding: 10px;
  justify-content: center;
  color: #fff;
  text-decoration: none;
  font-size: 2rem;
  &:hover {
    background-color: #fff;
    transition: 0.2s ease-in-out;
    color: #010606;
  }
`;

function MenuSlider({ isOpen, toggleMenuSlider, toggleMnueAfterClickLink }) {
  return (
    <SliderContainer isOpen={isOpen}>
      <Icon onClick={toggleMenuSlider}>
        <AiOutlineClose />
      </Icon>
      <MenuList>
        <Menu to="/" onClick={toggleMnueAfterClickLink}>로그인</Menu>
        <Menu to="/game" onClick={toggleMnueAfterClickLink}>게임</Menu>
        <Menu to="/ranking/1" onClick={toggleMnueAfterClickLink}>랭킹</Menu>
        <Menu to="/dashboard" onClick={toggleMnueAfterClickLink}>전적</Menu>
      </MenuList>
    </SliderContainer>
  )
}

export default MenuSlider
