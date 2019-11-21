import React from "react";

export const AppContext = React.createContext();

class AppProvider extends React.Component {
    constructor(props) {
        super(props);
        let user = JSON.parse(localStorage.getItem("ntnusertoken"));
        let cart = JSON.parse(localStorage.getItem("cart"));
        user = user ? user : {};
        cart = cart ? cart : [];

        this.state = {
            user: user,
            cart: cart,
            updateCart: newCart => {
                this.setState({ cart: newCart });
            },
            updateUser: newUser => {
                this.setState({ user: newUser });
            }
        };
    }

    componentWillUnmount() {
        window.removeEventListener("beforeunload", () => {
            localStorage.setItem(
                "ntnusertoken",
                JSON.stringify(this.state.user)
            );
            localStorage.setItem("cart", JSON.stringify(this.state.cart));
        });
    }

    componentDidMount() {
        window.addEventListener("beforeunload", () => {
            localStorage.setItem(
                "ntnusertoken",
                JSON.stringify(this.state.user)
            );
            localStorage.setItem("cart", JSON.stringify(this.state.cart));
        });
    }

    render() {
        return (
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        );
    }
}

export default AppProvider;
