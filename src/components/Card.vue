<template>
    <div>
        <!-- ul li有階層性 -->
        <ul class="card__container" id="app">
            <li class="card" v-for="item in carddata">
                <img :src="item.img" alt="">
                <div class="card__title">
                    <h5 class="font-bold">{{ item.title }}</h5>
                    <div class="card__item">{{ item.description }}</div>
                </div>
                <div class="card__tag">
                    <div class="card__item font-bold">{{ item.tag }}</div>
                    <div class="card__item">{{ item.author }}</div>
                </div>
                <div class="card__category">
                    <div class="card__item">{{ item.category }}</div>
                    <span class="card__icon material-icons">share</span>
                </div>
            </li>
        </ul>
    </div>
</template>
  
<script>
export default {
    name: 'Card',
    data() {
        return {
            carddata: [
                {
                    img: 'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2023web-camp/tool1.png',
                    title: 'Chatbot Builder',
                    description: '建立智能化的聊天機器人，解答常見問題、提供客戶支援、收集反饋等。',
                    tag: 'AI 模型',
                    author: '卡卡',
                    category: '#聊天',
                },
                {
                    img: 'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2023web-camp/tool2.png',
                    title: 'Image Recognition Platform',
                    description: '專業的圖像識別平台，識別圖像、分類、標記等。',
                    tag: 'AI 模型',
                    author: '杰杰',
                    category: '#影像辨識',
                },
                {
                    img: 'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2023web-camp/tool3.png',
                    title: 'Language Translation API',
                    description: '專業的語言翻譯 API，實現文本翻譯功能，支援多種格式的文本。',
                    tag: 'AI 模型',
                    author: '琪琪',
                    category: '#翻譯',
                },
                {
                    img: 'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2023web-camp/tool4.png',
                    title: 'Sentiment Analysis API',
                    description: '自動識別文本中的情感傾向，包括正向、負向和中性等。適用於情感分析、社交媒體監控、市場調查等。',
                    tag: 'AI 模型',
                    author: '昊昊',
                    category: '#行銷',
                },
                {
                    img: 'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2023web-camp/tool5.png',
                    title: 'Fraud Detection Platform',
                    description: '預防詐騙活動，適用於銀行、金融、電商等。',
                    tag: 'AI 模型',
                    author: '卡卡',
                    category: '#客服',
                },
                {
                    img: 'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2023web-camp/tool6.png',
                    title: 'Voice Assistant SDK',
                    description: '通過語音控制應用程式、設備，實現多種功能，例如播放音樂、查詢天氣、發送信息等。',
                    tag: 'AI 模型',
                    author: '杰杰',
                    category: '#生產力',
                },
            ]
        }
    }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/all.scss";
</style>
  