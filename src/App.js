import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, useHistory, Redirect, Route, Switch } from 'react-router-dom'
import EquestrianPage from './components/Equestrian/EquestrianPage'
import WebPage from './components/Web/WebPage'
import LandingPage from './components/LandingPage'

function App(props) {
  
  return (
      // <Router>
           
      //   <Switch>
      //     <Route exact path='/' component={LandingPage}/>
      //     <Route exact path='/equestrian' component={EquestrianPage} />
      //     <Route exact path='/web-development' component={WebPage} />
      //   </Switch>

      // </Router>
      <WebPage />

  );
}

export default App;
