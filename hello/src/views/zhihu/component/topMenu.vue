<template>
    <el-menu mode="horizontal" :default-active="1" class="menu-class">
      <el-menu-item><el-image :src="url"></el-image></el-menu-item>
      <el-menu-item v-for="m in menus" :key="m.id" :index="m.id" >{{m.name}}</el-menu-item>
      <el-menu-item>
        <el-input aria-placeholder="请输入你的信息" suffix-icon="el-icon-search" class="search-input"></el-input></el-menu-item>
      <el-menu-item><el-button class="button-class">提问</el-button></el-menu-item>
      <el-menu-item><el-badge :value="20" class="item"><el-icon class="el-icon-alarm-clock"
      style="width: 36px"></el-icon></el-badge></el-menu-item>
      <el-menu-item><el-badge :value="20" class="item"><el-icon class="el-icon-message"
                                                                style="width: 36px"></el-icon></el-badge></el-menu-item>
      <el-menu-item><el-avatar></el-avatar></el-menu-item>
    </el-menu>
</template>

<script>
export default {
  name: 'topMenu',
  data () {
    return {
      menus: [{id: 1, name: '主页'}, {id: 2, name: '发现'}, {id: 3, name: '等你来答'}],
      url: ''
    }
  }
}
</script>

<style scoped>
  .item{
    margin-top: 1px;
    margin-right: 4px;
  }

  /deep/
  .el-input__inner{
    background-color: transparent;
    width: 256px;
  }
  .button-class{
    color: #fff;
    background-color: #0084ff;
  }

</style>
