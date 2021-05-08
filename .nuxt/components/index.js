import { wrapFunctional } from './utils'

export { default as HomeBooks } from '../../components/home/Books.vue'
export { default as HomeFirstScreen } from '../../components/home/FirstScreen.vue'
export { default as LayoutsHeader } from '../../components/layouts/Header.vue'

export const LazyHomeBooks = import('../../components/home/Books.vue' /* webpackChunkName: "components/home-books" */).then(c => wrapFunctional(c.default || c))
export const LazyHomeFirstScreen = import('../../components/home/FirstScreen.vue' /* webpackChunkName: "components/home-first-screen" */).then(c => wrapFunctional(c.default || c))
export const LazyLayoutsHeader = import('../../components/layouts/Header.vue' /* webpackChunkName: "components/layouts-header" */).then(c => wrapFunctional(c.default || c))
