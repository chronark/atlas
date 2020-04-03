/* eslint @typescript-eslint/no-var-requires: "off" */

const HtmlPlugin = require("html-webpack-plugin")
const path = require("path")
const webpack = require("webpack")

module.exports = {
  node: { fs: "empty" },

  entry: ["@babel/polyfill", "./src/lib/index.ts"],
  output: {
    filename: "atlas.js",
    chunkFilename: "[name].atlas.js",
    library: "atlas",
    path: path.resolve(__dirname, "dist"),
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  devtool: "source-map",
  devServer: {
    compress: true,
    overlay: true,
    port: 3000,
    open: false,
    stats: "normal",
  },
  resolve: {
    extensions: [".ts", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
            exclude: /node_modules/,
          },
        },
      },
      {
        test: /\.ts$/,
        use: ["babel-loader", "ts-loader"],
      },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
    ],
  },
  plugins: [
    new HtmlPlugin({
      template: "./src/lib/index.html",
    }),
    new webpack.EnvironmentPlugin({
      CHARON_URL: "http://jbs-osm-test.informatik.fh-nuernberg.de",
    }),
  ],
}
