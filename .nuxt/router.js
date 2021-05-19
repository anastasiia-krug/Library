import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ddf76722 = () => interopDefault(import('../pages/all-books.vue' /* webpackChunkName: "pages/all-books" */))
const _3644075a = () => interopDefault(import('../pages/auth/SignIn.vue' /* webpackChunkName: "pages/auth/SignIn" */))
const _4ada5dd0 = () => interopDefault(import('../pages/auth/SignUp.vue' /* webpackChunkName: "pages/auth/SignUp" */))
const _2853e77a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/all-books",
    component: _ddf76722,
    name: "all-books"
  }, {
    path: "/auth/SignIn",
    component: _3644075a,
    name: "auth-SignIn"
  }, {
    path: "/auth/SignUp",
    component: _4ada5dd0,
    name: "auth-SignUp"
  }, {
    path: "/",
    component: _2853e77a,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
