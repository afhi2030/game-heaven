import React, { useState } from 'react';
import styled from 'styled-components';
import Footer from './footer';
import Header from './header';
import GlobalStyle from './globalStyle';

const LayoutContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export default ({ children }) => {
  return (
    <LayoutContainer>
      <GlobalStyle />
      <Header/>
        {children}
      <Footer />
    </LayoutContainer>
  );
}