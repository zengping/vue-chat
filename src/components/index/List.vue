<template>
  <div class="list">
    <ul>
      <li v-for="msg in msgs">
        <div class="left">
          <img src="../../assets/himg.jpg">
        </div>
        <div class="right">
          <div class="name">{{msg.name}}</div>
          <div class="content">{{msg.content}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msgs: []
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      var self = this
      this.$http.get('/api/list.json', {}).then((res) => {
        self.msgs = res.data
      }, (res) => {
        // error callback
      })
    }
  }
}
</script>

<style scoped>
ul, li {
  list-style: none;
  margin: 0px;
  padding: 0px;
}
ul {
  display: table;
  margin-top: 10px;
  width: 100%;
  height: 100%;
}
li {
  display: table-row;
  height: auto;
  padding-bottom: 20px;
}
.left {
  display: table-cell;
  vertical-align: top;
  width: 60px;
}
.left img {
  display: block;
  margin: 10px 10px;
  width: 40px;
  height: 40px;
}
.right {
  display: table-cell;
}
.right .name {
  margin-top: 5px;
  color: blue;
  height: 25px;
  line-height: 25px;
}
.right .content {
  display: block;
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
}
</style>
