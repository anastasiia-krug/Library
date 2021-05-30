// state
export const state = () => ({
    user: null,
    previewBooks: null,
    books: null,
    dialog: null,
})

// getters
export const getters = {
    dialog(state) {
        return state.dialog
    },
    books(state) {
        return state.books
    },

}

// actions
export const actions = {
    getDialog({commit}, {dialog}) {
        commit('setDialog', dialog)
    },
    async getBooks({commit}, {count,page,getBook,returnBook}) {
        await this.$axios.$get(`/api/books?count=${count}&page=${page}${getBook?'&getBook='+getBook:''}${returnBook?'&returnBook='+returnBook:''}`).then((books) => {
            commit('setBooks', books)
        })
    },
}

// mutations
export const mutations = {
    setDialog(state, dialog) {
        state.dialog = dialog
    },
    setBooks(state, books) {
        state.books = books
    },
}
