<template>
  <div class="exercise-wrapper">
    <div class="exercise-area">
      <div class="exercise-info-wrapper">
        <div class="exercise-info">
          問題文〜〜〜〜〜〜〜〜〜〜〜
          {{ exerciseData.question }}
        </div>
      </div>
      <div class="exercise-main">
        <div class="exercise-image-area">
          <!--      <img alt="問題画像" src="./">-->
        </div>
        <div class="exercise-answer-area">
          <div class="answer-input-wrapper">
            <input type="text" class="answer-input" maxlength="255" v-model="answer_input">
          </div>
          <div class="submit-wrapper">
            <button class="submit-button" @click="answer">解答</button>
          </div>
        </div>
      </div>
    </div>

    <div class="exercise-footer">
      <div class="slide-button-wrapper">
        <button class="slide-button">スライドを見る</button>
      </div>
    </div>

  </div>

  <div class="slide" v-if="isSlideOpen">
    <!--
      ここにスライドのコンポーネントを配置し
        イベントに応じて表示を切り替える
    -->

  </div>


</template>

<script>
import {axios_domain} from "@/assets/axios_domain";
import axios from "axios";

export default {
  name: "exerciseMain",
  data() {
    return {
      exerciseData: {question: "test", answer: "=(A2+B2)"},
      isSlideOpen: false,
      isResultModalOpen: false,
      answer_input: ""
    }
  },
  mounted() {
    this.getExerciseData().then()
  },
  methods: {
    getExerciseData: async function () {
      const axiosURL = axios_domain + "/api/chapter/get_all"
      const axiosResult = await axios.get(axiosURL)
      console.log(axiosResult)

      const chapters = axiosResult.data.chapters

      for (let chapter of chapters){

        if (chapter.chapterId === parseInt(this.$route.params.id)){
          console.log(chapter)
          this.exerciseData.answer = chapter.answer
          this.exerciseData.question = chapter.question


          break
        }
      }

    },
    answer() {
      if (this.answer_input === this.exerciseData.answer) {
        //
        this.isResultModalOpen = true
      }

    }
  }
}
</script>

<style scoped>

.exercise-wrapper {
  display: flex;
  flex-direction: column;
}

.exercise-area {
  width: 100%;
  height: 550px;
  display: flex;
}

.exercise-info-wrapper {
  width: 25%;
  height: 100%;
  background: #94C433;
  padding: 10px;
  box-sizing: border-box;
}

.exercise-info {
  width: 100%;
  height: 100%;
  background: #eeeeee;
  box-sizing: border-box;
  padding: 5px;
}

.exercise-main {
  width: 75%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.exercise-image-area {
  width: 100%;
  height: 450px;
}

.exercise-answer-area {
  width: 100%;
  height: 100px;
  display: flex;
  background: white;
  border: solid 1px;
}

.answer-input-wrapper {
  width: 60%;
  height: 100px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;

}

.answer-input {
  width: 350px;
  height: 50px;
  font-size: 24px;
}

.submit-wrapper {
  width: 40%;
  height: 100px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
}

.submit-button {
  width: 150px;
  height: 50px;
  background: #1C683F;
  color: #ffffff;
  border: none;
  box-shadow: none;
  outline: none;
}


.slide-button {
  width: 150px;
  height: 40px;
  box-sizing: border-box;
  background: #1C683F;
  color: #ffffff;
  border: none;
  box-shadow: none;
  outline: none;
}


</style>
