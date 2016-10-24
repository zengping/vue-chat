<template>
  <div class="home">
    <a href="javascript:void(0)" v-on:click="changeAlert">
      <div class="icon"><i class="icon-user"></i></div>
    </a>
    <div v-if="status">
      <alert v-on:alert="changeAlert" v-bind:status="status"></alert>
    </div>
  </div>
</template>

<script>
import Alert from './Alert'

export default {
  data () {
    return {
      status: false
    }
  },
  components: {
    Alert
  },
  methods: {
    changeAlert: function (event) {
      this.status = !this.status
    }
  }
}
</script>

<style scoped>
.home {
  display: table-cell;
  width: 40px;
  height: 40px;
  line-height: 40px;
  color: #fff;
  text-align: center;
}
a {
  color: #fff;
}
</style>
