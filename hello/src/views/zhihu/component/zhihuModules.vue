<template>
  <div class="zhihu-modules" >
    <el-row >
      <el-col :span="8" style="padding: 10px">
        <i class="el-icon-document"></i>
        <p style="padding: 0;margin: 0">写回答</p>

      </el-col>
      <el-col :span="8" style="padding: 10px">
        <i class="el-icon-document"></i>
        <p style="padding: 0;margin: 0">写文章</p>

      </el-col>
      <el-col :span="8" style="padding: 10px">
        <i class="el-icon-document"></i>
        <p style="padding: 0;margin: 0">写想法</p>

      </el-col>
    </el-row>
    <el-row >
      <el-col :span="8" style="padding: 10px">
        <i class="el-icon-document"></i>
        <p style="padding: 0;margin: 0">发视频</p>

      </el-col>
      <el-col :span="8" style="padding: 10px">
        <i class="el-icon-document"></i>
        <p style="padding: 0;margin: 0">稍后答</p>

      </el-col>
      <el-col :span="8" style="padding: 10px">
        <i class="el-icon-document"></i>
        <p style="padding: 0;margin: 0">草稿箱</p>

      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'zhihuModules'
}
</script>

<style scoped lang="scss">
.zhihu-modules {
  width: 296px;
  background-color: white;
  margin-top: 10px;
}
.subview {
}
</style>
