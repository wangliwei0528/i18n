<template>
  <div class="aggrement">
    <div class="main">
      <div class="text">
        <div class="circle">
          <img src="../../../assets/img/success.png" alt="" />
        </div>
        <div class="success">{{ this.$t("success.success") }}</div>
        <p>{{ this.$t("success.orderNumber") }} 121212121211</p>
        <p>{{ this.$t("success.time") }} 121212111111</p>
        <p>{{ this.$t("success.code") }}</p>
        <p>{{ this.$t("success.kefu") }}</p>
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
  color: #414b64;
  font-size: 16px;
  color:#255CAA;
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
.circle {
  width: 180px;
  height: 180px;
  margin: 30px auto;
}
.success {
  font-size: 48px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: #255caa;
  line-height: 147px;
}
</style>