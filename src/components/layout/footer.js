import React from 'react';
import styled from 'styled-components';
import { blue } from '../Common/color';

const FooterContainer = styled.div`
  height: 90px;
  padding: 1rem;
  display: flex;
  align-items: center;
  background: ${blue};
  color: #eee;
  font-weight: 500;
`;

function Footer() {
  return (
    <FooterContainer>
      &copy; {new Date().getFullYear()} 미니게임천국 
    </FooterContainer>
  )
};

export default Footer;
