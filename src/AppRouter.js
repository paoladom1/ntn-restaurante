import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Menu from './pages/Menu/Menu';

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/menu">
          <Menu />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

