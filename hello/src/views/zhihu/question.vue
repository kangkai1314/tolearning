<template>
<div class="question_view" style="margin: auto">
  <el-row>
    <el-col :span="16" style="width: 796px">
      <el-row style="margin: 10px;background-color: white;padding: 10px">
        <el-tag><i class="el-icon-hot-water"></i>人气问题</el-tag>
        <el-tag><i class="el-icon-hot-water"></i>潜力好问</el-tag>
        <el-tag><i class="el-icon-hot-water"></i>新问题</el-tag>
        <el-tag><i class="el-icon-hot-water"></i>人人答</el-tag>

      </el-row>
      <el-row v-for="i in 100" :key="i">
        <div class="question" style="background-color: white;padding: 10px;margin-right: 10px">
          <h3 style="text-align: left;margin-left: 10px;margin-bottom: 10px">可以送我一句话么？</h3>
          <el-button icon="el-icon-pencil">写回答</el-button>
          <el-link><i class="el-icon-plus">关注问题</i></el-link>
          <el-link><i class="el-icon-timer">稍后答</i></el-link>
          <span>69个回答。6555浏览</span>

        </div>

      </el-row>

    </el-col>
    <el-col :span="8" style="width: 296px">
      <zhihu-modules></zhihu-modules>
      <el-row style="margin-top: 10px;background-color: white; width: 296px;">
        <div class="author_view" style="display: flex;justify-content: space-around">
          <p><i class="el-icon-phone"> </i>作者中心</p>
          <p>去开通<i class="el-icon-arrow-right"></i></p>

        </div>

      </el-row>
      <el-row><zhihu-menu></zhihu-menu></el-row>

    </el-col>
  </el-row>
</div>
</template>

<script>
import ZhihuModules from './component/zhihuModules'
import ZhihuMenu from './component/zhihuMenu'
export default {
  name: 'question',
  components: {ZhihuMenu, ZhihuModules}
}
</script>

<style scoped lang="scss">
  .question_view{
  }

</style>
