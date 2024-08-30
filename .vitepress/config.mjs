import {defineConfig} from 'vitepress'

export default defineConfig({
    title: 'Gildsmith • Dev Docs',
    description: 'Dev Docs',
    base: '/devdocs/',
    themeConfig: {
        search: {
            provider: 'local',
        },

        outline: {
            level: 'deep',
        },

        nav: [
            {text: 'Quick Start', link: '/installation'},
            {text: 'User Guide', link: 'https://gildsmith.github.io/userguide/'},
        ],

        sidebar: [
            {
                text: 'Getting Started',
                items: [
                    {text: 'Installation', link: '/installation'},
                    {text: 'Changelog', link: '/changelog'},
                    {text: '❌ Deployment', link: '#'},
                ],
            },
            {
                text: 'Frontend Development',
                items: [
                    {text: 'Introduction', link: '/frontend'},
                    {text: '❌ Directory Structure', link: '#'},
                    {text: '❌ Package Development', link: '#'},
                    {text: '❌ Extending Packages', link: '#'},
                    {text: '❌ Standalone Frontend', link: '#'},
                ],
            },
            {
                text: 'Backend Development',
                items: [
                    {text: '❌ Introduction (incl. core-api)', link: '#'},
                    {text: '❌ Directory Structure', link: '#'},
                    {text: '❌ Package Development', link: '#'},
                    {text: '❌ Extending Packages', link: '#'},
                    {text: '❌ Profile API', link: '#'},
                ],
            },
            {
                text: 'Frontend Packages',
                items: [
                    {text: '❌ Cart', link: '#'},
                    {text: '❌ Dashboard', link: '#'},
                    {text: '❌ Product', link: '#'},
                    {text: '❌ Profile', link: '#'},
                    {text: '❌ Storefront', link: '#'},
                ],
            },
            {
                text: 'Backend Packages',
                items: [
                    {text: '❌ Core (red)', link: '#'},
                    {text: '❌ Profile', link: '#'},
                ],
            },
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/gildsmith/gildsmith'},
        ],
    },
})
