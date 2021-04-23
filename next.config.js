const webpack = require("webpack");
const withFonts = require("nextjs-fonts");
const withImages = require("next-images");
const { parsed: localEnv } = require("dotenv").config();
const { withPlugins } = require("next-compose-plugins");

const nextConfig = {
  trailingSlash: true,
  images: {
    domains: ["links.papareact.com", "image.tmdb.org"],
  },
  webpack: (config) => {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
    config.module.rules.push({
      test: /\.(png|jpg|gif)$/,
      use: [
        {
          loader: "file-loader",
          options: {},
        },
      ],
    });
    return config;
  },
};

module.exports = withPlugins(
  [
    withFonts({
      webpack(config, options) {
        return config;
      },
    }),
    withImages,
  ],
  nextConfig
);
