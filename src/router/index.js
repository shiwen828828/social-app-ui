// ./router/index.js
import { createRouter, createWebHistory } from 'vue-router';

import Login from '@/components/Login.vue'; // 登录页面组件
import MainLayout from '@/components/MainLayout.vue'; // 主页面组件

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/main',
        name: 'Main',
        component: MainLayout,
    },
    {
        path: '/',
        redirect: '/login', // 默认重定向到登录页面
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
