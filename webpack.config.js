const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "rvp",
    projectName: "react-header",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    externals: ['react-router-dom']
    // modify the webpack config however you'd like to by adding to this object
  });
};
