import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Books: () => import('../../components/Books.vue' /* webpackChunkName: "components/books" */).then(c => wrapFunctional(c.default || c)),
  HomeAuthors: () => import('../../components/home/Authors.vue' /* webpackChunkName: "components/home-authors" */).then(c => wrapFunctional(c.default || c)),
  HomeBooks: () => import('../../components/home/Books.vue' /* webpackChunkName: "components/home-books" */).then(c => wrapFunctional(c.default || c)),
  HomeFirstScreen: () => import('../../components/home/FirstScreen.vue' /* webpackChunkName: "components/home-first-screen" */).then(c => wrapFunctional(c.default || c)),
  LayoutsBookCard: () => import('../../components/layouts/BookCard.vue' /* webpackChunkName: "components/layouts-book-card" */).then(c => wrapFunctional(c.default || c)),
  LayoutsFooter: () => import('../../components/layouts/Footer.vue' /* webpackChunkName: "components/layouts-footer" */).then(c => wrapFunctional(c.default || c)),
  LayoutsHeader: () => import('../../components/layouts/Header.vue' /* webpackChunkName: "components/layouts-header" */).then(c => wrapFunctional(c.default || c)),
  LayoutsLogo: () => import('../../components/layouts/Logo.vue' /* webpackChunkName: "components/layouts-logo" */).then(c => wrapFunctional(c.default || c)),
  LayoutsSearch: () => import('../../components/layouts/Search.vue' /* webpackChunkName: "components/layouts-search" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
