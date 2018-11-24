const { HotModuleReplacementPlugin } = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const mode = process.env.NODE_ENV;

const [isDev, isProd] = ["development", "production"].map(env => mode === env);

module.exports = (env = {}) => ({
  mode,
  devtool: "source-map",
  entry: { app: "./src/client/index.jsx" },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  plugins: [
    new HtmlWebpackPlugin(),
    isDev ? new HotModuleReplacementPlugin() : null
  ].filter(p => p)
});
