<template>
  <div class="zhihu-modules" >
    <el-row >
      <el-col :span="6" style="padding: 10px">
        <i class="el-icon-document" style="color: #20a0ff"></i>
        <p style="padding: 0;margin: 0">回答问题</p>

      </el-col>
      <el-col :span="6" style="padding: 10px">
        <i class="el-icon-video-camera" style="color:orange"></i>
        <p style="padding: 0;margin: 0">发视频</p>

      </el-col>
      <el-col :span="6" style="padding: 10px">
        <i class="el-icon-edit-outline" style="color:orange"></i>
        <p style="padding: 0;margin: 0">写文章</p>

      </el-col>
      <el-col :span="6" style="padding: 10px">
        <i class="el-icon-edit-outline" style="color:blue"></i>
        <p style="padding: 0;margin: 0" >写想法</p>

      </el-col>
    </el-row>
    <el-row >

      <el-col :span="12" style="padding: 10px">
        <el-button style="padding: 0;margin: 0;color:#999999" type="text">稍后答</el-button>

      </el-col>
      <el-col :span="12" style="padding: 10px">

        <el-button style="padding: 0;margin: 0;color:#999999" type="text" >草稿箱</el-button>

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
  p{
    font-size: 13px;
  }
  i{
    margin-bottom: 10px;
  }
</style>
