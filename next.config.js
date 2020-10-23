const path = require('path');
const aliases = require("./config/webpack/aliases");

module.exports = {
  webpack: (config) => {
    config.resolve.alias = Object.assign(config.resolve.alias, aliases);
    return config;
  },
  sassLoaderOptions: {
    outputStyle: 'compressed',
  },
  sassOptions: {
    includePaths: [
      path.join(__dirname, 'styles')
    ],
  }
}
