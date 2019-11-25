import React from "react";
import AppRouter from "./AppRouter";
import { CloudinaryContext } from "cloudinary-react";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
    fab,
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";
import {
    faShoppingCart,
    faUtensils,
    faChevronDown,
    faMinusCircle,
    faArrowLeft
} from "@fortawesome/free-solid-svg-icons";
import AppProvider from "./AppProvider";

library.add(
    fab,
    faFacebook,
    faTwitter,
    faInstagram,
    faShoppingCart,
    faUtensils,
    faChevronDown,
    faMinusCircle,
    faArrowLeft
);

export default function App() {
    return (
        <CloudinaryContext cloudName="dw8gae3co">
            <AppProvider>
                <AppRouter />
            </AppProvider>
        </CloudinaryContext>
    );
}
