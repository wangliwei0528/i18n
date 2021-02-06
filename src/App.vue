<template>
  <div id="app">
    <Header />
    <!-- <span>{{$t('message.greeting')}}</span> -->
    <div class="appContent">
      <router-view />
    </div>
    <FooterComponent />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import FooterComponent from "./components/FooterComponent.vue";
export default {
  name: "App",
  components: { Header, FooterComponent },
  created() {},
  methods: {},
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  /* width: 1920px; */
  background: #f1f5fb;
}
#app {
  text-align: center;
  color: #3768b1;
  margin: 0px;
  padding: 0px;
  list-style: none;
  font-family: "Adobe Heiti Std R";
}
.appContent {
  width: 100%;
  left: 0;
  right: 0;
  margin: auto;
  position: relative;
  top: 64px;
}
</style>
