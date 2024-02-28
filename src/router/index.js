import {createRouter, createWebHashHistory} from 'vue-router'
import MainPage from "../views/MainPage.vue";
import TodoPage from "../views/TodoPage.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', name: 'home', component: MainPage},
        {path: '/todo', name: 'todo', component: TodoPage}
    ]
})

export default router
