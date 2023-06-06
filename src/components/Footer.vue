<template>
    <div class="body">
        <!-- ul li有階層性 -->
        
        <ul class="footer">
            <li class="footer__cc">AI工具王 © 2023</li>
            <li class="footer__social">
                <ul class="footer__socialblock">
                    <li class="footer__socialbtn"><a href="#">Facebook</a></li>
                    <li class="footer__socialbtn"><a href="#">Twitter</a></li>
                    <li class="footer__socialbtn"><a href="#">Instagram</a></li>
                </ul>
            </li>
            <li class="footer__back"><a href="">Back to top <span class="material-icons">arrow_upward</span></a></li>
        </ul>
    </div>
</template>
  
<script>
export default {
    name: 'Footer',
    data() {
        return {
        }
    }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/all.scss";
</style>
  