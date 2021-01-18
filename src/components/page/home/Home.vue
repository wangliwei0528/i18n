<template>
  <div>
    <div class="home-banner">
      <div class="text1">{{ $t("home.text1") }}</div>
      <div class="text2">{{ $t("home.text2") }}</div>
      <div class="btns">
        <div class="btn-left">{{ $t("home.btn-left") }}</div>
        <div class="btn-right">{{ $t("home.btn-right") }}</div>
      </div>
      <div class="drop">{{ $t("home.drop") }}</div>
      <div class="arrow"></div>
    </div>
    <div class="part-one">
      <div class="title1">{{ $t("home.title1") }}</div>
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
    <div class="part-two">
      <div class="part-two-title">{{ $t("home.title2") }}</div>
      <div class="main-box">
        <div>
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
        <div>
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
    </div>
    <div class="part-three">
       <div class="btns">
        <div class="btn-left">{{ $t("home.btn-left") }}</div>
        <div class="btn-right">{{ $t("home.btn-right") }}</div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.home-banner {
  width: 100%;
  height: 960px;
  background: url(../../../assets/img/banner-bg.png) no-repeat top/100%;
  overflow: hidden;
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
}
.btns {
  width: 900px;
  height: 95px;
  margin: 0 auto;
  /* margin-top: 200px; */
  margin-top: 320px;
}
.btn-left {
  float: left;
}
.btn-right {
  float: right;
}
.btn-left,
.btn-right {
  width: 306px;
  height: 95px;
  background: #78cbe2;
  box-shadow: 0px 11px 18px 3px rgba(124, 134, 146, 0.38);
  border-radius: 38px;
  font-weight: normal;
  color: #ffffff;
  line-height: 95px;
  font-size: 24px;
  cursor: pointer;
}
.drop {
  width: auto;
  height: 18px;
  margin: 0 auto;
  margin-top: 130px;
  font-size: 14px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: #3768b1;
  line-height: 50px;
}
.arrow {
  width: 47px;
  height: 33px;
  margin: 0 auto;
  margin-top: 16px;
  background: url(../../../assets/img/arrow.png) no-repeat top/100%;
}
.part-one {
  width: 100%;
  height: 1080px;
  background: url(../../../assets/img/main-bg.png) no-repeat center/100%;
}
.title1 {
  margin: 0 auto;
  font-size: 45px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: #3c6cb4;
}
.left {
  float: left;
  margin-top: 30px;
  margin-left: 212px;
}
.right {
  float: right;
  margin-top: 30px;
  margin-right: 212px;
}
.item {
  width: 316px;
  height: 162px;
  background: #f1f5fb;
  box-shadow: 0px 11px 20px 4px rgba(77, 132, 196, 0.2);
  border-radius: 30px;
  margin-bottom: 97px;
  text-align: center;
  padding: 33px;
}
.item-title1 {
  font-size: 26px;
  font-family: Adobe Heiti Std;
  font-weight: 700;
  color: #3c6cb4;
  text-align: center;
}
.item-title2 {
  text-align: left;
  margin-top: 24px;
  font-size: 22px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: #404040;
  line-height: 36px;
}
.part-two {
  width: 100%;
  height: 1070px;
  background:#f2f5fa;
  overflow: hidden;
}
.part-two-title {
  margin: 0 auto;
  font-size: 45px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: #3c6cb4;
  margin-top: 54px;
}
.main-box {
  width: 1210px;
  height: 100%;
  margin: 0 auto;
  margin-top: 100px;
}
.main-box .item {
  float: left;
  width: 280px;
  height: 276px;
  background: #ffffff;
  border-radius: 25px;
  padding: 33px;
}
.main-box .item img {
  width: 228px;
  height: 152px;
}
.main-box .item p {
  text-align: center;
  font-size: 34px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: #2a5187;
  line-height: 95px;
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
}
.part-three .btns{
  margin-top:108px;
}
</style>