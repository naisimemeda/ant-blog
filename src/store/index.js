import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import router from '../router'

Vue.use(Vuex)

const state = {
    user: {

    },
    auth: false,
    token: '',
    refresh_token: ''
}

const mutations = {
    UPDATE_TOKEN(state, token) {
        state.token = token
        state.auth  = true
    },
    UPDATE_REFRESH_TOKEN(state, token) {
        state.refresh_token = token
    },
    UPDATE_USER(state, user) {
        state.user = user
    },
}

const actions = {
    login({ commit }, data) {
        if (data) {
            commit('UPDATE_TOKEN', data.token)
            commit('UPDATE_REFRESH_TOKEN', data.refresh_token)
            commit('UPDATE_USER', data.user)
            router.push('/')
        }
    }
}

const store = new Vuex.Store({
    state,
    mutations,
    actions,
    plugins: [createPersistedState()]
})

export default store