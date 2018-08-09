let WebpackNotifierPlugin = require('webpack-notifier');
let path = require('path');

module.exports = {
  entry: {
    // 設定編輯出的js file
    main: './js/main.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: '[name].js'
  },
  // devtool: 'source-map',
  /**
   * loaders 對應使用規則
   */
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                /* Loose mode and No native modules(Tree Shaking) */
                [
                  'env',
                  {
                    modules: false,
                    loose: false
                  }
                ]
              ]
            }
          }
        ]
      }
    ]
  }
};
