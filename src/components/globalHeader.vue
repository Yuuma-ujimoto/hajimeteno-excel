<template>
  <header>
<ul>
  <li>
    <a href="#"><img src="@/assets/img/logo.png" alt="" class="logo-img"></a>
  </li>
  <li class="menu">
    <router-link :to="'/course/list'">レベル一覧</router-link>
  </li>
</ul>

  </header>

</template>

<script>
export default {
  name: "globalHeader"
}
</script>

<style scoped>
header{
  height: 46px;
  background: #fff;
  box-shadow: 0 1px 3px rgb(160 166 179 / 30%);
  letter-spacing: 1px;
}
ul{
 list-style-type: none;
 margin: 0;
 padding: 0;
 height: 46px;
 display: flex;
 line-height: 46px;
}
a{
  text-decoration: none;
  color: #214257;
}
.logo-img{
  height: 46px;
}
.menu{
  margin: 0 27px;
  transition: all .2s;
}
.menu:hover {
  border-bottom: #214257 solid 4px;
}
</style>
