module.exports = {
  base: '/pixi-controller/',
  title: 'Pixi.js Controller',
  description: 'Set of controls for Pixi.js to facilitate general handling of external events.',
  lang: 'en-US',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'API', link: '/content/controller' },
      { text: 'Examples', link: '/examples/simple-context' }
    ],
    sidebar: {
      '/content': [
        { text: 'Controller', link: '/content/controller' },
        { text: 'Keyboard', link: '/content/keyboard' },
        { text: 'Mouse', link: '/content/mouse' },
        { text: 'Utils', link: '/content/utils' }
      ],
      '/examples': [
        { text: 'Simple Context', link: '/examples/simple-context' }
      ]
    }
  }
}