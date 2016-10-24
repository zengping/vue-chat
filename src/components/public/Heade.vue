<template>
  <div class="heade">
    <div class="headbox">
      <menus></menus>
      <div class="title">朋友圈</div>
      <home></home>
    </div>
  </div>
</template>

<script>
import Menus from './Menus'
import Home from './Home'

export default {
  components: {
    Menus,
    Home
  }
}
</script>

<style scoped>
.heade {
  display: table;
  width: 100%;
  height: 40px;
  background: #333;
  color: #fff;
}
.headbox {
  display: table-row;
}
.title {
  display: table-cell;
  padding-left: 10px;
  height: 40px;
  line-height: 40px;
}
</style>
