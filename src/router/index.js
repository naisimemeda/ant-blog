import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'hash',
    routes
})

router.beforeEach((to, from, next) => {
    const auth = router.app.$options.store.state.auth
    if (auth && to.path.indexOf('/login') !== -1) {
        next('/')
    } else {
        next()
    }
})

export default router