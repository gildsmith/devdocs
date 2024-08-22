import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Gildsmith • Dev Docs",
  description: "Dev Docs",
  base: "/devdocs/",
  themeConfig: {
    search: {
      provider: 'local'
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'User Guide', link: 'https://gildsmith.github.io/userguide/' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Quick Start', link: '/quick-start' }
        ]
      },
      {
        text: 'Frontend Development',
        items: [
          { text: 'To Do', link: '/introduction' },
        ]
      },
      {
        text: 'Backend Development',
        items: [
          { text: 'To Do', link: '/introduction' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/gildsmith/gildsmith' }
    ]
  }
})
