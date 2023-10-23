const webpack = require("webpack");
const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const isDev = process.env.NODE_ENV !== "production";

module.exports = {
  entry: ["./src/index.tsx"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/i,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          cacheDirectory: true,
          // plugins: ["babel-plugin-styled-components"],
        },
      },
      // css 플러그인 설정
      {
        test: /\.css$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { url: false } },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", "..."],
    // fallback: {
    //   zlib: require.resolve("browserify-zlib"),
    //   https: require.resolve("https-browserify"),
    //   http: require.resolve("stream-http"),
    //   assert: require.resolve("assert/"),
    //   buffer: require.resolve("buffer/"),
    //   stream: require.resolve("stream-browserify"),
    //   util: require.resolve("util/"),
    // },
    alias: {
      "@src": path.resolve(__dirname, "src"),
      "@config": path.resolve(__dirname, "config.js"),
    },
  },

  optimization: {
    // 코드 압축
    minimize: !isDev, // minimize 옵션은 필수가 아니지만, 이 설정이 있어야 플러그인이 동작합니다.
    minimizer: [
      new TerserPlugin({
        // TerserPlugin 설정 옵션
        extractComments: true, // 주석 제거 설정
        terserOptions: {
          compress: {
            drop_console: true, // console.log 등의 코드 제거
          },
        },
      }),
    ],
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
    // new webpack.DefinePlugin({
    //   CESIUM_BASE_URL: JSON.stringify("/cesium"), // Cesium 자원 경로에 맞게 설정하세요
    // }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["dist", "build"],
      cleanStaleWebpackAssets: false,
      protectWebpackAssets: false,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "public/assets"),
          to: "assets",
          noErrorOnMissing: true, // 누락된 파일 오류생성 x
        },
      ],
    }),
  ],
};
