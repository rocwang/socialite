module.exports = {
  chainWebpack: webpackConfig => {
    webpackConfig.plugin("preload").tap(args => {
      const [options] = args;
      options.include = "allAssets";
      options.as = entry => {
        if (/\.css$/.test(entry)) return "style";
        if (/\.woff2$/.test(entry)) return "font";
        if (/\.(png|svg)$/.test(entry)) return "image";

        return "script";
      };

      return args;
    });
  },

  productionSourceMap: false
};
