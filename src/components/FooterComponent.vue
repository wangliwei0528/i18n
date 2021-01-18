<template>
  <div class="footer">
    <div class="links">
      <div id="movetop" class="bd">{{ $t("home.link") }}</div>
      <div class="link">
        <img src="../assets/img/link.png" alt="" />
      </div>
      <div style="clear: both"></div>
    </div>
    <div class="footer-bg">
      <div class="line"></div>
      <div class="footer-content">
        <div class="footer-content-item">
          <div class="footer-title1">导航</div>
          <ul>
            <li v-for="n in tabs"
              :key="n.key"
              @click="handleSelect(n.key)">{{ n.value }}</li>
          </ul>
        </div>
        <div class="footer-content-item">
          <div class="footer-title2">法律声明</div>
          <p class="sub-title">用户协议</p>
        </div>
        <div class="footer-content-item">
          <div class="footer-title3">联系我们</div>
          <p class="sub-title">
            商务合作：business@fingerprintguarder.com
            <br />投诉建议：suggestion@fingerprintguarder.com<br />
            客户服务：service@fingerprintguarder.com
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      tabs : [
        { key: "home", value: this.$t("title.home") },
        { key: "case", value: this.$t("title.case") },
        { key: "price", value: this.$t("title.price") },
        { key: "download", value: this.$t("title.download") },
        { key: "help", value: this.$t("title.help") },
        { key: "contact", value: this.$t("title.contact") },
      ]
    }
  },
  methods:{
    handleSelect(e) {
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
  }
}
</script>
<style scoped>
.pc {
  padding: 2% 16%;
}
.links {
  position: relative;
  display: flex;
  align-items: center;
  padding: 15px 0;
}
.links .bd {
  float: left;
  font-size: 20px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: #000000;
  line-height: 95px;
  margin-left: 45px;
}
.link {
  float: left;
  width: 980px;
  height: 173px;
  /* background: url(); */
  margin-left: 30px;
  cursor: pointer;
}
.link img {
  margin-left: 30px;
  width: 980px;
  height: 173px;
  margin-top:68px;
}
.footer-bg {
  width: 100%;
  height: 363px;
  background: url(../assets/img/footer-bg.png);
  /* margin-top: -80px; */
  overflow: hidden;
}
.line {
  width: 90%;
  height: 5px;
  margin: 0 auto;
  margin-top: 100px;
  background: url(../assets/img/line.png);
}
.footer-content {
  width: 1000px;
  height: 300px;
  margin: 0 auto;
  margin-top: 30px;
  display: flex;
}
.footer-content-item {
  text-align: left;
  width: 33%;
  height: 100%;
  justify-content: space-around;
}
.footer-title1,
.footer-title2,
.footer-title3 {
  font-size: 20px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: #255caa;
}
.sub-title {
  font-size: 14px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: #262626;
  cursor: pointer;
}
.footer-content-item li{
  list-style: none;
  font-size: 14px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: #262626;
  cursor: pointer;
  margin-left:-42px;
}
</style>