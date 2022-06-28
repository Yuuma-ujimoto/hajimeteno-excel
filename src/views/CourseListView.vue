<template>
  <h2>course情報</h2>
   <div v-for="course in axiosdata" :key="course.courseId">
   <h2> {{ course.courseName }}</h2>
   
    <router-link :to="'/course/info/'+course.courseId">詳細を見る</router-link> 
   </div>

</template>

<script>
import {axios_domain} from "@/assets/axios_domain";
import axios from "axios"
export default {
  name: "CourseListView",
  data() {
    return {
      axiosdata: {}
    }
   },
  mounted() {
    this.ajax_test()
  },
  methods:{
    ajax_test: async function () {
    

     const axiosURL = axios_domain + "/api/course/get_all"
     const axiosResponse = await axios.get(axiosURL)    
      this.axiosdata = axiosResponse.data.courses;
      console.log( axiosResponse )
    }
  }
}

</script>

<style scoped>

</style>
