<template>
    <div class="nav_view">
     <el-menu mode="horizontal" style="height: 70px" active-text-color="blue" background-color="">
      <el-menu-item v-for="menu in menus" :key="menu.id" :index="menu.id" >{{menu.name}}</el-menu-item>
       <el-menu-item><el-input></el-input></el-menu-item>
       <el-menu-item style="float: right" index="/person">个人中心</el-menu-item>
       <el-menu-item style="float: right" index="/setting">设置</el-menu-item>
       <el-menu-item><el-avatar></el-avatar></el-menu-item>
     </el-menu>
    </div>
</template>

<script>
export default {
  name: 'topNav',
  data () {
    return {
      menus: [{id: 1, name: '首页'}, {id: 2, name: '韩剧'}, {id: 3, name: '日剧'}, {id: 4, name: '泰剧'}]
    }
  }
}
</script>

<style scoped>

</style>
