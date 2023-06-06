<template>
  <div>
    <!-- 第一個container -->
    <div class="container__base">
      <Menubar></Menubar>
      <!-- 主視覺 -->
      <div class="visual">
        <div class="visual__head">
          <div class="visual__txt"><div>用多少，</div><div>付多少。</div></div>
        </div>
        <div class="visual__sub">
          <div></div>
          <div class="visual__subtitle">我們相信，最靈活的取用機制，才能最大化的幫助你業務的推動。</div>
        </div>
        <div class="visual__animate visual__animate--reverse">
          <div class="animate"><img class="visual__arrow upthr" src="../assets/img/visual_arrow.png" alt=""></div>
          <div class="animate"><img class="visual__arrow uptwo" src="../assets/img/visual_arrow.png" alt=""></div>
          <div class="animate"><img class="visual__arrow up" src="../assets/img/visual_arrow.png" alt=""></div>
        </div>
      </div>
      <!-- 介紹 -->
      <h3 class="direction__title">定價</h3>
      <Prize class="prize__section"></Prize>
      <!-- 合作夥伴 -->
      <div class="rule">
        <div class="rule__theme">使用規範</div>
        <div class="rule__card">
          <div class="rule__item">
            <div class="rule__title">守法</div>
            <div class="rule__txt">請遵守相關的法規和政策，不得進行任何違法違規的活動。</div>
          </div>
          <div class="rule__item">
            <div class="rule__title">資訊安全</div>
            <div class="rule__txt">請務必保護好自己的帳號和密碼，不得將其透露給他人。</div>
          </div>
          <div class="rule__item">
            <div class="rule__title">守密</div>
            <div class="rule__txt">需對使用過程中產生的數據負責，不得擅自泄露數據。</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 第二個container -->
    <div class="toolblock">
      <div class="container__base">
        <div class="tool__title">這些超酷的應用，<br class="mobile_break">都來自 AI工具王</div>
        <div class="tool__search"><span class="material-icons">search</span><input type="text" placeholder="輸入關鍵字搜尋">
        </div>
        <div class="tool__card">
          <Filtertool />
        </div>
        <div class="tool__cntnt">
          <Card></Card>
        </div>
      </div>
    </div>
    <!-- 第三個container -->
    <div class="container__base">
      <div class="qa">
        <div class="qa__theme">常見問題</div>
        <div class="qa__block">
          <div class="qa__card">
            <div class="qa__title"><span class="material-icons">add</span><div>如何選擇適合的AI模型？</div></div>
          </div>
          <div class="qa__card">
            <div class="qa__title"><span class="material-icons">add</span><div>租用模型的費用是如何計算的？</div></div>
          </div>
          <div class="qa__card">
            <div class="qa__title"><span class="material-icons">add</span><div>如何進行付款？</div></div>
          </div>
          <div class="qa__card">
            <div class="qa__title"><span class="material-icons">add</span><div>租用模型的期限是多久？</div></div>
          </div>
          <div class="qa__card">
            <div class="qa__title"><span class="material-icons">add</span><div>如果在使用過程中遇到問題，應該怎麼處理？</div></div>
          </div>
        </div>
      </div>
      <div class="goto">
        <div class="goto__sign">現在就來建立屬於你的服務吧</div>
        <router-link to="/solution"><Buttonbase><div>開始使用</div><span class="material-icons">arrow_outward</span></Buttonbase></router-link>
      </div>
      <div class="map">
        <div class="map__sign font-bold">首頁<br>定價</div>
        <div><img src="../assets/img/ai_logo.png" alt="" class="map__logo"></div>
      </div>
      <Footer></Footer>
    </div>

  </div>
</template>

<script>
import Partner from './Partner.vue';
import Card from './Card.vue';
import Footer from './Footer.vue';
import Filtertool from './Filtertool.vue';
import Menubar from './Menubar.vue';
import Buttonbase from './Button.vue';
import Prize from './Prize.vue';

export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Partner,
    Card,
    Filtertool,
    Footer,
    Menubar,
    Buttonbase,
    Prize
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
