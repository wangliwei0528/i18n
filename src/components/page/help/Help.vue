<template>
  <div class="help" :style="Height">
      <div class="title">{{ this.$t("title.help") }}</div>
    <div class="main">
      <div class="help-title">{{this.$t("help.title")}}</div>
      <div class="step">{{this.$t("help.step")}}：</div>
      <div class="steps">1、{{this.$t("help.step1")}}</div>
      <div class="steps">2、{{this.$t("help.step2")}}</div>
      <div class="steps">3、{{this.$t("help.step3")}}</div>
      <div class="steps">4、{{this.$t("help.step4")}}</div>
      <div class="steps">5、{{this.$t("help.step5")}}</div>
      <div class="steps">6、{{this.$t("help.step6")}}</div>
    </div>
  </div>
</template>
<script>
export default {
  created() {
    let height = window.innerHeight;
    this.Height = "height:" + (height - 64) + "px;";
  },
}
</script>
<style scoped>
.help {
  width: 100%;
  background: url(../../../assets/img/banner-bg.png) no-repeat top/100%;
  overflow: hidden;
  font-size:16px;
  text-align: left;
  line-height:30px;
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
  width: 75%;
  height: 400px;
  padding:63px 102px 0;
  background: rgba(255, 255, 255, 0.77);
  box-shadow: 0px 11px 18px 3px rgba(124, 134, 146, 0.38);
  border-radius: 50px;
  margin:0 auto;
  margin-top:50px;
}
.step{
  margin-top:30px;
}
</style>