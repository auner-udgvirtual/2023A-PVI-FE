<script>
// import ThePreloader from "@/components/main/ThePreloader.vue";
import TheNavbar from "@/components/main/TheNavbar.vue";
// import TheSidebar from "@/components/main/TheSidebar.vue";
import TheFooter from "@/components/main/TheFooter.vue";
// import { useAuthStore } from "@/stores/authStore";

export default {
  components: {
    // ThePreloader,
    TheNavbar,
    // TheSidebar,
    TheFooter,
    // LoginPage,
  },
  data() {
    return {
      // store: useAuthStore(),
    };
  },
};
</script>

<template>
  <!-- <LoginPage /> -->
  <!-- <body class="layout-top-nav pace-success"> -->
  <!-- <body class="bg-light layout-top-nav"> -->
  <div class="wrapper">
    <!-- <the-preloader /> -->
    <the-navbar />
    <!-- <the-sidebar /> -->
    <div class="content-wrapper">
      <router-view />
    </div>
    <the-footer />
  </div>
  <!-- </body> -->
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback");
</style>
