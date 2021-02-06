<template>
  <div>
    <el-dialog :title="$t('model.title')" :visible.sync="dialogFormVisible">
      <el-form :model="form" ref="ruleForm">
        <el-form-item :label="$t('model.email')" :label-width="formLabelWidth">
          <el-input
            v-model="form.email"
            autocomplete="off"
            :placeholder="$t('model.placeholder')"
          ></el-input>
        </el-form-item>
        <el-form-item
          :label="$t('model.useType')"
          :label-width="formLabelWidth"
        >
          <el-radio-group>
            <div
              class="radioBox"
              :class="{ active: tabIndex == 0 }"
              @click="select(0, 6)"
            >
              {{ $t("model.6_months") }}
            </div>
            <div
              class="radioBox"
              :class="{ active: tabIndex == 1 }"
              @click="select(1, 12)"
            >
              {{ $t("model.12_months") }}
            </div>
          </el-radio-group>
        </el-form-item>
        <el-form-item :label="$t('model.number')" :label-width="formLabelWidth">
          <el-input-number
            v-model="num"
            controls-position="right"
            @change="handleChange"
            :min="1"
          ></el-input-number>
        </el-form-item>
        <el-form-item :label="$t('model.amount')" :label-width="formLabelWidth">
          <span style="color: #efa573;">{{ icon }} {{ form.buyAmount }}</span>
        </el-form-item>
        <el-form-item
          :label="$t('model.methods')"
          :label-width="formLabelWidth"
        >
          <el-radio-group v-model="form.payWay">
            <div
              class="radioBox radioBoxpic"
              :class="{ activepic: payIndex == 0 }"
              @click="selectPay(0, alipay)"
            >
              <img src="../assets/img/alipay.30ba76fc.png" alt="" />
            </div>
            <div
              class="radioBox radioBoxpic"
              :class="{ active: payIndex == 1 }"
              @click="selectPay(1, paypal)"
            >
              <img
                src="../assets/img/paypal.73f85087.svg"
                alt=""
                style="width: 80px"
              />
            </div>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submit()">{{
          $t("model.pay")
        }}</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  props: ["show", "amout"],
  data() {
    return {
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
    select(e, v) {
      this.price = v;
      this.tabIndex = e == 0 ? 0 : 1;
      this.form.useType = e == 0 ? 0 : 1;
      this.form.buyAmount = this.alipay * v * this.num;
      this.form.buyAmount = this.price * this.type * this.num;
    },
    handleChange(value) {
      console.log(value);
      this.num = value;
      this.form.buyAmount = this.price * this.type * this.num;
    },
    selectPay(e, v) {
      this.type = v;
      this.payIndex = e == 0 ? 0 : 1;
      this.form.payWay = e == 0 ? 0 : 1;
      this.form.buyAmount = v * this.price * this.num;
      this.form.buyAmount = this.price * this.type * this.num;
      this.icon = "$";
    },
    submit() {
      this.$axios
        .post("http://www.fingerprintguarder.com/manager/finger/pay/newOrder", {
          email: String(this.form.email),
          payWay: String(this.form.payWay), //支付方式   0：支付宝  1：paypal
          useType: String(this.form.useType), //0：半年 1：一年  2 ：临时无需支付，有效期一天
          buyAmount: this.form.buyAmount, //购买数量 ，使用期限为临时则只允许购买一个
        })
        .then((response) => {
          if (response.data.code == "0") {
            window.open(response.data.data);
            this.dialogFormVisible = false;
          } else {
            this.$message.error(response.data.msg);
          }
        });
    },
  },
};
</script>
<style>
.el-form-item__content {
  text-align: left;
}
.el-dialog__header {
  padding: 20px 20px 10px;
  text-align: left;
}
.radioBox {
  font-size: 16px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  width: 80px;
  border: 1px solid #d2d2d2;
  float: left;
  margin-right: 20px;
  /* border-radius: 4px; */
  cursor: pointer;
  position: relative;
}
.active {
  color: #3252ed;
  border: 2px solid #3252ed;
}
.activepic {
  border: 2px solid #3252ed;
}
.activepic img {
  width: 100%;
  /* height:100%; */
  vertical-align: middle;
}
.radioBoxpic {
  padding: 3px 10px;
  height: 30px;
}
.radioBox.active::after {
  content: "✔";
  display: block;
  height: 0px;
  width: 0px;
  position: absolute;
  bottom: -1px;
  right: -1px;
  color: #fff;
  font-size: 10px;
  line-height: 9px;
  border: 9px solid;
  border-color: transparent #3252ed #3252ed transparent;
}
</style>