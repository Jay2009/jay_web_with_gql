/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  basePath: "/jay_web_with_gql",
  // async redirects() {
  //   return [
  //     {
  //       source: "/login",
  //       destination: "/",
  //       permanent: true,
  //     },
  //   ];
  // },
  assetPrefix: isProd ? "/jay_web_with_gql" : "",
  images: {
    loader: "akamai",
    path: "/",
  },
  reactStrictMode: true,
  trailingSlash: true,
};

module.exports = nextConfig;
