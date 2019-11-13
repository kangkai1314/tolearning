<template>
    <div class="nav_view">
     <el-menu mode="horizontal" style="height: 70px" active-text-color="#409eff" background-color="black" :router="true">
      <el-menu-item v-for="menu in menus" :key="menu.id" :index="menu.path" >{{menu.name}}</el-menu-item>
       <el-menu-item><el-input></el-input></el-menu-item>
       <el-menu-item style="float: right" index="person">个人中心</el-menu-item>
       <el-menu-item style="float: right" index="/work/setting">设置</el-menu-item>
       <el-menu-item style="float: right" index="/work/login">登录</el-menu-item>
       <el-menu-item><el-avatar></el-avatar></el-menu-item>
     </el-menu>
    </div>
</template>

<script>
export default {
  name: 'topNav',
  data () {
    return {
      menus: [{id: 1, name: '首页', path: '/'}, {id: 2, name: '工作', path: '/work/job'}, {id: 3, name: '租房', path: '/work/rent'}, {id: 4, name: '相亲', path: '/work/date'}]
    }
  }
}
</script>

<style scoped>

</style>
