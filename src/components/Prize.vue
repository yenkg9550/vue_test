<template>
    <div>
        <!-- ul li有階層性 -->
        <ul class="prize__container" id="app">
            <li class="prize" v-for="item in prizedata">
                <div class="prize__content">
                    <h3 class="prize__title font-bold">{{ item.name }}</h3>
                    <ul class="prize__description"><li v-for="val in item.description">{{ val }}</li></ul>
                </div>
                <div class="prize__tag">
                    <h6 class="prize__money font-bold">NT${{ item.prize }}<span class="prize__number font-regular">/{{ item.number }} tokens</span></h6>
                    <div class="prize__start font-bold">開始使用</div>
                </div>
            </li>
        </ul>
    </div>
</template>
  
<script>
export default {
    name: 'Card_prize',
    data() {
        return {
            prizedata: [
                {
                    name: '琪琪',
                    description: ['初級','速度最快'],
                    prize: 5,
                    number: '1k',
                },
                {
                    name: '昊昊',
                    description: ['中級'],
                    prize: 5,
                    number: '1k',
                },
                {
                    name: '卡卡',
                    description: ['高級'],
                    prize: 5,
                    number: '1k',
                },
                {
                    name: '杰杰',
                    description: ['最高級','資訊最完善'],
                    prize: 5,
                    number: '1k',
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
  