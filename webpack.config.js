const path = require('path');
const glob = require('glob');

const STATIC_START_PATH = 'app/pages/'; // 前端代码开始位置
const STATIC_END_PATH = 'assets/'; // 前端代码最终放置的位置

const getEntry = () => {
  const fileList = glob.sync('**/*.js?(x)', {
    cwd: STATIC_START_PATH
  });
  let entry = {};
  if (fileList) {
    fileList.map((item) => {
      entry[item.replace(/^(.*)\.(js(x?))$/, '$1')] = path.resolve(__dirname, STATIC_START_PATH + item);
    });
  }
  return entry;
}

module.exports = {
  entry: getEntry(),
  output: {
    path: path.resolve(__dirname, STATIC_END_PATH),
    filename: '[name].bundle.js'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js(x?)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['stage-2', 'react']
          }
        }
      }, {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }, {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.woff2$|\.ttf$|\.wav$|\.mp3$/,
        use: 'file-loader?name=images/[name].[hash].[ext]'
      }, {
        test: /\.json$/,
        loader: "json-loader"
      }
    ]
  }
}