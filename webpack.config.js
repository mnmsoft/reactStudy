const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "[name]_bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
        // css 번들링을 위해 MiniCssExtractPlugin과 css-loader 사용
      },
    ],
  },
  plugins: [
    // html 파일을 번들링 하기 위한 plugin
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    // css 파일을 번들링 하기 위한 plugin
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    // reactProvide
    new webpack.ProvidePlugin({
      "React": "react",
   }),    
  ],
};
