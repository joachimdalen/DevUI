const path = require('path');
module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.scss$/,
    loaders: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../')
  });
  config.resolve.extensions.push('.ts', '.tsx', '.css', '.scss');
  return config;
};
