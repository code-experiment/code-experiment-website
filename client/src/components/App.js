import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "../styles/main.css";
import Utilities from "./Utilities";
import Home from "./Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/utilities' component={Utilities} />
      </Switch>
    </Router>
  );
}

export default App;
