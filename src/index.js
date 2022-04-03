import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import HeaderFooterApp from "./components/HeaderFooterApp";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
