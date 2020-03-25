export const state = () => ({
    isSideNavOpen: false
})

export const getters = {
    isSideNavOpen: state => state.isSideNavOpen
}

export const mutations = {
    SET_IS_SIDE_NAV_OPEN: (state, payload) => {
        state.isSideNavOpen = payload
    }
}

export const actions = {
    setIsSideNavOpen: ({ commit }, payload) => {
        commit('SET_IS_SIDE_NAV_OPEN', payload)
    }
}