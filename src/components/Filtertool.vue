<template>
    <div>
        <!-- ul li有階層性 -->
        <div class="filter" id="app">
            <a href="#" class="filter__sum">
                <div class="filter__status">篩選<span class="material-icons-sharp">filter_alt</span></div>
                <div class="filter__dropdown">
                    <ul class="filter__list">
                        <li class="filter__item--title">howdy</li>
                        <li class="filter__item">篩選項目一</li>
                        <li class="filter__item">篩選項目一</li>
                    </ul>
                    <ul class="filter__list">
                        <li class="filter__item--title">類型</li>
                        <li class="filter__item">篩選項目二</li>
                        <li class="filter__item">篩選項目二</li>
                    </ul>
                </div>
            </a>
            <div class="filter__navblock">
                <ul class="filter__nav">
                <li class="filter__navbtn"><a href="#">香蕉香蕉</a></li>
                <li class="filter__navbtn"><a href="#">蘋果蘋果</a></li>
                <li class="filter__navbtn"><a href="#">芒果芒果</a></li>
                <li class="filter__navbtn"><a href="#">桃子桃子</a></li>
                <li class="filter__navbtn"><a href="#">橘子橘子</a></li>
                <li class="filter__navbtn"><a href="#">石榴石榴</a></li>
                <li class="filter__navbtn"><a href="#">櫻桃櫻桃</a></li>
            </ul>
            </div>
            <select name="" id="" class="filter__select">
                <option value="" class="filter__option">由新到舊</option>
                <option value="" class="filter__option">由舊到新</option>
            </select>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'Filtertool',
    data() {
        return {
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/all.scss";

</style>
  