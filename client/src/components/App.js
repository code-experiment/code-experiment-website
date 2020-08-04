import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./nav/Nav";
import Home from "./Home";
import NoMatch from "./NoMatch";
import Utilities from "./Utilities";
import Randomizer from './utilities/Randomizer';
import Timer from './utilities/Timer';

import '../styles/Main.scss';
import ModalProvider from "../providers/ModalProvider";
import Modal from "../helpers/Modal";
import BigWinner from "./utilities/BigWinner";

function App() {
  return (
  <ModalProvider>
    <Router>
      <Nav />
      <Modal />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/utilities' component={Utilities} />
        <Route exact path='/utilities/bigwinner' component={BigWinner} />
        <Route exact path='/utilities/randomizer' component={Randomizer} />
        <Route exact path='/utilities/timer' component={Timer} />
        
        <Route component={NoMatch} />
      </Switch>
    </Router>
  </ModalProvider>
  );
}

export default App;
