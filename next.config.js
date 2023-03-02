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
  images: {
    loader: "akamai",
    path: "/",
  },
  reactStrictMode: false,
  trailingSlash: true,
};

module.exports = nextConfig;
