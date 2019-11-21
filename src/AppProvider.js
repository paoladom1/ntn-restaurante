import React from "react";
import jwtDecode from "jwt-decode";

export const AppContext = React.createContext();

class AppProvider extends React.Component {
    constructor(props) {
        super(props);
        let cart = JSON.parse(localStorage.getItem("cart"));
        cart = cart ? cart : [];

        this.state = {
            user: {},
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
            localStorage.setItem("cart", JSON.stringify(this.state.cart));
        });
    }

    componentDidMount() {
        const token = localStorage.getItem("ntnusertoken");

        if (token) {
            const decoded = jwtDecode(token);

            fetch(`${process.env.REACT_APP_BACKEND_URL}/users/${decoded._id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
                .then(res => res.json())
                .then(res => {
                    const { user } = res.data;
                    this.setState({ user: {...user, token: token} });
                })
                .catch(error => console.log(error));
        }

        window.addEventListener("beforeunload", () => {
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
