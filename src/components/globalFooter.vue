<template>
  <footer>
    <p class="copyright">Copyright &copy; マンセル All Rights Reserved.</p>
  </footer>
</template>

<script>
export default {
  name: "globalFooter",
};
</script>

<style scoped>
p{
  margin: 0;
}
footer {
  height: 150px;
  width: 100%;
  background: #fff;
  position: absolute; /*←絶対位置*/
  bottom: 0; /*下に固定*/
  
}
.copyright {
  text-align: center;
  line-height: 150px;
}
</style>
