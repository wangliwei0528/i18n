<template>
  <div class="download" :style="Height">
    <div class="title">{{ this.$t("title.download") }}</div>
    <div class="main">
      <div class="top">
        <div class="red"></div>
        <div class="yellow"></div>
        <div class="green"></div>
        <div class="rect">
          <img src="../../../assets/img/rect.png" alt="" />
        </div>
      </div>
      <div class="main-box">
        <div class="left">
          <div class="icon">
            <img src="../../../assets/img/chrome.png" alt="" />
          </div>
          <div class="desc">Google Chrome</div>
          <div class="down-left-btn" @click="download(0)">
            {{ this.$t("download.download1") }}
          </div>
        </div>
        <div class="right">
          <div class="icon">
            <img src="../../../assets/img/firefox.png" alt="" />
          </div>
          <div class="desc">Firefox Browser</div>
          <div class="down-left-btn" @click="download(1)">
            {{ this.$t("download.download2") }}
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
      verson: 0, //0 谷歌  1火狐
    };
  },
  created() {
     let height = window.innerHeight;
    this.Height = "height:" + (height - 64) + "px;";

    if (navigator.userAgent.indexOf("Firefox") > -1) {
      this.verson = 1;
    }
    if (navigator.userAgent.indexOf("Chrome") > -1) {
      this.verson = 0;
    }
    console.log(this.verson);
  },
  methods: {
    download(e) {
      // window.location.url=`http://www.fingerprintguarder.com/manager/finger/pay/download/${e}`;
      window.open(`http://www.fingerprintguarder.com/manager/finger/pay/download/${e}`)
      // this.$t("message.greeting");
     
    },
  },
};
</script>
<style scoped>
.download {
  width: 100%;
  background: url(../../../assets/img/banner-bg.png) no-repeat top/100%;
  overflow: hidden;
}
.title {
  font-size: 48px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: #ffffff;
  line-height: 40px;
  text-align: left;
  margin-top: 80px;
  margin-left: 280px;
}

.main {
  width: 80%;
  height: 445px;
  margin: 0 auto;
  margin-top: 50px;
}
.main-box {
  width: 100%;
  height: 360px;
  background: rgba(255, 255, 255, 0.77);
}
.top {
  width: 100%;
  height: 45px;
  -webkit-border-top-left-radius: 89px;
  -webkit-border-top-right-radius: 89px;
  background: #fff;
  position: relative;
}
.rect {
  width: 702px;
  height: 23px;
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translate(-50%);
}
.red,
.yellow,
.green {
  width: 23px;
  height: 23px;
  position: absolute;
  top: 10px;
}
.red {
  left: 80px;
  background: url(../../../assets/img/red.png);
}
.yellow {
  left: 110px;
  background: url(../../../assets/img/yellow.png);
}
.green {
  left: 145px;
  background: url(../../../assets/img/green.png);
}
.left,
.right {
  float: left;
  width: 50%;
  height: 100%;
}
.icon {
  width: 80px;
  height: 80px;
  margin: 0 auto;
  margin-top: 50px;
}
.desc {
  font-size: 24px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: #929292;
  line-height: 95px;
}
.down-left-btn {
  width: 318px;
  height: 64px;
  background: #78cbe2;
  box-shadow: 0px 11px 18px 3px rgba(124, 134, 146, 0.38);
  border-radius: 32px;
  text-align: center;
  color: #fff;
  line-height: 64px;
  margin: 20px auto;
  cursor: pointer;
  font-size: 20px;
}
</style>