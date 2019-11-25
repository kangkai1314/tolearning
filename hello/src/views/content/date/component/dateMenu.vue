<template>
    <div class="header">
      <el-col :span="4" class="content">
        <el-image :src="url" ></el-image>

      </el-col>
      <el-col :span="1"  class="content">
        <el-divider direction="vertical" ></el-divider>
      </el-col>

      <el-col :span="4"  class="content">
        <h3>婚恋网站</h3>
      </el-col>
      <el-col :span="10"  class="content">
        <el-form :inline="true">
          <el-form-item><el-input ></el-input></el-form-item>
          <el-form-item><el-input ></el-input></el-form-item>
        </el-form>

      </el-col>
    </div>
</template>

<script>
export default {
  name: 'dateMenu',
  data () {
    return {
      url: 'http://images2.jyimg.com/msn/index_pic/jy_common_1560408756.jpeg'
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../../../styles/variables";
.header{
  padding: $paddingBottom $paddingHeader $paddingBottom  $paddingHeader;
  display: block;
  height: 70px;
  .content{
    height: 70px;


  }
  /deep/
  .el-input__inner{
    height: 25px;
    width: 136px;
  }

}
</style>
