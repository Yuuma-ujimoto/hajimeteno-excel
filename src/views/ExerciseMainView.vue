<template>
  <div class="exercise-wrapper">
    <div class="exercise-info">
      {{ exerciseData.title }}
    </div>
    <div class="exercise-main">
      <div>
        <!--      <img alt="問題画像" src="./">-->
      </div>
      <div class="answer-area">
        <input type="text" class="answer-input">
      </div>
    </div>


    <div class="slide-area">

    </div>
  </div>
</template>

<script>
export default {
  name: "exerciseMain",
  data() {
    return {
      exerciseData: {title: "test", cellData: "名前|得点|||||a|1|||||"},
    }
  },
  mounted() {
  }
}
</script>

<style scoped>

</style>
