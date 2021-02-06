<template>
  <div class="case-center" :style="Height">
    <div class="title">{{ this.$t("title.case") }}</div>
    <div class="main">
      <div class="case-item">
        <div class="case-img">
          <img src="../../../assets/img/ans.png" alt="" />
        </div>
        <div class="case-title">{{ this.$t("case.case-title1") }}</div>
        <div class="case-desc">{{ this.$t("case.case-desc1") }}</div>
      </div>
      <div class="case-item">
        <div class="case-img">
          <img src="../../../assets/img/adv.png" alt="" />
        </div>
        <div class="case-title">{{ this.$t("case.case-title2") }}</div>
        <div class="case-desc">{{ this.$t("case.case-desc2") }}</div>
      </div>
      <div class="case-item">
        <div class="case-img">
          <img src="../../../assets/img/yingxiao.png" alt="" />
        </div>
        <div class="case-title">{{ this.$t("case.case-title3") }}</div>
        <div class="case-desc">{{ this.$t("case.case-desc3") }}</div>
      </div>
      <div class="case-item">
        <div class="case-img">
          <img src="../../../assets/img/pachong.png" alt="" />
        </div>
        <div class="case-title">{{ this.$t("case.case-title4") }}</div>
        <div class="case-desc">{{ this.$t("case.case-desc4") }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  created() {
    let height = window.innerHeight;
    this.Height = "height:" + (height - 64) + "px;";
  },
};
</script>
<style scoped>
.case-center {
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
  height: 370px;
  padding: 80px 78px 0;
  background: rgba(255, 255, 255, 0.77);
  box-shadow: 0px 11px 18px 3px rgba(124, 134, 146, 0.38);
  border-radius: 50px;
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
}

.case-item {
  float: left;
  width: 284px;
  height: 100%;
  text-align: center;
}
.case-img {
  margin: 0 auto;
  width: 180px;
  height: 120px;
}
.case-img img {
  width: 100%;
  height: 100%;
}
.case-title {
  font-size: 20px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: #245caa;
  line-height: 68px;
  -webkit-text-stroke: 1px #235ba9;
  text-stroke: 1px #235ba9;
}
.case-desc {
  text-align: left;
  font-size: 16px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: #245caa;
  line-height: 28px;
}
</style>