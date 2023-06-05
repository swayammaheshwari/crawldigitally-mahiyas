import React from "react";
import ReactDOM from "react-dom";
import { App, Test } from "./App";

let Testing = 0;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>{Testing ? <App /> : <Test />}</React.StrictMode>
);
