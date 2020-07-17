import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import '../styles/Main.scss';
import Home from "./Home";
import NoMatch from "./NoMatch";
import Utilities from "./Utilities";
import Randomizer from './Randomizer';

function App() {
  return (
   <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/utilities' component={Utilities} />
        <Route path='/randomizer' component={Randomizer} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;
