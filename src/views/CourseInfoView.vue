<template>
<div class="main">
  <div class="wrap">
    <!-- コーステーマ -->
    <div class="course-theme">
      <div class="course-theme-wrap">
        <!-- <div class="text-wrap"> -->
          <!-- <h1>{{ axiosdata[0] }}</h1> -->
          <!-- <p>{{ axiosdata.lesson.course.courseDetail }}</p> -->
        <!-- </div> -->
        <h1>基礎</h1>
        <p>あいうえおかきくえお</p>
      </div>
    </div>

    <!-- レッスン一覧 -->
    <div class="lesson-list">
      <h2 class="lesson-list-title">学べること一覧</h2>
      <div class="chapter-list" v-for="chapter in axiosdata" :key="chapter.chapterId">
        <ul>
          <div>
            <li class="chapter-list-title-li">
              <h2 class="chapter-list-title">{{ chapter.lesson.lessonName }}</h2>
            </li>
            <ul>
              <li v-for="chapter in axiosdata" :key="chapter.chapterId">
                <router-link :to="'/exercise/'+chapter.chapterId">
                  <button class="link-to-page">
                    {{ chapter.chapterName }}
                  </button>
                </router-link>
              </li>
            </ul>
          </div>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {axios_domain} from "@/assets/axios_domain";
import axios from "axios"
export default {
  name: "CourseInfoView",
  data() {
    return {
      axiosdata: {},
    }
  },
  mounted() {
    this.ajax_test()
  },
  methods:{
    ajax_test:async function(){

      const axiosURL = axios_domain + "/api/chapter/get_all"
      const axiosResponse = await axios.get(axiosURL)    
      this.axiosdata = axiosResponse.data.chapters;
      console.log( axiosResponse.data.chapters[0].chapterId )
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
}
.wrap {
  width: 85%;
  margin: auto;
  padding-top: 30px;
}

/* コーステーマ */
.course-theme {
  margin: auto;
  /* height: calc((100vw/4)); */
  padding: 70px 0;
  background-color: #1D6B41;

  /* course-theme-wrapを上下中央揃え */
  display: flex;
  justify-content: center;
}
.course-theme-wrap {
  width: 85%;
}
.course-theme p {
  color: #fff;
}

/* レッスン一覧 */
.lesson-list-title {
  margin: 60px 0 30px 12px;
}

.chapter-list {
  margin-bottom: 40px;
  box-shadow: 0 2px 10px rgb(0 0 0 / 4%);
  background-color: #fff;
  letter-spacing: 1px;
  width: 50%;
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
</style>
