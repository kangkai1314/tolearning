<template>
<div class="question_view" style="width: 1000px;padding-top: 10px">
  <el-row>
    <el-col :span="16" >
      <el-row style="margin-right:10px;background-color: white;padding-left:20px;padding-top:10px;padding-bottom:10px;display: flex;justify-content: flex-start;border-bottom: 1px solid #f4f4f5">
        <el-tag><i class="el-icon-hot-water"></i>人气问题</el-tag>
        <el-tag><i class="el-icon-hot-water"></i>潜力好问</el-tag>
        <el-tag><i class="el-icon-hot-water"></i>新问题</el-tag>
        <el-tag><i class="el-icon-hot-water"></i>人人答</el-tag>

      </el-row>
      <el-row v-for="i in 100" :key="i">
        <div class="question" style="background-color: white;padding: 10px;margin-right: 10px;border-bottom: 1px solid #f4f4f5;cursor: pointer" @click="goQuestion(i)">
          <h3 style="text-align: left;margin-left: 10px;margin-bottom: 10px;font-size: 16px;font-weight: bold">可以送我一句话么？</h3>
          <div class="view-area" style="display: flex;justify-content: space-between;margin-top: 17px;align-items: center">
            <div class="quest-view">
              <el-button icon="el-icon-pencil">写回答</el-button>
              <el-link><i class="el-icon-plus">关注问题</i></el-link>
              <el-link><i class="el-icon-timer">稍后答</i></el-link>
            </div>

            <span>69个回答。6555浏览</span>
          </div>

        </div>

      </el-row>

    </el-col>
    <el-col :span="8">
      <zhihu-modules></zhihu-modules>
      <el-row style="margin-top: 10px;background-color: white">
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
  components: {ZhihuMenu, ZhihuModules},
  methods: {
    goQuestion: function (number) {
      console.log(number)
      this.$router.push('/zhihu/question/' + number)
    }
  }
}
</script>

<style scoped lang="scss">
  .question_view{
  }
  /deep/
  .el-tag{
    padding: 0 12px;
    height: 32px;
    font-size: 14px;
    border-radius: 16px;
    align-items: center;
    display: flex;
    cursor: pointer;
    background: rgba(133,144,166,.12);
    box-shadow: 0 6px 10px 0 rgba(133,144,166,.06);
    color: #444;
    margin-right: 10px;
  }
  /deep/
  .el-tag:active{
    background-color: #20a0ff;
  }
  .quest-view{
    .el-button{
      color: #20a0ff;
      border: 1px solid #20a0ff;
    }
  }
</style>
