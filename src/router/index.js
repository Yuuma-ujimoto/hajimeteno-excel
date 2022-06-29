import { createRouter, createWebHistory } from 'vue-router'


const routes =[
  {
    name:"course list",
    component:import("@/views/CourseListView.vue"),
    path:"/course/list"
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
