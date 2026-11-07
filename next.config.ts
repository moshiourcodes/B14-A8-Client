// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   cacheComponents: false,
//   partialPrefetching: false,
//   reactCompiler: true,
//   turbopack: {
//     rules: {
//       "*.css": {
//         loaders: ["@tailwindcss/turbopack"],
//         as: "*.css",
//       },
//     },
//   },
// };

// export default nextConfig;






import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Existing config options */
  cacheComponents: false,
  partialPrefetching: false,
  reactCompiler: true,

  // External image configuration
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "covers.openlibrary.org",
        pathname: "/**",
      },
    ],
  },

  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
