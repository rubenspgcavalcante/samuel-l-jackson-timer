<<<<<<< HEAD
const express = require("express");
const app = express();

const http = require("http").Server(app);
const io = require("socket.io")(http);
const { resolve } = require("path");
=======
const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const { resolve } = require("path");

>>>>>>> dev
require("dotenv").config();

const registerNamespace = require("./register-namespace");

const { HOST, PORT, NODE_ENV } = process.env;

if (NODE_ENV === "development") {
<<<<<<< HEAD
  const webpackConfig = require("../../webpack.config")();

  const webpack = require("webpack");
  const middleware = require("webpack-dev-middleware");
  const compiler = webpack(webpackConfig);

  app.use(
    middleware(compiler, { publicPath: webpackConfig.output.publicPath })
  );
} else {
  app.use("/static", express.static(resolve(process.cwd(), "./dist")));
}

app.post("/room/[0-9a-zA-Z]+", (req, res) => {
  registerNamespace(io, req.path);
  res.sendStatus(200);
});

app.get("/room/[0-9a-zA-Z]+", (req, res) => {
  res.sendFile(resolve(process.cwd(), "./dist/index.html"));
});

app.get("/", (req, res) => {
=======
  const webpack = require("webpack");
  const middleware = require("webpack-dev-middleware");
  const compiler = webpack(require("../../webpack.config")());

  app.use(middleware(compiler));
}

app.get("*", (req, res) => {
  req.path && registerNamespace(io, req.path);
>>>>>>> dev
  res.sendFile(resolve(process.cwd(), "./dist/index.html"));
});

http.listen(PORT, () => {
  console.log(`listening on ${HOST}:${PORT}`);
});
