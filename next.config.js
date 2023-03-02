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
      ? "https://boramyy.github.io/invitation"
      : "",
  images: {
    loader: "akamai",
    path: "/",
  },
  reactStrictMode: false,
};

module.exports = nextConfig;
