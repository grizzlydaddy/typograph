const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/typograph.js',
  output: {
    path: path.resolve(__dirname, 'lib/'),
    library: 'Typograph',
    filename: 'typograph.js',
    libraryTarget: 'umd',
    libraryExport: 'default',
    sourceMapFilename: '../maps/typograph.js.map'
  },
  devtool: "source-map",
  externals: [
    {
      lodash: {
        root: '_',
        commonjs: 'lodash',
        commonjs2: 'lodash',
        amd: 'lodash'
      }
    }
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new UglifyJSPlugin()
  ]
};
