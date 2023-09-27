const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const config = require("./config");
const path = require("path");

module.exports = merge(common, {
  mode: "development",
  devtool: "eval-source-map",
  // devtool: "eval-cheap-module-source-map
  devServer: {
    port: config.PORT,
    hot: true,
    open: true,
    historyApiFallback: {
      index: "/index.html",
    },
    client: {
      logging: "info",
      overlay: {
        errors: true,
        warnings: false,
        runtimeErrors: true,
      },
      reconnect: 3,
    },
  },
});
