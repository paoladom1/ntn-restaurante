import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Menu from "./pages/Menu/Menu";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

export default function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route path="/about" component={About} />
                <Route path="/menu" component={Menu} />
                <Route exact path="/" component={Home} />
                <Route path="/signup" component={Register} />
                <Route exact path="/signin" component={Login} />
            </Switch>
        </Router>
    );
}
