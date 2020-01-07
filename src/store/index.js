import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)

const state = {
    user: {

    },
    token: ''
}

const mutations = {
    UPDATE_TOKEN(state, token) {
        state.token = token
    }
}

const actions = {
    login({ commit }, token) {
        if (token) commit('UPDATE_TOKEN', token)
        router.push('/')
    }
}

const store = new Vuex.Store({
    state,
    mutations,
    actions
})

export default store