import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import store from "./cli-store";
import MainTemplate from "./components/MainTemplate";
import TimerForm from "./containers/TimerForm";

import "./scss/index.scss";

const app = document.createElement("div");
app.setAttribute("id", "app");

document.body.appendChild(app);
render(
  <Provider store={store}>
    <MainTemplate>
      <TimerForm />
    </MainTemplate>
  </Provider>,
  app
);