const withSass = require("@zeit/next-sass");
const aliases = require("./config/webpack/aliases");
const FilterWarningsPlugin = require("webpack-filter-warnings-plugin");

module.exports = withSass({
  webpack: (config) => {
    config.resolve.alias = Object.assign(config.resolve.alias, aliases);

    config.plugins.push(
      new FilterWarningsPlugin({
        exclude: /mini-css-extract-plugin[^]*Conflicting order between:/
      })
    );

    config.module.rules.push({
      test: /\.scss$/,
      loader: "sass-resources-loader",
      options: {
        sourceMap: true,
        resources: [
          `${aliases.sass}/_core.scss`
        ]
      }
    });

    return config;
  },
  cssModules: true,
  cssLoaderOptions: {
    namedExports: true,
    importLoaders: 1,
    localIdentName: "[local]",
    outputStyle: 'compressed',
  },
});
