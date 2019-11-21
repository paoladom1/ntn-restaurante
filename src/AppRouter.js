import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Menu from "./pages/Menu/Menu";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import UserOrders from "./pages/Orders/Orders";
import { AppContext } from "./AppProvider";

export const ProtectedRoute = ({ component: Component, ...rest }) => (
    <AppContext.Consumer>
        {({ user }) => {
            const isAuthenticated = Object.keys(user).length !== 0;

            return (
                <Route
                    {...rest}
                    render={props =>
                        isAuthenticated ? (
                            <Component {...props} />
                        ) : (
                            <Redirect to="/signin" />
                        )
                    }
                />
            );
        }}
    </AppContext.Consumer>
);

export const Signout = ({ component: Component, ...rest }) => (
    <AppContext.Consumer>
        {({ user, updateUser }) => {
            const isAuthenticated = Object.keys(user).length !== 0;

            if (isAuthenticated) updateUser({});
            localStorage.removeItem("ntnusertoken");

            return (
                <Route {...rest} render={props => <Component {...props} />} />
            );
        }}
    </AppContext.Consumer>
);

export default function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route path="/about" component={About} />
                <Route path="/menu" component={Menu} />
                <Route exact path="/" component={Home} />
                <Route path="/signup" component={Register} />
                <Route exact path="/signin" component={Login} />
                <ProtectedRoute path="/orders" component={UserOrders} />
                <Signout exact path="/signout" component={() => <Redirect to="/" />} />
            </Switch>
        </Router>
    );
}
