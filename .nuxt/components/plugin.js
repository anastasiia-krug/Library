import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  HomeBooks: () => import('../../components/home/Books.vue' /* webpackChunkName: "components/home-books" */).then(c => wrapFunctional(c.default || c)),
  HomeFirstScreen: () => import('../../components/home/FirstScreen.vue' /* webpackChunkName: "components/home-first-screen" */).then(c => wrapFunctional(c.default || c)),
  LayoutsHeader: () => import('../../components/layouts/Header.vue' /* webpackChunkName: "components/layouts-header" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
