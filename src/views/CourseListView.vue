<template>
<div class="wrap">
  <h2>course情報</h2>
   <div v-for="course in axiosdata" :key="course.courseId" class="course-wrap">
    <div class="course-wrap-box">
      <div class="img-box">
        <div class="img-circle">

        </div>
      </div>
      <div class="text-box">

      
      <h2> {{ course.courseName }}</h2>
      <p> {{ course.courseDetail }} </p>
      <div class="btn-wrap">
        <button><router-link :to="'/course/info/'+course.courseId">レッスン詳細へ</router-link> </button>
        <button><router-link :to="'/course/info/'+course.courseId">レッスンを始める</router-link> </button>
      </div>
      </div>
    </div>
    <div v-if="course.courseId != axiosdata.length">
<div class="gray-line"> </div>
</div>

  
    </div>
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
.wrap{
width: 960px;
margin: 0 auto;
}
.img-circle{
  width:118px;
  height: 118px;
  background: #fff;
  margin:0 auto;
 
}

.course-wrap-box{
  width:915px;
  height: 241px;
   display: flex;
   border: solid 1px #000;
  

}
.img-box{
  width: 30%;
  background-color:#1D6B41 ;
}
.btn-wrap{
  widows: 500px;
  display: flex;
  justify-content: space-around;
}
.gray-line{
  width: 10px;
  height: 50px;
  margin:10px 0px 10px 14%;
  border-radius: 20px;
 background: rgba(36, 61, 63, 0.2);
}

</style>
