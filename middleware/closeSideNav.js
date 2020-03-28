export default ({ store }) => {
    if (store.getters.isSideNavOpen) {
        store.dispatch('setIsSideNavOpen', false)
    }
}