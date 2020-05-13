import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path = "/" components = {Home} />
            <Route exact path = "/" components = {Saved} />
            <Route component = {NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
