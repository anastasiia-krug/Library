export default {
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: false,

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'library',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: ''}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,
    modules: [
        '@nuxtjs/auth',
        '@nuxtjs/axios',
        '@nuxtjs/proxy',
        '@nuxtjs/dotenv',
    ],
    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: ['@nuxtjs/svg-sprite'],
    svgSprite: {},

    auth: {
        strategies: {
            local: {
                endpoints: {
                    login: {
                        url: '/login',
                        method: 'post'
                    },
                    logout: {
                        url: '/logout',
                        method: 'post'
                    },
                    register: {
                        url: '/register',
                        method: 'post'
                    },
                    user: {
                        url: '/api/user',
                        method: 'get',
                        propertyName: false
                    }
                },
                tokenRequired: false,
                tokenType: false
            }
        }
    },

    proxy: {
        '/images': {
            target: process.env.API_URL + '/storage'
        },
    },
    axios: {
        defaults: {
            baseURL: process.env.API_URL
        },
        withCredentials: true,
        credentials: true
    },
}
// Modules: https://go.nuxt
