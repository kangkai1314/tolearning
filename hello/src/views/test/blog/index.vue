<template>
<div class="blog_page">
  <div class="view" ref="view"  draggable="true" @dragstart="start('$event')" >

  </div>
  <div class="view2">
    <el-menu mode="horizontal" class="menu">
      <el-menu-item v-for="menu in menus" :key="menu.id"  >{{menu.name}} </el-menu-item>
      <el-menu-item><el-dropdown></el-dropdown></el-menu-item>
    </el-menu>
    <el-container class="link-view">
      <el-aside >
        <el-link v-for="link in menus" :key="link.id" style="width: 100%">{{link.name}}</el-link>

      </el-aside>
      <el-main>
        <div class="main-view">
          <el-tabs>
            <el-tab-pane label="soul">
              <el-form>
                <el-form-item>
                  <el-select placeholder="请输入你想要输出的名称"></el-select>
                </el-form-item>
              </el-form>
            </el-tab-pane>
            <el-tab-pane label="zhihu"></el-tab-pane>
          </el-tabs>
        </div>
      </el-main>
    </el-container>

  </div>

  <p>{{number}}</p>
  <el-button @click="getDom"></el-button>
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
    start: function (event) {
      console.log(event)
    },
    getDom: function () {
      console.log(window)
      console.log(Document)
      let dom = document.getElementsByClassName('view')[0]
      console.log(dom)
      let p1 = document.createElement('p')
      p1.innerText = 'hello world'
      // p1.style='bakcgroundcolor:blue'
      p1.style.backgroundColor = 'blue'
      p1.addEventListener('click', this.newObj)
      dom.appendChild(p1)
      setTimeout(() => {
        this.$message.error('nmsl')
      }, 3000)
      setInterval(() => {
        this.$message.success('you died baby')
      }, 1000)
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
  .menu{
    padding: 10px;
    margin: 10px;
    border: 1px solid #20a0ff;
    .el-menu-item{
      border-right: 1px solid black;
    }
  }

</style>
