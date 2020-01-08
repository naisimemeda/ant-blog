export default [
    {
        path: '/',
        name: 'Home',
        alias: '/topics',
        component: () => import('@/views/index/Home')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/auth/Login')
    }
]