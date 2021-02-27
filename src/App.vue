<template>
  <div id="nav">
    <div class="nav-logo">Where in the world?</div>
    <div class="nav-mode" @click="SwitchTheme()">
      <span class="flaticon-night"></span>
      Dark Mode
    </div>
  </div>
  <router-view />
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    showPage() {
      document.getElementById("loader").style.display = "none";
      document.getElementById("app").style.display = "block";
    },
    loading() {
      this.myLoader = setTimeout(this.showPage, 4000);
    },
    SwitchTheme() {
      let element = document.body;
      element.classList.toggle("theme-dark");
    },
  },
};
</script>
<style>
</style>
