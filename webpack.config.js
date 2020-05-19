const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/App.js',
  output: {
    // path: path.resolve(__dirname, 'dist/'),
    // path: __dirname + '/dist',
    path: path.resolve(__dirname, 'dist/'),
    filename: 'bundle.js',
    chunkFilename: '[id].js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  externals: {
    AcceptUI: 'AcceptUI',
  },
  devtool: 'source-map',
  devServer: {
    writeToDisk: true,
    contentBase: 'dist/',
    historyApiFallback: true,
  },
  module: {
    rules: [
      // to load our js/jsx files
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      // to load html
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      // to load css
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [autoprefixer({})],
            },
          },
        ],
      },
      // to load scss/sass
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              // Prefer `dart-sass`
              implementation: require('sass'),
            },
          },
          // Compiles Sass to CSS
          //   'sass-loader',
        ],
      },
      // to load assets like images
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
        // loader: 'url-loader?limit=10000&name=img/[name].[ext]',
      },
      // to load fonts
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/src/index.html',
      filename: 'index.html',
      inject: 'body',
    }),
  ],
};
