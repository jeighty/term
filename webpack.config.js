const path = require('path');

module.exports = {
  entry: './src/term.ts',
  output: {
    filename: 'term.js'
  },
  target: 'electron-main',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.md$/,
        oneOf: [
          {
            resourceQuery: /url/, // file.md?url
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].html',
                  useRelativePath: true
                }
              },
              'extract-loader',
              'html-loader',
              'showdown-loader'
            ]
          },
          {
            resourceQuery: /content/, // file.md?content
            use: [
              'html-loader',
              'showdown-loader'
            ]
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.wasm', '.ts', '.md', '.json'],
    modules: [
      path.resolve('./src'),
      'node_modules'
    ],
    alias: {
      page: path.resolve('./src/page')
    }
  }
};
