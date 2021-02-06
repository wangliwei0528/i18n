<template>
  <div class="contact" :style="Height">
    <div class="title">{{ this.$t("title.contact") }}</div>
    <div class="main">
     <p>{{ this.$t("contact.contact1") }}</p>
     <p>{{ this.$t("contact.contact2") }}</p>
     <p>{{ this.$t("contact.contact3") }}</p>
     <p>{{ this.$t("contact.contact4") }}</p>
     <p>{{ this.$t("contact.contact5") }}</p>
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
.contact {
  width: 100%;
  background: url(../../../assets/img/banner-bg.png) no-repeat top/100%;
  overflow: hidden;
  text-align: center;
  font-size: 16px;
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
  height: 310px;
  padding:63px  0;
  background: rgba(255, 255, 255, 0.77);
  box-shadow: 0px 11px 18px 3px rgba(124, 134, 146, 0.38);
  border-radius: 50px;
  margin: 0 auto;
  margin-top: 50px;
}
</style>