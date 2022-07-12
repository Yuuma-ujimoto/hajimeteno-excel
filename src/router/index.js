import { createRouter, createWebHistory } from 'vue-router'

const routes =[
  {
    name:"home",
    component:import("@/views/CourseListView.vue"),
    path:"/",
    meta: { title: 'マンセル｜コース一覧' }
  },
  // {
  //   name:"course list",
  //   component:import("@/views/CourseListView.vue"),
  //   path:"/course/list",
  //   meta: { title: 'マンセル｜コース一覧' }
  // },
  {
    name:"course info",
    component:import("@/views/CourseInfoView.vue"),
    path:"/course/info/:id",
    meta: { title: 'マンセル｜コース詳細' }

  },
  {
    name:"chapter main",
    path: "/exercise/:id",
    component: import("@/views/ExerciseMainView.vue")
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
