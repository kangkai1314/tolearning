<template>
  <div class="content-alasis">
    <el-tabs>
      <el-tab-pane label="回答">
        <analsis type="answer"></analsis>
      </el-tab-pane>
      <el-tab-pane label="想法">
        <analsis type="idea"></analsis>
      </el-tab-pane>
      <el-tab-pane label="文章">
        <analsis type="article"></analsis>
      </el-tab-pane>
      <el-tab-pane label="视频">
        <analsis type="video"></analsis>
      </el-tab-pane>
    </el-tabs>

  </div>
</template>

<script>
import Analsis from './analsis'
export default {
  name: 'content',
  components: {Analsis}
}
</script>

<style scoped>
  .content-alasis{
    background-color: white;
    padding: 10px;
    margin: 10px;
  }

</style>
