import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import styled from 'styled-components';
import MenuSlider from './components/slider';
import Layout from './components/Layout';
import Home from './components/Home';
import Game from './components/Game';
import Ranking from './components/Ranking';
import Dashboard from './components/Dashboard';

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

const MainContainer =  styled.div`
  height: 100%;
`;

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenuSlider = () => {
    setIsOpen((currentVale) => (!currentVale));
  }
  const toggleMnueAfterClickLink = () => {
    setIsOpen(false);
  }
  return (
    <Router>
      <MenuIcon>
        <BiMenu onClick={toggleMenuSlider} />
        <MenuSlider
          isOpen={isOpen}
          toggleMenuSlider={toggleMenuSlider}
          toggleMnueAfterClickLink={toggleMnueAfterClickLink}
        />
      </MenuIcon>
      <Layout>
        <MainContainer>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/game'>
              <Game />
            </Route>
            <Route exact path='/ranking/:id'>
              <Ranking />
            </Route>
            <Route exact path='/dashboard/:id'>
              <Dashboard />
            </Route>
          </Switch>
        </MainContainer>
      </Layout>
    </Router>
  );
}

export default App;
