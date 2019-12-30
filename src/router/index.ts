import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import("@/views/Login/LoginForm.vue")
    },
    {
        path: '/main',
        name: 'main',
        component: () => import('@/views/Main/index.vue'),
        children: [
            {
                path: '/main/document',
                name: 'document',
                component: () => import('@/views/Container/Document/index.vue')
            },
            {
                path: '/main/guide',
                name: 'guide',
                component: () => import('@/views/Container/Guide/index.vue')
            },
            {
                path: '/main/icon',
                name: 'icon',
                component: () => import('@/views/Container/Icon/index.vue')
            },
            {
                path: '/main/component',
                name: 'component',
                component: () => import('@/views/Container/Component/index.vue')
            },
            {
                path: '/main/table',
                name: 'table',
                component: () => import('@/views/Container/Table/index.vue')
            },
            {
                path: '/main/example',
                name: 'example',
                component: () => import('@/views/Container/Example/index.vue')
            }


        ]
    },
]


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
