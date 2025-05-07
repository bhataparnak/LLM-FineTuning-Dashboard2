// webpack.config.js
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\\\\.css$/,
        use: [
          'style-loader',     // Or MiniCssExtractPlugin.loader
          'css-loader',
          'postcss-loader',   // Add this loader
        ],
      },
      // Other rules...
    ],
  },
  // ...
};