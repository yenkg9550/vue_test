<template>
    <div class="btn">
            <slot><div>開始使用</div></slot>
    </div>
</template>
  
<script>
export default {
    name: 'Card',
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
  