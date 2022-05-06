/** @type {import('next').NextConfig} */
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.geojson$/,
      use: ["json-loader"]
    });

    return config;
  },
  reactStrictMode: true,
}
