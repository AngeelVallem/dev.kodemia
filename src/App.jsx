import React from "react";

import Home from "./screens/Home/index";
import Login from "./screens/Login";
import Excercise from "./screens/Excercises/ExcerciseList"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./css/index.css";

class App extends React.Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/Exercise"  component={Excercise}/>
          </Switch>
        </Router>
    );
  }
}

export default App;
