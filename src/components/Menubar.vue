<template>
    <div>
        <!-- <div class="navmobile">
            <div class="navmobile__webblock">
                <a href="" class="navmobile__webbtn">首頁</a>
                <a href="" class="navmobile__webbtn">定價</a>
            </div>
            <div class="navmobile__social">
                <Footer></Footer>
            </div>
        </div> -->
        <div class="nav__block">
            <ul class="nav">
                <li class="nav__img"><img src="../assets/img/ai_logo.png" alt=""></li>
                <li class="nav__btn">
                    <div><router-link to="/">首頁</router-link></div>
                    <div><router-link to="/solution">定價</router-link></div>
                </li>
                <li class="nav__btn--mobile">
                    <span class="material-icons">menu</span>
                </li>
            </ul>
        </div>
    </div>
</template>
  
<script>
import Footer from './Footer.vue';

export default {
    name: 'Menubar',
    data() {
        return {
        }
    },
    components:{
        Footer,
    },
}
</script>

<style lang="scss" scoped>
@import "../assets/all.scss";
</style>
  