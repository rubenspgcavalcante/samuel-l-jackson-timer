import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import store from "./cli-store";
import Timer from "./containers/Timer";

const app = document.createElement("div");
app.setAttribute("id", "app");

document.body.appendChild(app);

render(
  <Provider store={store}>
    <Timer />
  </Provider>,
  app
);