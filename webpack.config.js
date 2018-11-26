const { HotModuleReplacementPlugin } = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const mode = process.env.NODE_ENV;

const [isDev, isProd] = ["development", "production"].map(env => mode === env);

module.exports = (env = {}) => ({
  mode,
  devtool: "source-map",
  entry: { app: "./src/client/index.jsx" },
<<<<<<< HEAD
  output: {
    publicPath: "/static"
  },
=======
>>>>>>> dev
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          isDev ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: "url-loader?limit=10000"
      },
      {
<<<<<<< HEAD
        test: /\.(ttf|eot)(\?[\s\S]+)?$/,
=======
        test: /\.(ttf|eot|mp3)(\?[\s\S]+)?$/,
>>>>>>> dev
        use: "file-loader"
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              disable: true
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  plugins: [
    new HtmlWebpackPlugin(),
<<<<<<< HEAD
    isProd
      ? new MiniCssExtractPlugin({
          filename: "[name].css",
          chunkFilename: "[id].css"
        })
      : null,
=======
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
>>>>>>> dev
    isDev ? new HotModuleReplacementPlugin() : null
  ].filter(p => p)
});
