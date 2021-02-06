<template>
  <div>
    <div class="home-banner" :style="Height">
      <div class="text1">{{ $t("home.text1") }}</div>
      <div class="text2">{{ $t("home.text2") }}</div>
      <div class="btns">
        <div class="btn-left" @click="buy()">{{ $t("home.btn-left") }}</div>
        <div class="btn-right" @click="down()">{{ $t("home.btn-right") }}</div>
      </div>
      <div class="bounce">
        <div class="drop">{{ $t("home.drop") }}</div>
        <div class="arrow"></div>
      </div>
    </div>
    <div class="part-one" :style="Height">
      <div class="title1">{{ $t("home.title1") }}</div>
      <div class="bg" :style="bgHeight">
        <div class="left">
          <div class="item">
            <div class="item-title1">{{ $t("home.item1") }}</div>
            <div class="item-title2">{{ $t("home.desc1") }}</div>
          </div>
          <div class="item">
            <div class="item-title1">{{ $t("home.item2") }}</div>
            <div class="item-title2">{{ $t("home.desc2") }}</div>
          </div>
          <div class="item">
            <div class="item-title1">{{ $t("home.item3") }}</div>
            <div class="item-title2">{{ $t("home.desc3") }}</div>
          </div>
        </div>
        <div class="right">
          <div class="item">
            <div class="item-title1">{{ $t("home.item4") }}</div>
            <div class="item-title2">{{ $t("home.desc4") }}</div>
          </div>
          <div class="item">
            <div class="item-title1">{{ $t("home.item5") }}</div>
            <div class="item-title2">{{ $t("home.desc5") }}</div>
          </div>
          <div class="item">
            <div class="item-title1">{{ $t("home.item6") }}</div>
            <div class="item-title2">{{ $t("home.desc6") }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="part-two" :style="Height">
      <div class="part-two-title">{{ $t("home.title2") }}</div>
      <div class="main-box">
        <div class="item">
          <img src="../../../assets/img/product1.png" alt="" />
          <p>{{ $t("home.item1") }}</p>
        </div>
        <div class="item">
          <img src="../../../assets/img/product2.png" alt="" />
          <p>{{ $t("home.item2") }}</p>
        </div>
        <div class="item">
          <img src="../../../assets/img/product3.png" alt="" />
          <p>{{ $t("home.item3") }}</p>
        </div>
      </div>
      <div class="main-box">
        <div class="item">
          <img src="../../../assets/img/product4.png" alt="" />
          <p>{{ $t("home.item4") }}</p>
        </div>
        <div class="item">
          <img src="../../../assets/img/product5.png" alt="" />
          <p>{{ $t("home.item5") }}</p>
        </div>
        <div class="item">
          <img src="../../../assets/img/product6.png" alt="" />
          <p>{{ $t("home.item6") }}</p>
        </div>
      </div>
    </div>
    <div class="part-three">
      <div class="btns three-btn">
        <div class="btn-left" @click="buy()">{{ $t("home.btn-left") }}</div>
        <div class="btn-right" @click="down()">{{ $t("home.btn-right") }}</div>
      </div>
    </div>
    <ModelComponent ref="model"></ModelComponent>
  </div>
</template>
<script>
import ModelComponent from "../../model.vue";
export default {
  components: { ModelComponent },
  data() {
    return {
      dialogFormVisible: false,
    };
  },
  created() {
    let height = window.innerHeight;
    this.Height = "height:" + (height - 64) + "px;";
    this.bgHeight = "height:" + (height - 64 - 60) + "px;";
  },
  methods: {
    down() {
      this.$router.push("/download");
    },
    buy() {
      this.$router.push("/price");
      // this.$refs.model.dialogFormVisible = true;
    },
  },
};
</script>
<style scoped>
.home-banner {
  width: 100%;
  background: url(../../../assets/img/banner-bg.png) no-repeat top/100%;

  /* background-attachment: fixed; */
  background-size: cover;
  -webkit-background-size: cover; /* 兼容Webkit内核浏览器如Chrome和Safari */
  -o-background-size: cover; /* 兼容Opera */
  zoom: 1;
  overflow: hidden;
  position: relative;
}
.text1 {
  margin-top: 180px;
  margin-left: 168px;
  font-size: 40px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: #ffffff;
  line-height: 62px;
  text-align: left;
}
.text2 {
  margin-top: 13px;
  margin-left: 168px;
  font-size: 50px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: #ffffff;
  line-height: 62px;
  text-align: left;
  width: 800px;
}
.btns {
  width: 690px;
  height: 95px;
  margin: 0 auto;
  position: absolute;
  left: 50%;
  top:500px;
  /* bottom: 80px; */
  transform: translate(-50%);
}
.btn-left {
  float: left;
}
.btn-right {
  float: right;
}
.btn-left,
.btn-right {
  width: 207px;
  height: 64px;
  background: #78cbe2;
  box-shadow: 0px 11px 18px 3px rgba(124, 134, 146, 0.38);
  border-radius: 32px;
  color: #fff;
  line-height: 64px;
  font-size: 20px;
  cursor: pointer;
}
.drop {
  width: 200px;
  height: 18px;
  margin: 0 auto;
  font-size: 14px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: #3768b1;
  line-height: 50px;
}
.arrow {
  width: 30px;
  height: 33px;
  margin: 0 auto;
  margin-top: 16px;
  background: url(../../../assets/img/arrow.png) no-repeat top/100%;
}
.part-one {
  width: 100%;
  /* background: url(../../../assets/img/main-bg.png) no-repeat center/100%; */
}
.part-one .bg {
  width: 100%;
  background: url(../../../assets/img/main-bg.png) no-repeat center/100%;
  background-size: contain;
}
.title1 {
  margin: 0 auto;
  font-size: 32px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: #3c6cb4;
}
.left {
  float: left;
  margin-top: 30px;
  margin-left: 250px;
}
.right {
  float: right;
  margin-top: 30px;
  margin-right: 250px;
}
.item {
  width: 240px;
  height: 145px;
  padding: 15px 10px;
  text-align: center;
  box-sizing: border-box;
  background: #f1f5fb;
  box-shadow: 0px 11px 20px 4px rgba(77, 132, 196, 0.2);
  border-radius: 20px;
  margin-bottom: 40px;
}
.item-title1 {
  font-size: 16px;
  font-family: Adobe Heiti Std;
  font-weight: 700;
  color: #3c6cb4;
  text-align: center;
}
.item-title2 {
  text-align: center;
  font-size: 12px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: #404040;
  line-height: 18px;
  margin-top: 20px;
}
.part-two {
  width: 100%;
  height: 1070px;
  background: #f2f5fa;
  overflow: hidden;
}
.part-two-title {
  margin: 0 auto;
  font-size: 32px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: #3c6cb4;
  margin-top: 50px;
  overflow: hidden;
}
.main-box {
  width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 30px;
}

.main-box .item {
  width: 240px;
  height: 200px;
  background: #ffffff;
  border-radius: 10px;
}
.main-box .item img {
  width: 120px;
  margin-top: 10px;
}
.main-box .item p {
  text-align: center;
  font-size: 20px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: #2a5187;
  line-height: 20px;
}
.main-box .item:nth-child(2),
.main-box .item:nth-child(4) {
  margin-left: 86px;
  margin-right: 86px;
}
.part-three {
  width: 100%;
  height: 320px;
  background: url(../../../assets/img/banner.png) no-repeat top/100%;
  overflow: hidden;
  position: relative;
}
/* .part-three .btns {
  margin-top: 108px;
} */
@keyframes myfirst {
  0% {
    transform: translate(0px, 0px);
  }
  50% {
    transform: translate(0px, -10px);
  }
  100% {
    transform: translate(0px, 0px);
  }
}
.bounce {
  width: 200px;
  /* height: 50px; */
  /* margin: 0 auto; */
  /* margin-top: 220px; */
  /* -webkit-animation: myfirst-data-v-0db5f4a5 2s infinite; */
  animation: myfirst 2s infinite;
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translateX(-100px);
  margin-left: -100px;
}
.three-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>