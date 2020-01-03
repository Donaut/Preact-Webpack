// Webpack uses this to work with directories
const path = require('path');


// A plugin to help move static files.
const CopyPlugin = require('copy-webpack-plugin');

// A plogin to help remove unused files from the build directory.
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// This is main configuration object.
// Here you write different options and tell Webpack what to do
module.exports = {

  // Path to your entry point. From this file Webpack will begin his work
  entry: './src/index.js',

  // Path and filename of your result bundle.
  // Webpack will bundle all JavaScript into this file
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              ['transform-react-jsx', { pragma: 'h' }],
              ["@babel/plugin-proposal-class-properties"]
            ]
          }
        }
      }
    ]
},

  // Enable Source Maps
  devtool: 'source-map',

  devServer: {

    // Serve up any static files from src/
    contentBase: path.join(__dirname, 'src'),

    // Enable gzip compression:
    compress: true,

    // Enable pushState() routing, as used by preact-router et al:
    historyApiFallback: true,

    stats: 'normal'
  },
  // When all the above code is executed. We are inside the build folder. (In this example inside the dist folder)
  // This is why we don't set which folder we want to clear or where we want to copy the files.
  // These plugins using the current directory.
  plugins: [

    // Clear The build directory.
    new CleanWebpackPlugin(),


    new CopyPlugin([
      { from: './src/public', to: './public' },
      { from: './src/index.html', to: './' },
    ]),

  ],

};