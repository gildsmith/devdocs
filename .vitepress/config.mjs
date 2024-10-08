import {defineConfig} from 'vitepress'

export default defineConfig({
    title: 'Gildsmith • Dev Docs',
    description: 'Dev Docs',
    base: '/devdocs/',
    srcDir: './src',
    head: [
        ['link', {rel: 'icon', href: '/devdocs/favicon.ico'}],
    ],
    themeConfig: {
        logo: '/logo.svg',

        editLink: {
            pattern: 'https://github.com/gildsmith/devdocs/edit/master/:path',
            text: 'Edit this page on GitHub',
        },

        search: {
            provider: 'local',
        },

        outline: {
            level: 'deep',
        },

        nav: [
            {text: 'User Guide', link: 'https://gildsmith.github.io/userguide/'},
        ],

        sidebar: [
            {
                text: 'Getting Started',
                items: [
                    {text: 'Installation', link: '/'},
                    {text: 'Gildsmith Architecture', link: '/architecture'},
                    {text: '❌ Deployment', link: '#'},
                ],
            },
            {
                text: 'Architecture',
                items: [
                    {text: '❌ Introduction', link: '#'},
                    {text: '❌ Headless Backend', link: '#'},
                    {text: '❌ Standalone Frontend', link: '#'},
                ]
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
                text: 'Frontend Development',
                items: [
                    {text: '⚠️ Introduction', link: '/frontend'},
                    {text: '❌ Directory Structure', link: '#'},
                    {text: '❌ Package Development', link: '#'},
                    {text: '❌ Extending Packages', link: '#'},
                    {text: '⚠️ Standalone Frontend', link: '/frontend/standalone-frontend'},
                ],
            },
            {
                text: 'Dashboard Web App',
                items: [
                    {text: '❌ Introduction', link: '#'},
                    {text: '⚠️ UI Components', link: '#'}
                ]
            }
            // {
            //     text: 'Frontend Packages',
            //     items: [
            //         {text: '❌ Cart', link: '#'},
            //         {text: '❌ Dashboard', link: '#'},
            //         {text: '❌ Product', link: '#'},
            //         {text: '❌ Profile', link: '#'},
            //         {text: '❌ Storefront', link: '#'},
            //     ],
            // },
            // {
            //     text: 'Backend Packages',
            //     items: [
            //         {text: '❌ Core (red)', link: '#'},
            //         {text: '❌ Cart', link: '#'},
            //         {text: '❌ Product', link: '#'},
            //         {text: '❌ Profile', link: '#'},
            //     ],
            // },
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/gildsmith/gildsmith'},
        ],
    },
})
