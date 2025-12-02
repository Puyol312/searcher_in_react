const path = require('path');
const liveServer = require("live-server");

const dev = process.env.NODE_ENV == "development";
if(dev){
  liveServer.start({
    root: "./",
    file: "index.html"
  });
}

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};