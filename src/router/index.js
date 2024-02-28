import {createRouter, createWebHistory} from 'vue-router'
import MainPage from "../views/MainPage.vue";
import TodoPage from "../views/TodoPage.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {path: '/', name: 'home', component: MainPage},
        {path: '/todo', name: 'todo', component: TodoPage}
    ]
})

export default router
