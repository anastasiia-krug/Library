import { wrapFunctional } from './utils'

export { default as Books } from '../../components/Books.vue'
export { default as AuthSignIn } from '../../components/auth/SignIn.vue'
export { default as AuthSignUp } from '../../components/auth/SignUp.vue'
export { default as HomeAuthors } from '../../components/home/Authors.vue'
export { default as HomeBooks } from '../../components/home/Books.vue'
export { default as HomeFirstScreen } from '../../components/home/FirstScreen.vue'
export { default as LayoutsBookCard } from '../../components/layouts/BookCard.vue'
export { default as LayoutsFooter } from '../../components/layouts/Footer.vue'
export { default as LayoutsHeader } from '../../components/layouts/Header.vue'
export { default as LayoutsLogo } from '../../components/layouts/Logo.vue'
export { default as LayoutsSearch } from '../../components/layouts/Search.vue'
export { default as UiInput } from '../../components/ui/input.vue'

export const LazyBooks = import('../../components/Books.vue' /* webpackChunkName: "components/books" */).then(c => wrapFunctional(c.default || c))
export const LazyAuthSignIn = import('../../components/auth/SignIn.vue' /* webpackChunkName: "components/auth-sign-in" */).then(c => wrapFunctional(c.default || c))
export const LazyAuthSignUp = import('../../components/auth/SignUp.vue' /* webpackChunkName: "components/auth-sign-up" */).then(c => wrapFunctional(c.default || c))
export const LazyHomeAuthors = import('../../components/home/Authors.vue' /* webpackChunkName: "components/home-authors" */).then(c => wrapFunctional(c.default || c))
export const LazyHomeBooks = import('../../components/home/Books.vue' /* webpackChunkName: "components/home-books" */).then(c => wrapFunctional(c.default || c))
export const LazyHomeFirstScreen = import('../../components/home/FirstScreen.vue' /* webpackChunkName: "components/home-first-screen" */).then(c => wrapFunctional(c.default || c))
export const LazyLayoutsBookCard = import('../../components/layouts/BookCard.vue' /* webpackChunkName: "components/layouts-book-card" */).then(c => wrapFunctional(c.default || c))
export const LazyLayoutsFooter = import('../../components/layouts/Footer.vue' /* webpackChunkName: "components/layouts-footer" */).then(c => wrapFunctional(c.default || c))
export const LazyLayoutsHeader = import('../../components/layouts/Header.vue' /* webpackChunkName: "components/layouts-header" */).then(c => wrapFunctional(c.default || c))
export const LazyLayoutsLogo = import('../../components/layouts/Logo.vue' /* webpackChunkName: "components/layouts-logo" */).then(c => wrapFunctional(c.default || c))
export const LazyLayoutsSearch = import('../../components/layouts/Search.vue' /* webpackChunkName: "components/layouts-search" */).then(c => wrapFunctional(c.default || c))
export const LazyUiInput = import('../../components/ui/input.vue' /* webpackChunkName: "components/ui-input" */).then(c => wrapFunctional(c.default || c))
