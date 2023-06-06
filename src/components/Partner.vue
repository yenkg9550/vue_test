<template>
    <div>
        <!-- ul li有階層性 -->
        <ul class="partner__container" id="app">
            <li class="partner" v-for="item in partnerdata">
                <div class="partner__rateblock">
                    <div v-for="item in starnum(item.star)"><star class="material_star"></star></div>
                </div>
                <div class="partner__description">{{ item.description }}</div>
                <div class="partner__people">
                    <div class="partner__iconcontainer">
                        <img :src="require(`../assets/${item.icon}.png`)" alt="" class="partner__icon">
                    </div>
                    <div>
                        <div class="partner__name">{{ item.name }}</div>
                        <div class="partner__company">{{ item.company }}</div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
  
<script>
import star from './material-star.vue';
export default {
    name: 'Card_Partner',
    data() {
        return {
            partnerdata: [
                {
                    star: 5,
                    description: '非常喜歡 AI工具王 提供的 AI 模型租賃服務，使用起來非常方便，而且效果非常好。對於我們公司的業務來說，這個服務非常重要，因為我們需要大量的數據進行分析和預測，AI工具王 提供的 AI 模型能夠幫助我們節省大量時間和成本，實在是太棒了！',
                    icon: 'partner_01',
                    name: '陳小姐',
                    company:'ABC科技有限公司'
                },
                {
                    star: 3,
                    description: '作為一家醫療器材公司，我們非常關注人工智能技術的應用，而 AI工具王 提供的 AI 模型租賃服務為我們帶來了很大的幫助。我們使用 AI工具王 的模型進行醫學影像分析和預測，這些模型非常精確，能夠幫助我們更好地診斷病情，提高治療效果。感謝 AI工具王 團隊的辛勤工作！',
                    icon: 'partner_02',
                    name: '劉小姐',
                    company:'XYZ 醫療器材有限公司'
                },
                {
                    star: 4,
                    description: '我們銀行一直在尋找能夠幫助我們提高風險控制和客戶服務的解決方案，而 AI工具王 提供的 AI 模型租賃服務正好滿足了我們的需求。我們使用 AI工具王 的模型進行客戶信用評估和詐騙檢測等任務，這些模型非常準確，能夠幫助我們更好地控制風險，提高客戶滿意度。非常感謝 AI工具王 團隊的支持！',
                    icon: 'partner_03',
                    name: '黃先生',
                    company:'EFG 銀行'
                },
            ]
        }
    },
    components:{
        star,
    },
    methods: {
        starnum (a){
            // <span class="material-icons">star</span>
            let str = []
            let star = 'star';
            for(let i = 0; i< a ; i++){
                str.push(star);
            }
            return str
        }
    }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/all.scss";
</style>
  