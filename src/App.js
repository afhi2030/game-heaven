import React from 'react'
import { 
  BrowserRouter as Router,
  Link, 
  Switch,
  Route
} from 'react-router-dom';
import Home from './Home';
import Breakout from './Games/Breakout/Index';
import './App.css';

function App() {
  return (
    <Router>
    <div>
      <h1>Hello Mini Game Heaven</h1>
      <nav>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/breakout">Breakout</Link></li>
      </nav>

      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/breakout"><Breakout /></Route>
      </Switch>
    </div>
    </Router>
  )
}

export default App