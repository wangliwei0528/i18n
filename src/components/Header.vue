<template>
  <div class="nav">
    <div class="main">
      <div class="logo">
        <span>
          <img src="../assets/img/logo.png" alt="" />
        </span>
        <span class="logo1">指纹卫士</span>
        <span class="logo2">Fingerprint Guarder</span>
      </div>
      <div class="menu">
        <div
          class="item"
          v-for="(n, index) in tabs"
          :key="index"
          :class="{ 'menu-active': tabIndex == index }"
          @click="handleSelect(n.key, index)"
        >
          {{ n.value }}
        </div>
      </div>
      <div class="lang"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabIndex: 0,
      tabs: [
        { key: "home", value: this.$t("title.home") },
        { key: "case", value: this.$t("title.case") },
        { key: "price", value: this.$t("title.price") },
        { key: "download", value: this.$t("title.download") },
        { key: "help", value: this.$t("title.help") },
        { key: "contact", value: this.$t("title.contact") },
      ],
    };
  },
  created() {
    if (this.$route.path == "/") {
      this.tabIndex = 0;
    }
    if (this.$route.path == "/case") {
      this.tabIndex = 1;
    }
    if (this.$route.path == "/price") {
      this.tabIndex = 2;
    }
    if (this.$route.path == "/download") {
      this.tabIndex = 3;
    }
    if (this.$route.path == "/help") {
      this.tabIndex = 4;
    }if (this.$route.path == "/contact") {
      this.tabIndex = 5;
    }
  },
  methods: {
    handleSelect(e, i) {
      this.tabIndex = i;
      switch (e) {
        case "home":
          this.$router.push("/");
          break;
        case "case":
          this.$router.push("/case");
          break;
        case "price":
          this.$router.push("/price");
          break;
        case "download":
          this.$router.push("/download");
          break;
        case "help":
          this.$router.push("/help");
          break;
        case "contact":
          this.$router.push("/contact");
          break;
      }
    },
  },
};
</script>
<style scoped>
.nav {
  width: 100%;
  height: 84px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
}
.main {
  width: 100%;
  padding: 18px 54px;
  height: 100%;
  margin: 0 auto;
}
.logo {
  width: 300px;
  height: 100%;
  position: relative;
  float: left;
}
.logo img {
  position: absolute;
  top: 0;
  left: 0;
}
.logo1 {
  position: absolute;
  top: 20px;
  left: 80px;
  font-size: 18px
}
.logo2 {
  position: absolute;
  top: 42px;
  left: 80px;
  font-size: 18px
}
.menu {
  width: 60%;
  height: 100%;
  float: left;
}
.menu .item {
  float: left;
  padding: 0 18px;
  line-height: 84px;
  font-size: 18px;
  cursor: pointer;
}
.menu-active {
  font-weight: 700;
}
.lang{
  width:200px;
  height:100%;
  float:right;
  background:pink;
}
</style>