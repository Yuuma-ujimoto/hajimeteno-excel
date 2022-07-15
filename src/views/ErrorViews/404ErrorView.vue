<template>
  <div class="error-wrapper">
    <div class="error-main">
    <p>Error! <span class="error-code">404!</span></p>
    <p>残念ながらページが見つかりませんでした・・・。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "404errorView"
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
