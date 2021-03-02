<template>
  <div class="app" :class="{ 'theme-dark': nightMode }">
    <nav class="navbar fixed-top navbar-expand-lg">
      <div class="container">
        <a>
          <strong>Where in the world?</strong>
        </a>

        <a @click="nightMode = !nightMode">
          <strong>
            <i class="flaticon-night"></i>
            Dark Mode
          </strong>
        </a>
      </div>
    </nav>
    <!-- Navbar -->
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      nightMode: false,
      isLoading: true,
    };
  },
  methods: {},
  watch: {
    nightMode: function() {
      localStorage.setItem("nightMode", JSON.stringify(this.nightMode));
    },
  },
  created() {
    this.nightMode = JSON.parse(localStorage.getItem("nightMode"));
  },
};
</script>
<style></style>
