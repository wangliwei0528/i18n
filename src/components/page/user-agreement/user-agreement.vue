<template>
  <div class="aggrement">
    <div class="main">
      <div class="title">{{ this.$t("agreement.title") }}</div>
      <div class="text">
        <div>{{ this.$t("agreement.line1") }}</div>
        <div>{{ this.$t("agreement.line2") }}</div>
        <div>{{ this.$t("agreement.line3") }}</div>
        <div>{{ this.$t("agreement.line4") }}</div>
        <div>{{ this.$t("agreement.line5") }}</div>
        <div>{{ this.$t("agreement.line6") }}</div>
        <div>{{ this.$t("agreement.line7") }}</div>
        <div>{{ this.$t("agreement.line8") }}</div>
        <div>{{ this.$t("agreement.line10") }}</div>
        <div>{{ this.$t("agreement.line11") }}</div>
        <div>{{ this.$t("agreement.line12") }}</div>
        <div>{{ this.$t("agreement.line13") }}</div>
        <div>{{ this.$t("agreement.line14") }}</div>
        <div>{{ this.$t("agreement.line15") }}</div>
        <div>{{ this.$t("agreement.line16") }}</div>
        <div>{{ this.$t("agreement.line17") }}</div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.aggrement {
  width: 100%;
  height: 960px;
  background: url(../../../assets/img/banner-bg.png) no-repeat top/100%;
  overflow: hidden;
  text-align: left;
  color:#414B64;
  font-size:16px;

}
.title {
  font-size: 24px;
  text-align: center;
  color: #255caa;
  line-height: 24px;
}
.main {
  width: 80%;
  height: 663px;
  padding: 30px 115px 0;
  background: rgba(255, 255, 255, 0.77);
  box-shadow: 0px 11px 18px 3px rgba(124, 134, 146, 0.38);
  border-radius: 89px;
  margin: 0 auto;
  margin-top: 200px;
}
.text,p {
  line-height:30px;
}
</style>