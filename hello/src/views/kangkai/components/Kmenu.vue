<template>
    <el-menu mode="horizontal" style="width: 100%" class="menu_class">
      <el-menu-item v-for="m in menus" :key="m.id" :index="m.id" >{{m.name}}</el-menu-item>
      <el-menu-item style="float: right"><el-dropdown>
      <el-avatar class="el-dropdown-link">
      </el-avatar><i class="el-icon-arrow-down el-icon--right"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
          <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-check">蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown></el-menu-item>
      <el-menu-item>
        <el-cascader></el-cascader>

      </el-menu-item>

    </el-menu>
</template>

<script>
import {fetchMenus} from '../../../api/test'

export default {
  name: 'Kmenu',
  data () {
    return {
      menus: [{id: 1, name: '主页'}, {id: 2, name: '测试'}, {id: 3, name: '关于'}]
    }
  },
  created () {
    this.getMenus()
  },
  methods: {
    getMenus: function () {
      fetchMenus().then(response => {
        console.log(response)
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .menu_class{
    background-color: #409EFF;
  }

</style>
