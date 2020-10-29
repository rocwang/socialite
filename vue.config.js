module.exports = {
  chainWebpack: webpackConfig => {
    webpackConfig.plugin("preload").tap(args => {
      const [options] = args;
      options.include = "allAssets";

      return args;
    });
  },

  productionSourceMap: false
};
