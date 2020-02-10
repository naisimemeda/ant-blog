import Vue from 'vue'
import Vuex from 'vuex'
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
    }
}

const actions = {
    token({ commit }, token) {
        if (token) {
            commit('UPDATE_TOKEN', token.token)
            commit('UPDATE_REFRESH_TOKEN', token.refresh_token)
        }
        router.push('/')
    }
}

const store = new Vuex.Store({
    state,
    mutations,
    actions
})

export default store