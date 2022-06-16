const { nexusTheme } = require('./theme')
const { pwaPlugin } = require('@vuepress/plugin-pwa')
const { pwaPopupPlugin } = require('@vuepress/plugin-pwa-popup')
const { mediumZoomPlugin } = require('@vuepress/plugin-medium-zoom')
const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')
const path = require('path');

module.exports = {
  base: '/',
  title: '时空枢纽',
  description: '时空枢纽, NexusCoop',
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['link', { rel: 'icon', href: '/images/Nexus_Coop_Logo_x128.png' }]
  ],
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '时空枢纽',
      description: '时空枢纽, NexusCoop',
    },
    '/en/': {
      lang: 'en-US',
      title: 'NexusCoop',
      description: 'NexusCoop',
    }
  },
  theme: nexusTheme({
    logo: '/images/Nexus_Coop_Logo_Nav.png',
    logoDark: null,
    darkMode: false,
    docsRepo: 'https://github.com/MengLuoRJ/nexus-coop-webpage',
    editLink: false,
    locales: {
      '/': {
        selectLanguageName: '简体中文',
        selectLanguageText: '语言',
        lastUpdatedText: '最后更新',
        contributorsText: '上传者',
        notFound: ['该页面不存在。'],
        backToHome: '返回首页',
      },
      '/en/': {
        selectLanguageName: 'English',
        selectLanguageText: 'Language',
        lastUpdatedText: 'Last Updated',
        contributorsText: 'Updators',
        notFound: ['English pages are still under construction.'],
        backToHome: 'Back to Home',
      }
    },
    sidebar: 'auto',
    themePlugins: {
      mediumZoom: false,
    }
  }),
  plugins: [
    pwaPlugin(),
    pwaPopupPlugin(),
    mediumZoomPlugin({
      selector: ':not(a, .no-image-preview) > img',
    }),
    registerComponentsPlugin({
      components: {
        NaiveImage: path.resolve(__dirname, './components/NaiveImage.vue'),
      },
    }),
  ],
}