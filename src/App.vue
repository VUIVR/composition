<template>
  <Header  />
  <Sidebar />
  <main className="app">
    <router-view/>
    <Footer />
  </main>
</template>

<script setup>
  import Header from "@/components/header.vue"
  import Footer from "@/components/footer.vue"
  import Sidebar from "@/components/sidebar.vue"
</script>

<style lang="scss">
    @import "./assets/style/main.scss";
</style>
