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
          <div class="row-cell-wrapper" v-for="i in [...Array(10).keys()] " :key="i">
            <div class="row-index">
            {{i+2}}
            </div>
            <div class="cell"/>

          </div>
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
  data() {
    return {
      exerciseData: {title:"test",cellData:"名前|得点|||a|1|||"},
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
  background: #ffffff;
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
  box-sizing: border-box;
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
  box-sizing: border-box;
  border: solid 1px #1C683F;
}

.row-area{
  width: 165px;
  height: 100%;
  background: aliceblue;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  border: solid 1px;
}

.row-cell-wrapper{
  display: flex;
  width: 100%;
  height: 30px;
}

.row-index{
  width: 55px;
  height: 30px;
  box-sizing: border-box;
  border: solid 1px #000;
}

</style>
