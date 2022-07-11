<template>
  <div class="exercise-wrapper">
    <div class="exercise-info">
      {{ exerciseData.title }}
    </div>

    <div class="exercise-main">

      <div class="column-area">
      </div>

      <div class="cell-center-area">
        <div class="row-area">

        </div>
        <div class="cell-area">
          <div class="cell" v-for="(cellData,index) in cellArray" :key="index">
            {{ cellData }}
          </div>

          <div class="answer-area">

          </div>
        </div>
      </div>

    </div>

  </div>
  <div class="slide-area">

  </div>

</template>

<script>
export default {
  name: "exerciseMain",

  props: {
    exerciseData: {
      type: Object
    }
  },
  data() {
    return {
      cellArray: []
    }
  },
  mounted() {


    this.cellArray = this.exerciseData.cellData.split("|")
  }
}
</script>

<style scoped>
.cell-area {
  width: 330px;
  display: flex;
  flex-wrap: wrap;
  align-content: start;
}

.cell {
  width: 110px;
  height: 30px;
  border: solid 1px;
  box-sizing: border-box;
}

.exercise-wrapper {
  width: 100%;
  display: flex;
}

.exercise-info {
  width: 30%;
  height: 660px;
  display: flex;
}

.exercise-main {
  width: 70%;
  height: 660px;
  display: flex;
  flex-direction: column;
}

.cell-center-area{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
}

.column-area{
  width: 100%;
  height: 60px;
  border: solid 1px #1C683F;
}

.row-area{
  width: 165px;
  height: 100%;
  background: aliceblue;
  display: flex;
  flex-direction: row;
}

</style>
