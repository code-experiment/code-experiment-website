import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "../styles/Main.scss";
import Utilities from "./Utilities";
import Home from "./Home";
import NoMatch from "./NoMatch";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/utilities' component={Utilities} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;
