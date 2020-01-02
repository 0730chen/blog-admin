import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
Vue.use(VueRouter);
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
                component: () => import('@/views/Container/Document/index.vue'),
                children: [
                    {
                        path: '/main/document/UserDoc',
                        name: 'UserDoc',
                        component: () => import('@/views/Container/Document/UserDoc.vue')
                    },
                    {
                        path: '/main/document/demo',
                        name: 'demo',
                        component: () => import('@/views/Container/Document/Demo.vue')
                    }
                ]
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
                component: () => import('@/views/Container/Component/index.vue'),
                children: [
                    {
                        path: '/main/component/upload',
                        name: 'upload',
                        component: () => import('@/views/Container/Component/Upload.vue')
                    }
                ]
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
            },
            {
                path: '/main/database',
                name: 'database',
                component: () => import('@/views/Container/Database/index.vue')
            },
            {
                path: '/main/charts',
                name: 'charts',
                component: () => import('@/views/Container/Charts/index.vue')
            },
            {
                path: '/main/tab',
                name: 'tab',
                component: () => import('@/views/Container/Tab/index.vue')
            },
            {
                path: '/main/errorpage',
                name: 'errorpage',
                component: () => import('@/views/Container/Errorpage/index.vue')
            },
            {
                path: '/main/errorlog',
                name: 'errorlog',
                component: () => import('@/views/Container/ErrorLog/index.vue')
            },
            {
                path: '/main/animation',
                name: 'animation',
                component: () => import('@/views/Container/Animation/index.vue')
            },
            {
                path: '/main/webpack',
                name: 'webpack',
                component: () => import('@/views/Container/Webpack/index.vue')
            },
            {
                path: '/main/theme',
                name: 'theme',
                component: () => import('@/views/Container/Theme/index.vue')
            },
            {
                path: '/main/pdf',
                name: 'pdf',
                component: () => import('@/views/Container/PDF/index.vue')
            }
        ]
    }
];
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});
export default router;
