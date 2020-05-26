const path = require('path')

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    config.resolve.alias['~'] = path.resolve(__dirname)

    return config
  },
}
