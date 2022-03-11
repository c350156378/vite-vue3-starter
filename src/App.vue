<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div>
    <el-header>
      <el-button><router-link to="/">Home</router-link></el-button>
      <el-button><router-link to="/vuex">Vuex</router-link></el-button>
      <el-button><router-link to="/axios">Axios</router-link></el-button>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
