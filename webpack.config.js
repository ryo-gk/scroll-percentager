const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/scroll-percentager.ts',
  output: {
    filename: 'scroll-percentager.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
    ],
  },
  resolve: {
    extensions: [
      '.ts','.js'
    ],
  },
};