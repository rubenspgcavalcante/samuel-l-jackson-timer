import React from "react";
<<<<<<< HEAD
import { render } from "react-dom";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import store from "./cli-store";
import MainTemplate from "./components/MainTemplate";

import TimerForm from "./containers/TimerForm";
import GetRoom from "./components/GetRoom";
=======
import {render} from "react-dom";
import {Provider} from "react-redux";
import store from "./cli-store";
import MainTemplate from "./components/MainTemplate";
import TimerForm from "./containers/TimerForm";
>>>>>>> dev

import "./scss/index.scss";

const app = document.createElement("div");
app.setAttribute("id", "app");

document.body.appendChild(app);
render(
  <Provider store={store}>
    <MainTemplate>
<<<<<<< HEAD
      <Router>
        <Switch>
          <Route exact path="/" component={GetRoom} />
          <Route path="/room/:roomId" component={TimerForm} />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </Router>
    </MainTemplate>
  </Provider>,
  app
);
=======
      <TimerForm />
    </MainTemplate>
  </Provider>,
  app
);
>>>>>>> dev
