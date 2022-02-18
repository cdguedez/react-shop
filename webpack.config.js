const path = require('path') ,
      HtmlWebpackPplugin = require('html-webpack-plugin'),
      MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
      },
      {
        test: /\.html$/,
        use: { loader: 'html-loader' },
      },
      {
        test: /\.(css|scss)$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ],
      },
      {
        test: /\.svg/,
        use: { loader: 'svg-url-loader' },
      },
      // {
      //   test: /\.svg$/,
      //   use: [
      //     { loader: 'babel-loader' },
      //     {
      //       loader: 'react-svg-loader',
      //       options: {
      //         svgo: {
      //           plugins: [{ removeTitle: false }],
      //           floatPrecision: 2,
      //         },
      //         jsx: true,
      //       }
      //     }
      //   ]
      // },
    ],
  },
  plugins: [
    new HtmlWebpackPplugin({
      template: './public/index.html',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    })
  ],
  devServer: {
    historyApiFallback: true,
    static: { directory: path.join(__dirname, 'dist') },
    port: process.env.PORT || 3000,
    compress: true,
    open: true,
  }
}