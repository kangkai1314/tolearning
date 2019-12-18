<template>
<div class="blog_page">
  <el-container>
    <el-header>
      <el-menu mode="horizontal" class="header_menu">
        <el-menu-item>康凯blog</el-menu-item>
        <el-menu-item><el-input prefix-icon="el-icon-search"></el-input></el-menu-item>
        <el-menu-item v-for="i in 5">menu{{i}}</el-menu-item>
        <el-menu-item><el-dropdown>
          <span>个人中心</span>
        </el-dropdown></el-menu-item>
      </el-menu>
    </el-header>
    <el-container>
      <el-aside >

        <ul class="mulu_nav">
          <li v-for="menu in menus" :key="menu.id">
            <router-link :to="menu.path">  {{menu.name}}</router-link>
          </li>
        </ul>
      </el-aside>
      <el-main>
        <div class="main_content">
          <ul >
            <li v-for="i in 100" :key="i">
              <el-image></el-image>
              Content is a  {{i}},pleases notify
             <span>long content</span>
            </li>
          </ul>
        </div>
      </el-main>
    </el-container>

  </el-container>
</div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      menus: [{id: 1, name: '知乎', path: '/zhihu'}, {id: 2, name: 'soul', path: '/soul'},
        {id: 3, name: '知乎', path: '/zhihu'}, {id: 4, name: 'soul', path: '/soul'},
        {id: 5, name: '知乎', path: '/zhihu'}, {id: 6, name: 'soul', path: '/soul'},
        {id: 7, name: '知乎', path: '/zhihu'}, {id: 8, name: 'soul', path: '/soul'},
        {id: 9, name: '知乎', path: '/zhihu'}, {id: 10, name: 'soul', path: '/soul'},
        {id: 11, name: '知乎', path: '/zhihu'}, {id: 12, name: 'soul', path: '/soul'},
        {id: 13, name: '知乎', path: '/zhihu'}, {id: 14, name: 'soul', path: '/soul'}
      ]
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

</style>
