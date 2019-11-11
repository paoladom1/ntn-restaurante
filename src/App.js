import React from "react";
import AppRouter from "./AppRouter";
import { CloudinaryContext } from "cloudinary-react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faShoppingCart, faUtensils } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faShoppingCart, faUtensils);

export default function App() {
    return (
        <CloudinaryContext cloudName="dw8gae3co">
            <AppRouter />
        </CloudinaryContext>
    );
}
