const themeConfig = require('./themeConfig/index.js')
const head = require('./themeConfig/htmlHeader.js')

module.exports = {
  title: '前端私塾',
  description: '郭磊的前端博客 (arley’s blog)',
  theme: 'reco',
  themeConfig,
  head,
  locales: {
    '/': {
      lang: 'zh-CN',
      title: "前端私塾",
      description: '郭磊的前端博客 (arley’s blog)'
    }
  },
}