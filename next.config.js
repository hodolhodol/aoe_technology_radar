const config = require("./data/config.json");
const basePath =
  config.basePath && config.basePath !== "/" ? config.basePath : "";

/** @type {import("next").NextConfig} */
const nextConfig = {
  basePath,
  assetPrefix: ".",
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
};

module.exports = nextConfig;
