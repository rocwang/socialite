module.exports = {
  chainWebpack: webpackConfig => {
    webpackConfig.plugin("html").tap(args => {
      const [options] = args;
      options.inject = "head";

      return args;
    });

    webpackConfig.plugin("preload").tap(args => {
      const [options] = args;
      options.include = "allAssets";
      options.as = entry => {
        if (/\.css$/.test(entry)) return "style";
        if (/\.woff2$/.test(entry)) return "font";
        if (/\.(png|svg)$/.test(entry)) return "image";

        return "script";
      };
      options.fileBlacklist.push(/black_paper.*\.png/);

      return args;
    });
  },

  productionSourceMap: false,

  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: ["/"],
      useRenderEvent: false,
      headless: true,
      onlyProduction: true,
      postProcess: route => {
        // Defer scripts and tell Vue it's been server rendered to trigger hydration
        route.html = route.html
          .replace(/<script (.*?)>/g, "<script $1 defer>")
          .replace('id="app"', 'id="app" data-server-rendered="true"');

        return route;
      }
    }
  }
};
