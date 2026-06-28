/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. TURBOPACK CONFIGURATION (Next.js 16 Native Engine)
  turbopack: {
    rules: {
      '*.svg': {
        // Only run SVGR if the import DOES NOT contain the ?url query string
        condition: {
          not: { query: 'url' }
        },
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },

  // 2. WEBPACK FALLBACK (Kept for safe backward compatibility/Vercel pipelines)
  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );

    if (fileLoaderRule) {
      config.module.rules.push(
        {
          ...fileLoaderRule,
          test: /\.svg$/i,
          resourceQuery: /url/, // *.svg?url
        },
        {
          test: /\.svg$/i,
          issuer: fileLoaderRule.issuer,
          resourceQuery: { not: [...(fileLoaderRule.resourceQuery?.not || []), /url/] },
          use: ["@svgr/webpack"],
        }
      );

      fileLoaderRule.exclude = /\.svg$/i;
    }

    return config;
  },

  // 3. SECURITY & IMAGES CONFIGURATION
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;