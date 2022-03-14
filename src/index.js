import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Header_Footer from "./components/Header_Footer";
import Fruits from "./components/Home/Fruits";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
    <Header_Footer />
    <Fruits />
  </StrictMode>,
  rootElement
);
