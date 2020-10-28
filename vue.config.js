module.exports = {
  chainWebpack: webpackConfig => {
    webpackConfig.plugin("html").tap(args => {
      const [options] = args;

      Object.assign(options, {
        inject: "head",
        scriptLoading: "defer"
      });

      return args;
    });
  },
  productionSourceMap: false
};
