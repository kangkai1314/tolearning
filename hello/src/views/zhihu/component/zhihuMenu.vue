<template>
    <el-menu mode="vertical" style="margin-top: 10px">
      <el-menu-item index="/collection" v-for="i in 5" :key="i">
        <template slot="title">
          <i class="el-icon-star-on"></i><span>我的收藏</span>
          <el-tag style="margin-left: 20px">555</el-tag>
        </template></el-menu-item>
    </el-menu>
</template>

<script>
export default {
  name: 'zhihuMenu'
}
</script>

<style scoped>

</style>
