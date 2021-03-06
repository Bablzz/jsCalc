'use strict';

//const NODE_ENV = process.env.NODE_ENV || 'development';

let path = require('path');
let webpack = require('webpack');

module.exports = {
    entry: "./js/app.js",
    output: {
        path: __dirname + '/public',
        filename: "build.js"
    },
    
    watch: true,
    
    //devtool: "source-map",
    
    module: {
    loaders: [
      {
        test: /\.js?$/,
        include: path.resolve(__dirname, './js'),
        exclude: /(node_modules|bower_components)/,

        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.jade/,
        loader: 'jade'
      }
    ]
  },
    
  plugins: [
//    new webpack.optimize.UglifyJsPlugin({
//      compress: {
//        warnings: false
//      }
//    })
  ]

}