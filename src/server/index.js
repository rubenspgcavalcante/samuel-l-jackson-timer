const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const { resolve } = require("path");

require("dotenv").config();

const registerNamespace = require("./register-namespace");

const { HOST, PORT, NODE_ENV } = process.env;

if (NODE_ENV === "development") {
  const webpack = require("webpack");
  const middleware = require("webpack-dev-middleware");
  const compiler = webpack(require("../../webpack.config")());

  app.use(middleware(compiler));
}

app.get("*", (req, res) => {
  req.path && registerNamespace(io, req.path);
  res.sendFile(resolve(process.cwd(), "./dist/index.html"));
});

http.listen(PORT, () => {
  console.log(`listening on ${HOST}:${PORT}`);
});
