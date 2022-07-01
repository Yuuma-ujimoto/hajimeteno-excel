import { createRouter, createWebHistory } from 'vue-router'


const routes =[
  {
    name:"course list",
    component:import("@/views/CourseListView.vue"),
    path:"/course/list"
  },
  {
    name:"course info",
    component:import("@/views/CourseInfoView.vue"),
    path:"/course/info"
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
