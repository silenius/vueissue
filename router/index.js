import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/HomeView.vue')
    },

    {
        path: '/:id(\\d+)',
        name: 'contents',
        component: () => import('../views/contents/ContentsIndex.vue'),
        props: (route) => ({ 
            content_id: parseInt(route.params.id) 
        }),
        children: [
            {
                name: 'browse-content',
                path: 'browse',
                component: () => import('../views/contents/ContentsBrowse.vue')
            },
            {
                name: 'edit-content',
                path: 'edit',
                component: () => import('../views/contents/ContentEdit.vue'),
            },
            {
                name: 'add-content',
                path: 'add',
                component: () => import('../views/contents/ContentAdd.vue'),
                props: (route) => ({
                    type: route.query.type,
                })
            },

        ]
    },


]
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes,
    sensitive: true
})

export default router
