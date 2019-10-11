const webpack = require("webpack");
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
config = {
  entry: {
    main: [path.resolve(__dirname, "index.tsx")]
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./build/"),
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  resolve: {
    // Add '.ts' and '.tsx' as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"],
    alias: {}
  },
  module: {
    rules: [
      { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },
      { test: /\.tsx?$/, loader: "babel-loader" },
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  },
  plugins: [
    new CopyPlugin([
      {
        from: "src/styles",
        to: "src/styles"
      },
      {
        from: "src/components/**/*.scss"
      }
    ])
  ]
};

module.exports = config;
