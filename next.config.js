/** @type {import('next').NextConfig} */
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
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://Jay2009.github.io/jay_web_with_gql"
      : "",
  images: {
    loader: "akamai",
    path: "/",
  },
  reactStrictMode: false,
  trailingSlash: true,
};

module.exports = nextConfig;
