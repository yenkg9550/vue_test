<template>
  <div>
    <!-- 第一個container -->
    <div class="container__base">
      <Menubar></Menubar>
      <!-- 主視覺 -->
      <div class="visual">
        <div class="visual__head">
          <div class="visual__txt">
            <transition></transition>
            <div class="show">透過</div>
            <div class="show--two">AI 工具王的</div>
            <div class="show--thr">強大模型</div>
            <div class="show--fou">讓您的業務<br class="mobile_break">更聰明</div>
          </div>
        </div>
        <div class="visual__btn"><router-link to="/solution">
            <Buttonbase></Buttonbase>
          </router-link></div>
        <div class="visual__animate">
          <div class="animate"><img class="visual__arrow upthr" src="../assets/img/visual_arrow.png" alt=""></div>
          <div class="animate"><img class="visual__arrow uptwo" src="../assets/img/visual_arrow.png" alt=""></div>
          <div class="animate"><img class="visual__arrow up" src="../assets/img/visual_arrow.png" alt=""></div>
        </div>
      </div>
      <!-- 介紹 -->
      <div class="direction">
        <h3 class="direction__title">我們的服務</h3>
        <h1 class="direction__caption">我們相信透過 AI 技術，包括圖像識別、自然語言處理和機器翻譯等，讓您更快、更準確地做出決策。</h1>
        <div class="direction__card">
          <span class="material-icons-outlined">flash_on</span>
          <h3>快速</h3>
          <div>我們先進的推理基礎設施提供了極短的響應時間，讓你的產品服務不間斷。</div>
        </div>
        <div class="direction__card">
          <span class="material-icons-sharp">auto_awesome</span>
          <h3>靈活</h3>
          <div>我們的服務可以根據您的需求進行靈活調整，同時還可以滿足不同項目和預算的需求。</div>
        </div>
        <div class="direction__card">
          <span class="material-icons-round">library_add</span>
          <h3>擴充</h3>
          <div>我們的服務支持多種擴充選項，可以滿足您的不斷增長的 AI 需求。</div>
        </div>
      </div>
      <!-- 合作夥伴 -->
      <div class="partnerblock">
        <div>
          <h3 class="partner__title">來自合作夥伴</h3>
          <div class="partner__iconblock">
            <div class="partner__icon"><img :src="require(`../assets/img/logo_one_${item}.png`)" alt=""
                v-for="item in partnerone"></div>
            <div class="partner__icon"><img :src="require(`../assets/img/logo_two_${item}.png`)" alt=""
                v-for="item in partnertwo"></div>
          </div>
          <Partner></Partner>
        </div>
        <div>

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
      <div class="goto">
        <div class="goto__sign">現在就來建立屬於你的服務吧</div>
        <router-link to="/solution">
          <Buttonbase>
            <div>開始使用</div><span class="material-icons">arrow_outward</span>
          </Buttonbase>
        </router-link>
      </div>
      <div class="map">
        <div class="map__sign font-bold">首頁<br>定價</div>
        <!-- <div><img src="../assets/img/ai_logo.png" alt="" class="map__logo"></div> -->
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
import $ from "jquery";

window.$ = $;

export default {
  name: 'HelloWorld',
  data() {
    return {
      partnerone: [1, 2, 3, 4, 6, 7, 5],
      partnertwo: [1, 2, 3, 4, 5, 6, 1],
      show:false,
      showtwo:false,
      showthr:false,
      showfou:false,
    }
  },
  // mounted(){
  //   this.anishow();
  // },
  methods: {
    // anishow :function(){
    //   $(".show").fadeIn();
    // }
  },
  created(){
    this.show = true;
    setTimeout(() => {
      this.showtwo = true;
    }, 500);
    setTimeout(() => {
      this.showtwo = true;
    }, 1000);
    setTimeout(() => {
      this.showtwo = true;
    }, 1500);
  },
  components: {
    Partner,
    Card,
    Filtertool,
    Footer,
    Menubar,
    Buttonbase
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
[v-cloak] {
      display: none;
  }

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
