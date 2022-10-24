const { i18n } = require('./next-i18next.config')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const config = {
  future: {
    webpack5: true,
  },
  env: {
    NEXT_PUBLIC_SPACE_ID: process.env.TU_SPACE_ID,
    NEXT_PUBLIC_ACCESS_TOKEN: process.env.TU_ACCESS_TOKEN,
  },
  // i18n: {
  //   locales: ['en-US', 'es'],
  //   defaultLocale: 'en-US',
  // },
  i18n,
}

module.exports = withBundleAnalyzer(config)
