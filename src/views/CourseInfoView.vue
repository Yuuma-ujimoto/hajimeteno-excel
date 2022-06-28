<template>

</template>

<script>
import {axios_domain} from "@/assets/axios_domain";
import axios from "axios"
export default {
  name: "CourseInfoView",
  mounted() {
    this.ajax_test()
  },
  methods:{
    ajax_test:async function(){

      const axiosURL = axios_domain+"/api/course/get_all"

      const axiosResponse = await axios.get(axiosURL)
    }
  }
}
</script>

<style scoped>

</style>
