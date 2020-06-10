const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')
const devMode = process.env.NODE_ENV !== 'production'
let devServer // for wacky html reloading...

module.exports = {
  mode: 'development',
  entry: {
    app: './src/js/index.tsx'
  },
  devtool: 'cheap-module-eval-source-map',
  // webpack-dev-server
  devServer: {
    contentBase: './public',
    hot: true,
    before(app, server) {
      devServer = server // for wacky html reloading...
    }
  },
  // @TODO check what this does...
  // https://github.com/webpack-contrib/mini-css-extract-plugin#extracting-all-css-in-a-single-file
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       styles: {
  //         name: 'styles',
  //         test: /\.css$/,
  //         chunks: 'all',
  //         enforce: true
  //       }
  //     }
  //   }
  // },
  plugins: [
    new CleanWebpackPlugin(['public']),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].bundle.css'
    }),
    // @TODO probably will remove this in the end and manually
    // manage the bundles...
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: 'src/index.html'
    }),
    new CopyWebpackPlugin([
      {
        from: 'src/img',
        to: 'assets/img'
      }
    ]),
    reloadHtml, // @TODO needs to not be here later
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: 'assets/[name].bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.m?(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            // use style-loader on dev for HMR
            loader: devMode ? 'style-loader' : MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: { importLoaders: 1 }
          },
          'postcss-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.wasm', '.mjs', '.js', '.json']
  }
}

function reloadHtml() {
  const cache = {}
  const plugin = { name: 'CustomHtmlReloadPlugin' }
  this.hooks.compilation.tap(plugin, compilation => {
    compilation.hooks.htmlWebpackPluginAfterEmit.tap(plugin, data => {
      const orig = cache[data.outputName]
      const html = data.html.source()
      // plugin seems to emit on any unrelated change?
      if (orig && orig !== html) {
        devServer.sockWrite(devServer.sockets, 'content-changed')
      }
      cache[data.outputName] = html
    })
  })
}
