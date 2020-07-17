import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./Nav";
import Home from "./Home";
import NoMatch from "./NoMatch";
import Utilities from "./Utilities";
import Randomizer from './utilities/Randomizer';
import Timer from './utilities/Timer';

import '../styles/Main.scss';

function App() {
  return (
   <Router>
     <Nav />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/utilities' component={Utilities} />
        <Route exact path='/utilities/timer' component={Timer} />
        <Route exact path='/utilities/randomizer' component={Randomizer} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;
