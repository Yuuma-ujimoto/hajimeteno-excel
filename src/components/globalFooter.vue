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
  border-top: 1px solid #eee;
  /* position: absolute;
  bottom: 0;  */
  
}
.copyright {
  text-align: center;
  line-height: 150px;
}
</style>
