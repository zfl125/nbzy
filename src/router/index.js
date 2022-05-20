import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout/layout.vue'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'layout',
    component: Layout,
    children: [{
        path: '/',
        component: () =>
            import ('@/views/Home'),
    }]
}, ]

const router = new VueRouter({
    routes
})

export default router