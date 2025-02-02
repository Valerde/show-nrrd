'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}



module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
       // TrackballControls.js库使用
      //  {
      //   test: require.resolve("three/examples/js/controls/TrackballControls"),
      //   use: "imports-loader?THREE=three"
      // },
      // {
      //   test: require.resolve("three/examples/js/controls/TrackballControls"),
      //   use: "exports-loader?THREE.TrackballControls"
      // },
      // // stats库的使用
      // {
      //   test: require.resolve("three/examples/js/libs/stats.min.js"),
      //   use: "imports-loader?THREE=three"
      // },
      // {
      //   test: require.resolve("three/examples/js/libs/stats.min.js"),
      //   use: "exports-loader?THREE.Stats"
      // },
      // // GUI库的使用
      // {
      //   test: require.resolve("three/examples/js/libs/dat.gui.min.js"),
      //   use: "imports-loader?THREE=three"
      // },
      // {
      //   test: require.resolve("three/examples/js/libs/dat.gui.min.js"),
      //   use: "exports-loader?THREE.GUI"
      // },
      // // NRRDLoader.js库使用
      // {
      //   test: require.resolve("three/examples/js/loaders/NRRDLoader.js"),
      //   use: "imports-loader?THREE=three"
      // },
      // {
      //   test: require.resolve("three/examples/js/loaders/NRRDLoader.js"),
      //   use: "exports-loader?THREE.NRRDLoader"
      // },
      // // VTKLoader.js库使用
      // {
      //   test: require.resolve("three/examples/js/loaders/VTKLoader.js"),
      //   use: "imports-loader?THREE=three"
      // },
      // {
      //   test: require.resolve("three/examples/js/loaders/VTKLoader.js"),
      //   use: "exports-loader?THREE.VTKLoader"
      // }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
