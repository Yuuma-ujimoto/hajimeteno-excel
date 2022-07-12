<template>
<div class="main">
  <div class="wrap">
    <!-- コーステーマ -->
    <div class="course-theme">
      <div class="course-theme-wrap">
        <div class="text-wrap">
          <div v-for="course in axiosdataCourse" :key="course.courseId">
            <div v-if="course.courseId == $route.params.id">
              <h1>{{ course.courseName }}</h1>
              <p>{{ course.courseDetail }}</p>
            </div>
            <div v-else class="none"></div>
          </div>
        </div>
        <img src="@/assets/img/course-theme.svg" alt="">
      </div>
    </div>

    <!-- レッスン一覧 -->
    <h2 class="lesson-list-title">学べること一覧</h2>
    <div class="lesson-list">
      <div class="chapter-list">
        <!-- レッスンをv-forで回す -->
        <div class="chapter-list-wrap">
          <div v-for="lesson in axiosdataLesson" :key="lesson.lessonId">
            <ul v-on="acquisition(lesson.lessonId)" v-if="lesson.course.courseId == $route.params.id">
              <div>
                <li class="chapter-list-title-li" v-on="acquisition(lesson.lessonId)" v-if="lesson.course.courseId == $route.params.id">
                  <h2 class="chapter-list-title"  v-bind:id="lesson.lessonId">{{ lesson.lessonName }}</h2>
                </li>
                <!-- チャプターをv-forで回す -->
                <ul>
                  <div v-for="chapter in axiosdata" :key="chapter.chapterId">
                    <li v-if="chapter.lesson.lessonId === idNum">
                      <router-link :to="'/exercise/'+chapter.chapterId">
                        <a class="link-to-page">
                          {{ chapter.chapterName }}
                        </a>
                      </router-link>
                    </li>
                    <li v-else class="none"></li>
                  </div>
                </ul>
              </div>
            </ul>
            <ul v-else class="none"></ul>
          </div>
        </div>
      </div>
      <!-- レッスン一覧の目次 -->
      <div class="chapter-show-list">
        <ul>
          <div v-for="lesson in axiosdataLesson" :key="lesson.lessonId">
            <li class="chapter-show-list-li" v-if="lesson.course.courseId == $route.params.id">
              <!-- 緑の丸 -->
              <div class="chapter-circle">
                <div class="chapter-circle-small"></div>
              </div>
              <!-- レッスン名 -->
              <a class="chapter-show-list-a" v-bind:href="'#' + lesson.lessonId">{{ lesson.lessonName }}</a>
            </li>
            <li v-else class="none"></li>
          </div>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {axios_domain} from "@/assets/axios_domain";
import axios from "axios";
export default {
  name: "CourseInfoView",
  data() {
    return {
      axiosdata: {},
      axiosdataLesson: {},
      axiosdataCourse: {},
      idNum: ''
    }
  },
  mounted() {
    this.ajax_test()
  },
  methods:{
    ajax_test:async function(){
      const axiosURL = axios_domain + "/api/chapter/get_all"
      const axiosURLLesson = axios_domain + "/api/lesson/get_all"
      const axiosURLCourse = axios_domain + "/api/course/get_all"
      const axiosResponse = await axios.get(axiosURL)  
      const axiosResponseLesson = await axios.get(axiosURLLesson)   
      const axiosResponseCourse = await axios.get(axiosURLCourse)
      this.axiosdata = axiosResponse.data.chapters;
      this.axiosdataLesson = axiosResponseLesson.data.lessons;
      this.axiosdataCourse = axiosResponseCourse.data.courses;

      console.log( axiosResponse )
    },
    acquisition: function(num){
      this.idNum = num
    }
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

h1 {
  font-size:2.5rem;
  color: #fff;
}
h2 {
  font-size: 1.5rem;
}

ol,ul,li {
  list-style: none;
}

li {
  display: list-item;
  text-align: -webkit-match-parent;
}
ul {
  margin: 0;
  padding: 0;
}
.main {
  width: 100vw;
  color: #335A6F;
  background: #FBFEF7;
  margin-top: 30px;
}
.wrap {
  width: 85%;
  margin: auto;
}
.none {
  display: none;
}

/* コーステーマ */
.course-theme {
  margin: auto;
  /* height: calc((100vw/4)); */
  padding: 60px 0;
  background-color: #1D6B41;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgb(0 0 0 / 4%);

  /* course-theme-wrapを上下中央揃え */
  display: flex;
  justify-content: center;
}
.course-theme-wrap {
  width: 85%;
  display: flex;
  justify-content: space-between;
}
.text-wrap {
  width: 70%;
}
.text-wrap p {
  color: #fff;
}

/* 学べること一覧 */
.lesson-list-title {
  margin: 60px 0 30px 12px;
}
.lesson-list {
  display: flex;
  margin-bottom: 100px;
}

/* レッスン・チャプター一覧 */
.chapter-list {
  width: 60%;
}
.chapter-list-wrap {
  margin-bottom: 40px;
  box-shadow: 0 2px 10px rgb(0 0 0 / 4%);
  background-color: #fff;
  letter-spacing: 1px;
}
.chapter-list li {
  border-bottom: 1px solid rgba(215,215,215,0.48);
}
/* レッスン名 */
.chapter-list-title {
  padding: 20px 30px;
  margin: 0;
  font-size: 1.125rem;
}
.chapter-list-title-li {
  border-left: 5px solid #52bba1;
}
/* チャプター */
.link-to-page {
  padding: 6px 30px;
  color: #335A6F;
  display: block;
  padding: 6px 34px;
  line-height: 40px;
  font-size: .9em;
  transition: all .2s;
  cursor: pointer;
}
.link-to-page:hover {
  background-color: #F3F4F5;
}

/* レッスン一覧の目次 */
.chapter-show-list {
  padding-left: 80px;
}
.chapter-show-list ul {
  height: 60px;
  line-height: 60px;
  letter-spacing: .02em;
}
.chapter-show-list li {
  display: flex;
  justify-content: center;
  align-items: center;
}
/* 〇 */
.chapter-circle {
  width: 30px;
  height: 30px;
  background-color: #1C683F;
  margin: 0 20px;
  border-radius: 50%;
}
.chapter-circle-small {
  width: 25px;
  height: 25px;
  background-color: #94C433;
  border-radius: 50%;
  visibility: hidden;
}
.chapter-show-list-a {
  width: 280px;
  color: #717F94;
}
/* hover */
.chapter-show-list-li:hover .chapter-circle {
  width: 45px;
  height: 45px;
  margin: 0 12.5px;
  background-color: #C7E194;
  transition: all .1s;
}
.chapter-show-list-li:hover .chapter-circle-small {
  visibility: visible;
  margin: 10px;
  transition: all .1s;
}
</style>
