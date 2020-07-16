import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import "../styles/Main.scss";
import Home from "./Home";
import Utilities from "./Utilities";
import Timer from './Timer';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/utilities' component={Utilities} />
        <Route exact path='/utilities/timer' component={Timer} />
      </Switch>
    </Router>
  );
}

export default App;
