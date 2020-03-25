<template>
    <el-tabs style="background-color: white;width: 796px">
      <el-tab-pane label="推荐">
        <div class="content" v-for=" i in 100" :key="i" style="margin-top: 10px">
          <zhihu-item></zhihu-item>
        </div>
      </el-tab-pane>
      <el-tab-pane label="关注"></el-tab-pane>
      <el-tab-pane label="热榜"></el-tab-pane>
    </el-tabs>
</template>

<script>
import ZhihuModules from './zhihuModules'
import ZhihuItem from './zhihuItem'
export default {
  name: 'zhihuContent',
  components: {ZhihuItem, ZhihuModules}
}
</script>

<style scoped>

</style>
