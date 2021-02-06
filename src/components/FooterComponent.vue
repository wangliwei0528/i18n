<template>
  <div class='footer-bg'>
    <footer class="pc">
      <div class="links">
        <div class="bd">友情链接:</div>
        <div id="imgtop" class="hd">
          <a
            href="https://www.ipidea.net/?utm-source=adspower&amp;utm-keyword=?adspower"
            target="_blank"
            title="Ipidea全球代理"
          >
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAAdCAYAAABotghBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkU0MDFDOUFEMTc0MDExRUE4MEZDRTE5OTlGODY4ODlFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkU0MDFDOUFFMTc0MDExRUE4MEZDRTE5OTlGODY4ODlFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RTQwMUM5QUIxNzQwMTFFQTgwRkNFMTk5OUY4Njg4OUUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RTQwMUM5QUMxNzQwMTFFQTgwRkNFMTk5OUY4Njg4OUUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5RpD4RAAAFZUlEQVR42uxaW4wTVRieWcsqLoHURELWeKEbfdrgZdGoIRKS7gMa0AeHF2O8PHT1wdvL1usTAdv1xRgf2IYo8mAIdaOBYNTWBzE+sJGAuBpvmQSNxOBCEcWgy1K+X/6uZ3/OmZ6ZbbftZv7k6+nMnPnP9Hz/+S+n4y46cqzPcZy3gHucS+UM4AEHgP3AEidYJoFx4AOgNLWqt6rrVK1WnVhaIy59gPRb0Bwy9PkCxK1Bn9fx/ZkQuo8AL+PevTHh7SNd9AFSDqP5x9Dndm6/Cql7FbAHhrIDWBxPdRsRznLW0KcbhF1JCzPiGI8A+1hHLG1EeJB0c/sL8Aqv+h4gAfQCG4G3A4xmHfBOPN1tEsM5jp9Cs8zQL8kEn4D7N5FKOq5Dsx0YNK123L8zjuHtvcKngHMg6tca2dWJ4TuB14AdwFZggHOBn9Gs56xfJ1thFItCPF+JQ8l/cF3XqQGSVq9ZgHRl6ujIzmGM3fJ+HSA0V1mb57XQpdMzEHRPwmLSnwaRfzHR1L8APCb6vIBrb6B91u3vnQapGXxfya5clWvY/Y+1wLiJvDS8C03IUBP0U/nqQT+RsAljlDXVCc3LaAPHzBjODUVd4QdA9jZ1hWrInjEMIp5X+jSaJ4FpTb/7W+zVMjzxzRIKfyUyLEG210iyWV9KZ3i4loxK+JaZASaGr0bzXJ3+tNIXM+nfs5uTsrpJE/28axBcy4u+2UaOQeeBiuibU8hJasgmT9nnmmUwwuquGVwmCuHkxj9RjtdwVh4ktBN3h3L8nqbPynnPTF1XEpKSK3CO+smgNskQooyRYSJmyKawAvgRV3eKQ5RqPL6FMQQS/jVWqboZc7nl8/Qo37/UXL+iRa68olkJjTQqitllTd5Qi+9ydTcydheFzhS7/FCEHxPHP1o+zA/K99/aqCJJ1jGARogkPMXuXHoTP+oArE8l3GdjK9i4/K467lkV2muvt736uds/8lOADpJz8800JiknCK9gkg42YShJZMrgSU5W60spoBpISm+B31MRpKfZ9VsTPivWgsjznKGfNvSf1FjV9Zp+x5vEa840c5okLT9PYaMZkhXjFYRrD1zlQYTfhHr6BkE6rfINmr5kDPfh+nfi/HpN36Mtdu1lTrLmI2w02lOlRSlW5JWt5hG+KEFnPVO9rHuoVlsrpO/fNTF29G+ne0Xt3FLnrP9gvzeu9oOxkO5HNTq/aRHRPmfH+SaOIV0ohQ5fs5V8lUrUHJK1ensKtXiftyX8KRD3Jm2rqicfPn/XKeGujxse7kbN+U+bWIfnW+w90uL4oNIOiH7FCKWYF9FI8rYbL1Ri7ebVqsoZcfynWN23ohnR6KN9+ZKzAIVrbhPhxQZs/HhRvQ6HAivCSe7WZNub2UX+wWXYiEL2Wia1R6PrXXiLEwuQ7KzGkH1lP70gEroBysJDbvFKIxkK2Fk0lmgJ29FA5L1orgV2grSP0PaJ6/TX6DDwBHCZRgWFgZc6nNscl3hWIUZJpiq4j9xqTrh1Kp1GA5LLQTaojKasDNq8KYh4T/vrKconEiF+7HKA/kgZAbmfof0W+JfP3+b8/yqUTuhvVU/mAgtYKJ+Y5cYpv+DkLRdBnxemrKQ9BoxVFiGGdOQTEQZfyqXZBsv+VKrRiw/jC5zkChNRNm3qMOlFnnzPuXQHzlSKydzAJuErivuy0FUI88bLA87F15hs5CTtugG7gDGQPSV+hBNLayQhMu9lEfW8CrwPUEJ2GgRPxlPb/oT/7lx8ITGsfAiCX4ynsjOkS1MzmsT0p8d4PI2dSfi+oMTPMe+Bd8XT2JmEUwweZWIlHuKV/LFGx+NI+G6Op7Iz5IIAAwCaZjR2sKrkKwAAAABJRU5ErkJggg=="
            />
          </a>
          <a
            href="https://luminati-china.biz/integration/adspower?affiliate=ref_5ea81ac4c7669177ab3d2ed3&amp;cam=L_roshel"
            target="_blank"
            title="Luminati Proxy"
            style=""
          >
            <img src="../assets/img/luminati.615c0a58.svg" />
          </a>
          <a
            href="https://oxylabs.go2cloud.org/aff_c?offer_id=7&amp;aff_id=190 "
            target="_blank"
            title="oxylabs"
            style="
              border: 1px solid rgb(0, 77, 116);
              padding: 0px;
              background: rgb(255, 255, 255);
              overflow: hidden;
            "
            ><img
              src="../assets/img/oxylabs.1b3c691e.png"
              style="height: 30px" /></a
          ><a href="http://entermedia.cn/" target="_blank" title="Entermedia"
            ><img src="../assets/img/entermedia.b1f63d89.png" /></a
          ><a
            href="https://www.sellersprite.com/cn/"
            target="_blank"
            title="卖家精灵"
            style="height: 32px; padding: 0px 8px; overflow: hidden"
            ><img
              src="../assets/img/sellersprite.7187c2f0.png"
              style="height: 31px; width: 74px" /></a
          ><a
            href="http://www.bluefriday.cn/"
            target="_blank"
            title="Blue Friday"
            style="
              border: 1px solid rgb(0, 77, 116);
              padding: 2px 8px;
              background: rgb(255, 255, 255);
              overflow: hidden;
            "
            ><img
              src="../assets/img/lwlogo.a0014a84.jpg"
              style="height: 26px; width: 74px" /></a
          ><a
            href="https://shoplazza.com/"
            target="_blank"
            title="店匠"
            style="
              border: 1px solid rgb(0, 77, 116);
              padding: 4px 8px;
              background: rgb(255, 255, 255);
              overflow: hidden;
            "
            ><img
              src="data:image/jpeg;base64,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"
              style="height: 20px" /></a
          ><a
            href="https://www.cifnews.com/adspower"
            target="_blank"
            title="雨果网"
            style="
              border: 1px solid rgb(0, 77, 116);
              padding: 0px 10px;
              background: rgb(255, 255, 255);
              height: 32px;
              overflow: hidden;
            "
            ><img
              src="../assets/img/cifnews.b097ae6f.png"
              style="height: 30px" /></a
          ><a
            href="https://www.adeer.biz/en/?utm_source=website&amp;utm_medium=cpc&amp;utm_campaign=adspower"
            target="_blank"
            title="Adeer"
            style="
              height: 32px;
              border: 1px solid rgb(0, 77, 116);
              padding: 0px 10px;
              background: rgb(255, 255, 255);
              overflow: hidden;
            "
            ><img
              src="../assets/img/adeer.1ae69404.png"
              style="height: 29px" /></a
          ><a
            href="https://www.52by.com/author/896189"
            target="_blank"
            title="邦阅网"
            style="
              border: 1px solid rgb(0, 77, 116);
              padding: 0px 10px;
              background: rgb(255, 255, 255);
              overflow: hidden;
            "
            ><img src="../assets/img/by.d0624927.png" style="height: 30px" /></a
          ><a
            href="https://www.amz123.com"
            target="_blank"
            title="AMZ123"
            style="
              border: 1px solid rgb(0, 77, 116);
              padding: 0px 10px;
              background: rgb(255, 255, 255);
              overflow: hidden;
            "
            ><img
              src="../assets/img/amz123.6eb3a9a9.png"
              style="height: 30px" /></a
          ><a
            href="https://www.itaxs.com/?promteCode=27dm3u "
            target="_blank"
            title="跨税云"
            style="
              border: 1px solid rgb(0, 77, 116);
              padding: 0px 10px;
              background: rgb(255, 255, 255);
              overflow: hidden;
            "
            ><img
              src="../assets/img/kua.2cd2880f.png"
              style="height: 30px" /></a
          ><a
            href="http://ttdcollege.com/ourteam"
            target="_blank"
            title="通天地"
            style="
              border: 1px solid rgb(0, 77, 116);
              padding: 0px 10px;
              background: rgb(255, 255, 255);
              overflow: hidden;
            "
            ><img
              src="../assets/img/tong.5890367f.png"
              style="height: 30px" /></a
          ><a
            href="https://www.captainbi.com/?spread_code=0DK6"
            target="_blank"
            title="船长BI"
            style="
              border: 1px solid rgb(0, 77, 116);
              padding: 0px 10px;
              background: rgb(255, 255, 255);
              overflow: hidden;
            "
            ><img src="../assets/img/BI.9ed5fa80.png" style="height: 30px" /></a
          ><a
            href="https://www.jiyikj.com/?s=648841446769557505"
            target="_blank"
            title="吉易跨境电商学院"
            style="
              border: 1px solid rgb(0, 77, 116);
              padding: 0px 10px;
              background: rgb(255, 255, 255);
              overflow: hidden;
            "
            ><img src="../assets/img/jy.528a3920.png" style="height: 30px" /></a
          ><a
            href="https://www.touchdata.io"
            target="_blank"
            title="翼果科技"
            style="
              border: 1px solid rgb(0, 77, 116);
              padding: 0px 10px;
              background: rgb(255, 255, 255);
              overflow: hidden;
            "
            ><img
              src="../assets/img/touchData.8b014fff.png"
              style="height: 30px" /></a
          ><a
            href="https://www.selmuch.com/"
            target="_blank"
            title="亿数通"
            style="
              border: 1px solid rgb(0, 77, 116);
              padding: 0px 10px;
              background: rgb(255, 255, 255);
              overflow: hidden;
            "
            ><img
              src="../assets/img/yst.1e5c2d89.png"
              style="height: 30px" /></a
          ><a
            href="https://e-com.idvert.com/channel/49587/?productId=36&amp;inviteId=49587&amp;platType=1"
            target="_blank"
            title="广告数据"
            style="
              border: 1px solid rgb(0, 77, 116);
              padding: 0px;
              background: rgb(255, 255, 255);
              overflow: hidden;
            "
            ><img
              src="../assets/img/ggsh.72729aa1.png"
              style="height: 30px" /></a
          ><a
            href="http://www.dianshangwin.com/"
            target="_blank"
            title="赢商荟"
            style="
              border: 1px solid rgb(0, 77, 116);
              padding: 0px 10px;
              background: rgb(255, 255, 255);
              overflow: hidden;
            "
            ><img
              src="../assets/img/ysh.66515856.png"
              style="height: 30px" /></a
          ><a
            href="https://luban.bluemediagroup.cn/about/index?code=098bdfb9bd13c9d2d29044f6e890ff8e"
            target="_blank"
            title="鲁班跨境通"
            style="
              border: 1px solid rgb(0, 77, 116);
              padding: 0px;
              background: rgb(255, 255, 255);
              overflow: hidden;
            "
            ><img
              src="../assets/img/lbkjt.d51d598a.png"
              style="height: 32px" /></a
          ><a
            href="https://dny001.com/"
            target="_blank"
            title="东南亚卖家导航栏"
            style="
              border: 1px solid rgb(0, 77, 116);
              padding: 0px;
              background: rgb(255, 255, 255);
              overflow: hidden;
            "
            ><img
              src="../assets/img/dny.f7efe975.png"
              style="height: 32px" /></a
          ><a
            href="https://www.dianxiaomi.com/index.htm"
            target="_blank"
            title="店小秘"
            style="
              border: 1px solid rgb(0, 77, 116);
              padding: 0px 4px;
              background: rgb(255, 255, 255);
              overflow: hidden;
            "
            ><img
              src="../assets/img/dxm.0f76ce20.png"
              style="height: 32px" /></a
          ><a
            href="http://www.banmaerp.com?channel=XMQI31"
            target="_blank"
            title="斑马erp"
            style="
              border: 1px solid rgb(0, 77, 116);
              padding: 0px;
              background: rgb(255, 255, 255);
              overflow: hidden;
            "
            ><img src="../assets/img/bm.95bf8a98.png" style="height: 32px" /></a
          ><a
            href="https://www.shopyy.com/?invite-sucs"
            target="_blank"
            title="shopyy"
            style="
              border: 1px solid rgb(0, 77, 116);
              padding: 4px;
              background: rgb(255, 255, 255);
              overflow: hidden;
            "
            ><img
              src="../assets/img/shopyy.9e6c70ab.png"
              style="height: 24px" /></a
          ><a
            href="https://shoplineapp.cn/"
            target="_blank"
            title="SHOPLINE"
            style="
              border: 1px solid rgb(0, 77, 116);
              padding: 0px;
              background: rgb(255, 255, 255);
              overflow: hidden;
            "
            ><img
              src="data:image/png;base64,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"
              style="height: 33px" /></a
          ><a
            href="https://www.sellingexpress.net/"
            target="_blank"
            title="速易特"
            style="
              border: 1px solid rgb(0, 77, 116);
              padding: 0px;
              background: rgb(255, 255, 255);
              overflow: hidden;
            "
            ><img
              src="../assets/img/syt.89d4d94b.png"
              style="height: 33px" /></a
          ><a
            href="https://www.xunicard.com/880.html"
            target="_blank"
            title="虚拟卡"
            style="
              border: 1px solid rgb(0, 77, 116);
              padding: 0px;
              background: rgb(255, 255, 255);
              overflow: hidden;
            "
            ><img
              src="data:image/png;base64,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"
              style="height: 33px" /></a
          ><a
            href="https://www.irobotbox.com/"
            target="_blank"
            title="赛盒科技"
            style="
              border: 1px solid rgb(0, 77, 116);
              padding: 0px 10px;
              background: rgb(255, 255, 255);
              overflow: hidden;
            "
            ><img
              src="../assets/img/lrbotbox.1efe8780.png"
              style="height: 33px" /></a
          ><a
            href="https://adfly.vn/"
            target="_blank"
            title="Adfly"
            style="
              border: 1px solid rgb(0, 77, 116);
              padding: 0px;
              background: rgb(255, 255, 255);
              overflow: hidden;
            "
            ><img
              src="../assets/img/adfly.9863a4dc.png"
              style="height: 33px" /></a
          ><a
            href="https://bbs.ichuanglan.com/"
            target="_blank"
            title="创蓝论坛"
            style="
              border: 1px solid rgb(0, 77, 116);
              padding: 0px;
              background: rgb(255, 255, 255);
              overflow: hidden;
            "
            ><img
              src="../assets/img/chuanglan.9ce59a0b.png"
              style="height: 33px" /></a
          ><a
            href="http://www.iwayup.com/%e8%b7%a8%e5%a2%83%e7%94%b5%e5%95%86%e8%bf%87%e7%99%be%e8%b4%a6%e5%8f%b7%e6%93%8d%e4%bd%9c%e5%bf%85%e7%9c%8b%ef%bc%81%e5%a6%82%e4%bd%95%e9%80%89%e6%8b%a9%e4%b8%80%e6%ac%be%e5%ae%89%e5%85%a8%e7%a8%b3/"
            target="_blank"
            title="优乐出海"
            style="
              border: 1px solid rgb(0, 77, 116);
              padding: 0px 5px;
              background: 0% 0% / cover rgb(255, 255, 255);
              overflow: hidden;
            "
            ><img src="../assets/img/iwayup.231324f0.png" style="height: 33px"
          /></a>
        </div>
      </div>
      <div class="flex-wrap">
        <div class="box">
          <p class="min-p">{{ $t("footer.nav") }}</p>
          <p
            class="link-to"
            v-for="n in tabs"
            :key="n.key"
            @click="handleSelect(n.key)"
          >
            <a class="router router-link-active">{{ n.value }}</a>
          </p>
        </div>
        <div class="box">
          <p class="min-p">{{ $t("footer.legal") }}</p>
          <p class="link-to">
            <a @click="agreement" class="router">{{
              $t("footer.agreement")
            }}</a>
          </p>
        </div>
        <div class="box more-wid">
          <p class="min-p">{{ $t("footer.contact") }}</p>
          <p class="link-to" style="user-select: text !important">
            <span style="margin-right: 10px"
              >{{ $t("footer.cooperation") }}:</span
            >
            <span style="cursor: pointer; text-decoration: underline"
              >business@fingerprintguarder.com</span
            >
          </p>
          <p class="link-to" style="user-select: text !important">
            <span>{{ $t("footer.suggestions") }}: </span>
            <span style="cursor: pointer; text-decoration: underline"
              >suggestion@fingerprintguarder.com
            </span>
          </p>
          <p class="link-to" style="user-select: text !important">
            <span>{{ $t("footer.customer_service") }}: </span>
            <span style="cursor: pointer; text-decoration: underline"
              >service@fingerprintguarder.com</span
            >
          </p>
        </div>
        <div class="img-box">
          <div class="img-container">
            <div class="left-img">
              <img src="/img/code.fdba28f7.png" alt="" class="left-img" />
              <!-- <p>
              <span>微信:</span>
              <a id="wechatNumber" style="cursor: pointer; text-decoration: underline; margin-left: 6px; width: 100px;">adspowerkefu</a>
            </p> -->
            </div>
            <div class="right-img">
              <img src="/img/public.de15acb2.jpg" alt="" />
              <!-- <p>
              <span>公众号: </span>
              <a id="wechat" style=" cursor: pointer; text-decoration: underline; margin-left: 6px; ">AdsPower Official</a>
            </p> -->
            </div>
          </div>
        </div>
      </div>
      <div style="margin: 20px auto">
        <a class="">©2020 All Rrights Reserved.Fingerprint Guarder</a>
      </div>
    </footer>
  </div>

  <!-- <div class="footer">
    <div class="links">
      <div id="movetop" class="bd">{{ $t("home.link") }}</div>
      <div class="link">
        <img src="../assets/img/link.png" alt="" />
      </div>
      <div style="clear: both"></div>
    </div>
    <div class="footer-bg">
      <div class="line"></div>
      <div class="footer-content">
        <div class="footer-content-item">
          <div class="footer-title1">{{ $t("footer.nav") }}</div>
          <ul>
            <li v-for="n in tabs"
              :key="n.key"
              @click="handleSelect(n.key)">{{ n.value }}</li>
          </ul>
        </div>
        <div class="footer-content-item">
          <div class="footer-title2">{{ $t("footer.legal") }}</div>
          <p class="sub-title" @click="agreement">{{ $t("footer.agreement") }}</p>
        </div>
        <div class="footer-content-item">
          <div class="footer-title3">{{ $t("footer.contact") }}</div>
          <p class="sub-title">
            {{ $t("footer.cooperation") }}：business@fingerprintguarder.com
            <br />{{ $t("footer.suggestions") }}：suggestion@fingerprintguarder.com<br />
            {{ $t("footer.customer_service") }}：service@fingerprintguarder.com
          </p>
        </div>
      </div>
    </div>
  </div> -->
</template>
<script>
export default {
  data() {
    return {
      tabs: [
        { key: "home", value: this.$t("title.home") },
        { key: "case", value: this.$t("title.case") },
        { key: "price", value: this.$t("title.price") },
        { key: "download", value: this.$t("title.download") },
        { key: "help", value: this.$t("title.help") },
        { key: "contact", value: this.$t("title.contact") },
      ],
    };
  },
  methods: {
    agreement() {
      this.$router.push("/agreement");
    },
    handleSelect(e) {
      switch (e) {
        case "home":
          this.$router.push("/");
          window.location.reload();
          break;
        case "case":
          this.$router.push("/case");
          window.location.reload();
          break;
        case "price":
          this.$router.push("/price");
          window.location.reload();
          break;
        case "download":
          this.$router.push("/download");
          window.location.reload();
          break;
        case "help":
          this.$router.push("/help");
          window.location.reload();
          break;
        case "contact":
          this.$router.push("/contact");
          window.location.reload();
          break;
      }
    },
  },
};
</script>
<style scoped>
a {
  color: #293e63;
  text-decoration: none;
}
.pc {
  padding: 2% 11%;
  margin-top: 100px;
}
#imgtop a {
  margin-top: 10px;
}
.links .hd a {
  display: block;
  float: left;
  margin-right: 20px;
  background: #004d74;
  padding: 5px 8px;
  border-radius: 3px;
}
.links .hd a img {
  height: 18px;
}
img {
  max-width: 100%;
  border: 0;
  vertical-align: middle;
}
.links {
  position: relative;
  display: flex;
  align-items: center;
  padding: 15px 0;
}
.pc .flex-wrap,
.pc .flex-wrap .img-box {
  display: flex;
  justify-content: space-between;
}
.pc .flex-wrap {
  width: 100%;
  border-top: 1px solid #e6e4d2;
  padding-top: 20px;
}
.links .bd {
  padding: 0 15px;
  font-size: 12px;
  color: #4f4b4b;;
}
#imgtop {
  position: relative;
}
.links .hd {
  flex: 1;
  overflow: hidden;
}
.pc .flex-wrap .box {
  color: #293e63;
  text-align: left;
}
.pc .flex-wrap .box .min-p {
  width: 100%;
  margin-bottom: 6%;
  font-size: 14px;
  font-weight: bolder;
}
.pc .flex-wrap .box .link-to {
  margin-bottom: 3%;
  font-size: 14px;
  line-height: 14px;
}
.pc .flex-wrap .img-box {
  flex-direction: row-reverse;
}
.pc .flex-wrap,
.pc .flex-wrap .img-box {
  display: flex;
  justify-content: space-between;
}
.pc .flex-wrap .img-box .img-container {
  display: flex;
  justify-content: space-between;
}
.pc .flex-wrap .img-box .img-container .left-img {
  padding-left: 24px;
  margin-right: 20px;
  text-align: center;
}
.pc .flex-wrap .img-box .img-container .right-img {
  text-align: center;
}

.link {
  float: left;
  width: 980px;
  height: 173px;
  /* background: url(); */
  margin-left: 30px;
  cursor: pointer;
}
.link img {
  margin-left: 30px;
  width: 980px;
  height: 173px;
  margin-top: 68px;
}
.footer-bg {
  width: 100%;
  /* height: 363px; */
  background: url(../assets/img/footer-bg.png) no-repeat;
  background-position: center;
  /* margin-top: -80px; */
  overflow: hidden;
}
.line {
  width: 90%;
  height: 5px;
  margin: 0 auto;
  margin-top: 100px;
  background: url(../assets/img/line.png);
}
.footer-content {
  width: 1000px;
  height: 300px;
  margin: 0 auto;
  margin-top: 30px;
  display: flex;
}
.footer-content-item {
  text-align: left;
  width: 33%;
  height: 100%;
  justify-content: space-around;
}
.footer-title1,
.footer-title2,
.footer-title3 {
  font-size: 20px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: #255caa;
}
.sub-title {
  font-size: 14px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: #262626;
  cursor: pointer;
}
.footer-content-item li {
  list-style: none;
  font-size: 14px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: #262626;
  cursor: pointer;
  margin-left: -42px;
}
</style>