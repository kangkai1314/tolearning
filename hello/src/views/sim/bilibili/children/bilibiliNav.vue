<template>
    <el-menu  mode="horizontal" style="height: 42px" class="menu-view"  background-color="none">
      <el-menu-item v-for="menu in menus" :key="menu.id" :index="menu.path">{{menu.label}}</el-menu-item>
    </el-menu>
</template>

<script>
export default {
  name: 'bilibiliNav',
  data () {
    return {
      menus: [{id: 1, label: '主站', path: '/'}, {id: 2, label: '游戏中心', path: 'game'},
        {id: 3, label: '直播', path: 'live'}, {id: 4, label: '会员购', path: '/member'},
        {id: 5, label: '漫画', path: 'comic'}, {id: 6, label: 'bw', path: '/bw'}, {id: 7, label: '70', path: '/70'}]
    }
  }
}
</script>

<style scoped >
  .el-menu-item{
    height: 41px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 30px;
  }
  .menu-view{
    margin-left: 184.5px;
    margin-right: 184.5px;
  }

</style>
