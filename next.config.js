module.exports = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.node = {
      fs: 'empty'
    }
  }
}
