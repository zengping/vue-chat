<template>
  <div class="alert">
    <div class="alert_bg" v-on:click="alert" v-if="status"></div>
    <div class="alert_dialog animated" v-bind:class="{fadeInDown: status}">
    </div>
  </div>
</template>

<script>
export default {
  props: ['status'],
  methods: {
    alert: function () {
      this.$emit('alert')
    }
  }
}
</script>

<style scoped>
.alert {
  position: fixed;
  z-index: 99;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
}
.alert_bg {
  position: absolute;
  z-index: 1;
  display: block;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.8;
}
.alert_dialog {
  position: absolute;
  z-index: 2;
  top: 100px;
  left: 25%;
  display: block;
  width: 50%;
  height: 200px;
  background: #dfdfdf;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
}
</style>
