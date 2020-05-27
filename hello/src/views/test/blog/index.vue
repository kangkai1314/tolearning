<template>
<div class="blog_page">
  <div class="view" ref="view"  draggable="true" @dragstart="start('$event')">

  </div>
</div>
</template>

<script>
import TestSub from '../../../components/testSub'
export default {
  name: 'index',
  components: {TestSub},
  data () {
    return {
      number: 0,
      msg: {msg: 'msg', info: 'info'},
      menus: [{id: 1, name: '知乎', path: '/zhihu'}, {id: 2, name: 'soul', path: '/soul'},
        {id: 3, name: '知乎', path: '/zhihu'}, {id: 4, name: 'soul', path: '/soul'},
        {id: 5, name: '知乎', path: '/zhihu'}, {id: 6, name: 'soul', path: '/soul'},
        {id: 7, name: '知乎', path: '/zhihu'}, {id: 8, name: 'soul', path: '/soul'},
        {id: 9, name: '知乎', path: '/zhihu'}, {id: 10, name: 'soul', path: '/soul'},
        {id: 11, name: '知乎', path: '/zhihu'}, {id: 12, name: 'soul', path: '/soul'},
        {id: 13, name: '知乎', path: '/zhihu'}, {id: 14, name: 'soul', path: '/soul'}
      ]
    }
  },
  methods: {
    newObj: function () {
      for (let i = 0; i < 1000; i++) {
        this.$nextTick(() => {
          this.number++
        })
      }
    },
    start:function (event) {
      console.log(event)

    }
  }
}
</script>

<style scoped lang="scss">
  .header_menu{
    padding: 10px;
    color: #20a0ff;
    display: flex;
    align-items: stretch;

  }
  .mulu_nav{
    padding: 10px;
    margin-top: 20px;
    ul{
      padding: 10px;
      background-color: #20a0ff;
    }
    li{
      padding: 10px;
      background-color: inherit;
    }

  }
  .main_content{
    ul{
      margin: 20px;
    }
    li{
      display: flex;
      justify-content: space-between;
    }
  }
  .view{
    width: 100px;
    height: 100px;
    background-color: black;
  }

</style>
