import React, { useState } from 'react';
import styled from 'styled-components';
import Footer from './footer';
import Header from './header';
import GlobalStyle from './globalStyle';

const LayoutContainer = styled.div`
  height: 100vh;
`;

export default ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenuSlider = () => {
    setIsOpen((currentVale) => (!currentVale));
  }
  return (
    <LayoutContainer>
      <GlobalStyle />
      <Header isOpen={isOpen} toggleMenuSlider={toggleMenuSlider}/>
        {children}
      <Footer />
    </LayoutContainer>
  );
}