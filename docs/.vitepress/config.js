module.exports = {
  base: '/pixi.js-controller',
  title: 'Pixi.js Controller',
  description: 'Set of controls for Pixi.js to facilitate general handling of external events.',
  lang: 'en-US',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'API', link: '/content/keyboard' },
      { text: 'Examples', link: '/examples' }
    ],
    sidebar: {
      '/content': [
        { text: 'Keyboard', link: '/content/keyboard' },
        { text: 'Mouse', link: '/content/mouse' }
      ],
      '/examples': [
        { text: 'Rotation', link: '/examples/rotation' }
      ]
    }
  }
}