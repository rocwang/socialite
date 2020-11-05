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
        // As there is no dynamic logic once pre-rendered at the moment,
        // we can remove all script tags the preload tags for script.
        //
        // If scripts are required, then we can defer scripts and tell Vue it's
        // been server rendered to trigger hydration as below:
        //
        // route.html = route.html
        //   .replace(/<script (.*?)>/g, "<script $1 defer>")
        //   .replace(/<body (.*?)>/, '<body $1 data-server-rendered="true">');
        route.html = route.html.replace(/<script [^<]*?><\/script>/g, "");

        route.html = route.html.replace(/<link [^<]*? as="script">/g, "");

        return route;
      }
    }
  }
};
