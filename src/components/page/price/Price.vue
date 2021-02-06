<template>
  <div class="price" :style="Height">
    <div class="title">{{ this.$t("title.price") }}</div>
    <div class="main">
      <div class="left">
        <div class="price-title">{{ this.$t("price.title1") }}</div>
        <div class="price-item">
          <div class="circle"></div>
          <div class="price-desc">{{ this.$t("price.desc1") }}</div>
        </div>
        <div class="price-item">
          <div class="circle"></div>
          <div class="price-desc">{{ this.$t("price.desc2") }}</div>
        </div>
        <div class="price-item">
          <div class="circle"></div>
          <div class="price-desc">{{ this.$t("price.desc3") }}</div>
        </div>
        <div class="price-item">
          <div class="circle"></div>
          <div class="price-desc">{{ this.$t("price.desc4") }}</div>
        </div>
        <div class="left-btn" @click="buy()">
          {{ this.$t("price.left-btn") }}
        </div>
      </div>
      <div class="right">
        <div class="price-title">{{ this.$t("price.title2") }}</div>
        <div class="price-item">
          <div class="circle"></div>
          <div class="price-desc">{{ this.$t("price.desc5") }}</div>
        </div>
        <div class="price-item">
          <div class="circle"></div>
          <div class="price-desc">{{ this.$t("price.desc6") }}</div>
        </div>
        <div class="left-btn" @click="contact()">
          {{ this.$t("price.right-btn") }}
        </div>
      </div>
    </div>
  
    <ModelComponent ref="model" ></ModelComponent>
  </div>
</template>
<script>
import ModelComponent from "../../model.vue";
export default {
  components: { ModelComponent },
  data() {
    return {
      amout: {},
      tabIndex: 0,
      payIndex: 0,
      buyAmount: null,
      dialogFormVisible: false,
      form: {
        email: "",
        payWay: "0",
        useType: "0",
        buyAmount: "",
      },
      formLabelWidth: "120px",
      type: 2,
      price: 6,
      icon: "￥",
      num: 1,
    };
  },
  created() {
    let height = window.innerHeight;
    this.Height = "height:" + (height - 64) + "px;";
    this.$axios
      .get(
        `http://www.fingerprintguarder.com/manager/finger/pay/appMonthPriceList`
      )
      .then((response) => {
        if (response.data.code == "0") {
          this.alipay = response.data.data["0"];
          this.paypal = response.data.data["1"];
          console.log(this.alipay, this.paypal);
          this.form.buyAmount = this.alipay * 6;
          this.type = response.data.data["0"];
        }
      });
  },
  methods: {
    buy() {
      this.$refs.model.dialogFormVisible = true;
    },
    contact() {
      this.$router.push("/contact");
      window.location.reload();
    },
  }
};
</script>
<style scoped>
.price {
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
  height: 485px;
  margin: 0 auto;
  margin-top: 50px;
}
.left,
.right {
  width: 40%;
  height: 448px;
  background: rgba(252, 253, 254, 0.8);
  box-shadow: 0px 11px 18px 3px rgba(124, 134, 146, 0.38);
  border-radius: 38px;
  position: relative;
  padding: 0 52px;
}
.left {
  float: left;
}
.right {
  float: right;
}
.price-title {
  font-size: 32px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: #255caa;
  line-height: 96px;
}
.price-item {
  width: 100%;
  height: 40px;
  text-align: left;
  padding: 0 20px;
  position: relative;
}
.circle {
  width: 15px;
  height: 15px;
  background: #255caa;
  border-radius: 50%;
  position: absolute;
  top: 5px;
  left: 0;
}
.price-desc {
  width: 460px;
  /* height: 40px; */
  /* margin-left: 50px; */
  /* line-height: 40px; */
}
.left-btn {
  width: 207px;
  height: 64px;
  background: #78cbe2;
  box-shadow: 0px 11px 18px 3px rgba(124, 134, 146, 0.38);
  border-radius: 32px;
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translate(-50%);
  color: #fff;
  line-height: 64px;
  font-size: 20px;
  cursor: pointer;
  padding: 0 15px;
}
</style>