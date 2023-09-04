/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: false,
  assetPrefix: './',
  typescript: {
    ignoreBuildErrors: true
  },
  webpack: config => {
    // eslint-disable-next-line no-param-reassign
    config.resolve.fallback = {fs: false}

    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgo: true,
            svgoConfig: {
              prefixClassNames: true
            }
          }
        }
      ],
      issuer: {
        and: [/\.(ts|tsx|js|jsx)$/]
      }
    })

    return {
      ...config
    }
  }
}

module.exports = nextConfig
