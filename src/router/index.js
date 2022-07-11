import { createRouter, createWebHistory } from 'vue-router'


const routes = [{
        name: "course list",
        component: import ("@/views/CourseListView.vue"),
        path: "/course/list"
    },
    {
        name: "exercise",
        component: import ("@/views/ExerciseinfoView.vue"),
        path: "/exercise"
    },
    {
        name: "exercise main",
        component: import ("@/views/ExercisemainView.vue"),
        path: "/exercise/main"
    }
]


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router