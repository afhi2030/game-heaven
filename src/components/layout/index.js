import React from 'react';
import styled from 'styled-components';
import Footer from './footer';
import Header from './header';

const LayoutContainer = styled.div``;

export default ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
        {children}
      <Footer />
    </LayoutContainer>
  );
}