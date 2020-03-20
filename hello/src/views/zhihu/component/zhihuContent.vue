<template>
    <el-tabs>
      <el-tab-pane label="推荐">
        <div class="content">
        </div>
      </el-tab-pane>
      <el-tab-pane label="关注"></el-tab-pane>
      <el-tab-pane label="热榜"></el-tab-pane>
    </el-tabs>
</template>

<script>
import ZhihuModules from './zhihuModules'
export default {
  name: 'zhihuContent',
  components: {ZhihuModules}
}
</script>

<style scoped>

</style>
