const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      "@configs": path.resolve(__dirname, "configs"),
      "@src": path.resolve(__dirname, "src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: "ts-loader",
          options: {
            transpileOnly: true, // переместите 'options' внутрь 'use'
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Управление выходными данными",
      template: "./src/index.html",
    }),
    new ForkTsCheckerWebpackPlugin(),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },

    port: 5000,
    historyApiFallback: true,
  },
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
};
