import {createRouter, createWebHistory} from 'vue-router'
import ServerErrorView from "@/views/ErrorViews/ServerErrorView";

const routes = [
    {
        name: "home",
        component: import("@/views/CourseListView.vue"),
        path: "/",
        meta: {title: 'マンセル｜コース一覧'}
    },
    // {
    //   name:"course list",
    //   component:import("@/views/CourseListView.vue"),
    //   path:"/course/list",
    //   meta: { title: 'マンセル｜コース一覧' }
    // },
    {
        name: "course info",
        component: import("@/views/CourseInfoView.vue"),
        path: "/course/info/:id",
        meta: {title: 'マンセル｜コース詳細'}

    },
    {
        name: "chapter main",
        path: "/exercise/:id",
        component: import("@/views/ExerciseMainView.vue")
    },

    {
        name: "500 error",
        path: "/error/:code",
        component: ServerErrorView
    },

    // 404エラー
    // 上のルーティング全てに一致しなかった場合このページが呼ばれるので
    // ページを追加することがある場合はここよりも上に追加してください
    {
        name: "404 error",
        path: "/:catchAll(.*)",
        component: import("@/views/ErrorViews/404ErrorView.vue")
    }
]

const DEFAULT_TITLE = 'マンセル'
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
router.afterEach((to) => {
    document.title = to.meta.title || DEFAULT_TITLE
})

export default router
