const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = (env, argv) => {
  const isDevelopment = argv.mode === "development";

  return {
    entry: {
      main: "./src/index.js",
    },
    output: {
      path: path.join(__dirname, "/dist"),
      filename: "[name].[hash].js",
    },
    mode: argv.mode,
    devtool: isDevelopment ? "#eval-source-map" : "source-map",
    devServer: {
      stats: {
        children: false,
        maxModules: 0,
      },
      port: 3000,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./index.html",
      }),
    ],
    resolve: {
      extensions: [".js", ".jsx"],
    },
  };
};
