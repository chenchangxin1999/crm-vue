import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    // {
    //   path: '/',
    //   name: 'Home',
    //   component: Home
    // },
    //past：表示的是请求路径
    //name：表示名称 可以不要
    //redirect 表示重定向
    {
        path: '/',
        redirect:"main"
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/login/index')
    },
    {
        path: '/main',
        name: 'main',
        component: () => import('../views/main/index')
    },
]

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
})

export default router
