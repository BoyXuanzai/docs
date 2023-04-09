const moment = require('moment')
module.exports = {
  base: '/docs/',
  title: '阿炫coding',
  description: '前端路线、知识资源汇总、前端小白的宝藏',
  head: [
    ['link', { rel: 'icon', href: '/assets/img/favicon.ico' }],
    ['meta', { name: 'keywords', content: '前端、vuepress、html、css、js、vue、计网、可视化、前端路线、前端小白' }],
    ['meta', { name: 'author', content: '阿炫不是啊炫' }]
  ],
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: timestamp => {
          moment.locale('en')
          return moment(timestamp).format('LLLL')
        }
      }
    ]
  ],
  themeConfig: {
    // 最后修改时间
    lastUpdated: '最新更新时间',
    // 导航栏logo
    logo: '/assets/img/hero.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'HTML', link: '/about' },
      { text: 'CSS', link: '/css/c-aaa' },
      { text: 'JavaScript', link: '/javascript/js-aaa' },
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' }
        ]
      }
    ],
    // 侧边栏数组形式
    // sidebar: [
    //   '',
    //   'about',
    //   'about1',
    //   {
    //     title: 'CSS', // 必要的
    //     path: '/css/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
    //     collapsable: true, // 可选的, 默认值是 true,
    //     sidebarDepth: 1, // 可选的, 默认值是 1
    //     children: ['/css/c-aaa', '/css/c-bbb', '/css/c-ccc']
    //   }
    // ]
    // 对象形式
    sidebar: {
      '/css/': ['c-aaa', 'c-bbb', 'c-ccc'],
      '/javascript/': ['js-aaa', 'js-bbb', 'js-ccc'],
      '/': ['' /* / */, 'about' /* /about.html */]
    }
  }
}
