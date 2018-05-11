const { join, resolve } = require('path');
const { CheckerPlugin, TsConfigPathsPlugin } = require('awesome-typescript-loader');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const DtsGeneratorPlugin = require('dts-generator-webpack-plugin').default;
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

const tsconfig = require('./tsconfig');

const path = {
  config: __dirname,
  source: join(__dirname, '/src'),
  target: join(__dirname, '/dist'),
  test: join(__dirname, '/tests'),
};

module.exports = {
  entry: {
    main: resolve(path.source, 'index.ts')
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      rules: [{
        use: [{
          loader: 'tslint-loader',
          options: {
            configFile: resolve(path.config, 'tslint.json'),
            typeCheck: false,
          }
        }]
      }, {
        use: [{
          loader: 'awesome-typescript-loader',
          options: {
            configFileName: resolve(path.config, 'tsconfig.json'),
            inlineSourceMap: false,
            sourceMap: true,
          }
        }]
      }]
    }]
  },
  node: {
    __dirname: false,
    __filename: false,
  },
  output: {
    devtoolModuleFilenameTemplate: '[absolute-resource-path]',
    filename: '[name]-bundle.js',
    hashDigest: 'base64',
    hashFunction: 'sha256',
    path: path.target,
  },
  plugins: [
    new CheckerPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      generateStatsFile: true,
      openAnalyzer: false,
      reportFilename: 'bundles.html',
    }),
    new DtsGeneratorPlugin({ 
      name: 'index',
      project: path.config,
      out: path.target
    })
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    plugins: [
      new TsConfigPathsPlugin({ tsconfig, compiler: 'typescript' }),
    ]
  },
  target: 'node'
}