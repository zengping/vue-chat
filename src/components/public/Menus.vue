<template>
  <div class="menus">
    <a href="javascript:void(0)" v-on:click="changeStatus">
      <div class="icon">
        <i class="icon-menu"></i>
      </div>
    </a>
    <div v-if="mstatus">
	    <ul class="animated" v-bind:class="{fadeInDown: mstatus}">
	      <li v-for="menu in menus">
	        <a v-bind:href="menu.link">{{menu.name}}</a>
	      </li>
	    </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      mstatus: false,
      menus: [{
        link: '/',
        name: 'Home'
      },
      {
        link: '/top',
        name: 'Top'
      }]
    }
  },
  methods: {
    changeStatus: function (event) {
      this.mstatus = !this.mstatus
    }
  }
}
</script>

<style scoped>
.menus {
  display: table-cell;
  vertical-align: middle;
  width: 40px;
  height: 40px;
  line-height: 40px;
  color: #fff;
  text-align: center;
}
ul, li {
  list-style: none;
  margin: 0px;
  padding: 0px;
}
ul {
  position: absolute;
  z-index: 2;
  display: block;
  width: 100px;
  height: 180px;
  background: #333;
}
li {
  width: 100%;
  height: 30px;
  line-height: 30px;
}
a {
  color: #fff;
}
</style>
