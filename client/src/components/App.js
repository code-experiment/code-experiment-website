import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import '../styles/Main.scss';
import Home from "./Home";
import About from './About';
import Nav from './Nav';
import NoMatch from "./NoMatch";
import UpcomingEvents from './UpcomingEvents';
import Utilities from "./Utilities";
import ContactForm from './ContactForm';
import Slack from './Slack';
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
