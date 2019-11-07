import React from "react";
import AppRouter from "./AppRouter";
import { CloudinaryContext } from "cloudinary-react";

export default function App() {
  return (
    <CloudinaryContext cloudName="dw8gae3co">
      <AppRouter />
    </CloudinaryContext>
  );
}
