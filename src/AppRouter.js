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
import UserEvents from "./pages/Events/Events";
import { AppContext } from "./AppProvider";
import Admin from "./pages/Admin/Admin";

export const ProtectedRoute = ({
    component: Component,
    allowedRoles,
    ...rest
}) => (
    <AppContext.Consumer>
        {({ user }) => {
            const isAuthenticated = Object.keys(user).length !== 0;
            const isAllowed = isAuthenticated && allowedRoles
                ? user.roles.every(role => allowedRoles.indexOf(role) >= 0)
                : true;

            return (
                <Route
                    {...rest}
                    render={props =>
                        isAuthenticated && isAllowed ? (
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
        {({ user, updateUser, updateCart }) => {
            const isAuthenticated = Object.keys(user).length !== 0;

            if (isAuthenticated) {
                updateUser({});
                updateCart([]);
                localStorage.removeItem("ntnusertoken");
                localStorage.removeItem("cart");
            }
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
                <ProtectedRoute path="/events" component={UserEvents} />
                <ProtectedRoute path="/admin" allowedRoles={["ADMIN", "EMPLOYEE"]} component={Admin} />
                <Signout
                    exact
                    path="/signout"
                    component={() => <Redirect to="/" />}
                />
            </Switch>
        </Router>
    );
}
