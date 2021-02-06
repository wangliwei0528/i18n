<template>
  <div class="nav">
    <div class="main">
      <div class="logo" @click="goHome()">
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
      <div class="lang">
        {{ $t("home.select") }}:
        <span @click="show = true" id="box"
          >{{ lang }}<span class="arrow"></span
        ></span>
        <div v-show="show" class="langs">
          <div
            class="langitem"
            v-for="(n, index) in language"
            :key="index"
            @click="langSelect(n.key)"
          >
            {{ n.value }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lang: localStorage.getItem("lang")
        ? localStorage.getItem("lang")
        : "中文",
      show: false,
      tabIndex: 0,
      tabs: [
        { key: "home", value: this.$t("title.home") },
        { key: "case", value: this.$t("title.case") },
        { key: "price", value: this.$t("title.price") },
        { key: "download", value: this.$t("title.download") },
        { key: "help", value: this.$t("title.help") },
        { key: "contact", value: this.$t("title.contact") },
      ],
      language: [
        { key: "zh", value: this.$t("lang.chinese") },
        { key: "en", value: this.$t("lang.english") },
        { key: "de", value: this.$t("lang.deutsch") },
        { key: "fr", value: this.$t("lang.français") },
        { key: "es", value: this.$t("lang.español") },
      ],
    };
  },
  created() {
    document.addEventListener("click", (e) => {
      let list = document.getElementById("box");
      if (list.contains(e.target)) {
        console.log("在内");
      } else {
        this.show = false;
      }
    });
    if (localStorage.getItem("lang") == "zh") {
      this.lang = this.$t("lang.chinese");
    }
    if (localStorage.getItem("lang") == "en") {
      this.lang = this.$t("lang.english");
    }
    if (localStorage.getItem("lang") == "de") {
      this.lang = this.$t("lang.deutsch");
    }
    if (localStorage.getItem("lang") == "fr") {
      this.lang = this.$t("lang.français");
    }
    if (localStorage.getItem("lang") == "es") {
      this.lang = this.$t("lang.español");
    }
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
      }
      if (this.$route.path == "/contact") {
        this.tabIndex = 5;
      }
  },
  watch: {
    tabIndex() {
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
      }
      if (this.$route.path == "/contact") {
        this.tabIndex = 5;
      }
    },
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
    langSelect(e) {
      localStorage.setItem("lang", e);
      this.$i18n.locale = e;
      console.log(this.$i18n.locale);
      this.show = false;
      location.reload();
      console.log(e);
    },
    goHome() {
      this.$router.push("/");
    },
  },
};
</script>
<style scoped>
.nav {
  width: 100%;
  height: 64px;
  background: #fff;
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
  cursor: pointer;
}
.logo img {
  position: absolute;
  top: -12px;
  left: 0;
  width: 40px;
}
.logo1 {
  position: absolute;
  top: -5px;
  left: 50px;
  font-size: 14px;
}
.logo2 {
  position: absolute;
  top: 14px;
  left: 50px;
  font-size: 14px;
}
.menu {
  width: 60%;
  height: 100%;
  float: left;
}
.menu .item {
  float: left;
  padding: 0 18px;
  /* line-height: 84px; */
  font-size: 16px;
  cursor: pointer;
}
.menu-active {
  font-weight: 700;
}
.lang {
  width: 200px;
  /* height: 84px;
  line-height: 84px; */
  float: left;
  cursor: pointer;
}
.arrow {
  display: inline-block;
  width: 16px;
  height: 14px;
  margin-left: 4px;
  background: url(../assets/img/arrow-little.png) no-repeat center/100%;
}
.langs {
  width: 110px;
  height: auto;
  box-shadow: 0 0 10px #bcb7b7;
  background: #fff;
  z-index: 100;
  margin-left: 78px;
  margin-top: 20px;
}
.langitem {
  list-style: none;
  text-align: center;
  line-height: 40px;
  padding: 0 20px;
}
</style>