const webpack = require('webpack');
const path = require('path');
const endPath = path.resolve(__dirname, 'public');

module.exports = {
  entry:
  { 
    app: './src/app.js'
  },

  mode: 'development', // faltó especificar en que modo
  output: {
    path: endPath,//path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: '/node_modules/',
        use: 'babel-loader' // traspilador babel
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
        // loader: 'style-loader!css-loader' 
      },
      {
        test: /\.(jpg|png|gif|svg|pdf|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]'
            },
          },
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()],
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    contentBase: endPath,
    inline: true,
    compress: true,
    port: 3000, // localhost
    publicPath: '/'
  }
};