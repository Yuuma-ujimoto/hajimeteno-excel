<template>
  <div class="error-wrapper">
    <div class="error-main">
    <p>Error! <span class="error-code">{{errorCode}}!</span></p>
    <p>{{errorMessage}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServerErrorView",
  data(){
    return{
      errorCode:500,
      errorMessage:"サーバー内部エラー!"
    }
  },
  mounted() {
    try {
      this.errorCode = parseInt(this.$route.params.code)
    }catch (e){
      console.log(e)
    }
  }
}
</script>

<style scoped>
  .error-wrapper{
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .error-main{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  p{
    font-size: 25px;
  }
  .error-code{
    font-size: 60px;
  }
</style>
