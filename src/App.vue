<template>
  <globalHeader />
  <router-view />
  <globalFooter />
</template>
<script>
import "normalize.css";
import globalHeader from "@/components/globalHeader";
import globalFooter from "@/components/globalFooter";
export default {
  name: "App",
  components: {
    globalHeader,
    globalFooter,
  },
};
</script>
<style>
</style>
