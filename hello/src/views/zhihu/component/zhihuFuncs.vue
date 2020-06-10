<template>
    <div class="zhihu_func_view">
      <el-row>      <el-image :src="url" style="width: 296px;padding: 0;margin: 0"></el-image>
      </el-row>

      <div class="view">
        <el-row style="padding: 10px">
          <!--<el-col :span="8" v-for="i in 6" :key="i" style="padding: 10px">-->
            <!--<i class="el-icon-message"></i><p style="padding: 0;margin:0;font-size: 30px" class="sub">live</p>-->
          <!--</el-col>-->
          <el-col :span="8" style="padding: 10px;font-size: 22px" class="sub">
            <i class="el-icon-hot-water" style="color: yellow"></i>
            <p style="padding: 0;margin: 0">live</p>
          </el-col>
          <el-col :span="8" style="padding: 10px;font-size: 22px" class="sub">
            <i class="el-icon-hot-water" style="color: green"></i>
            <p style="padding: 0;margin: 0">书店</p>
          </el-col>
          <el-col :span="8" style="padding: 10px;font-size: 22px" class="sub">
            <i class="el-icon-hot-water" style="color: green"></i>
            <p style="padding: 0;margin: 0">圆桌</p>
          </el-col>
        </el-row>
        <el-row >
          <!--<el-col :span="8" v-for="i in 6" :key="i" style="padding: 10px">-->
          <!--<i class="el-icon-message"></i><p style="padding: 0;margin:0;font-size: 30px" class="sub">live</p>-->
          <!--</el-col>-->
          <el-col :span="8" style="padding: 10px;font-size: 20px" class="sub">
            <i class="el-icon-hot-water" style="color: yellow"></i>
            <p style="padding: 0;margin: 0">付费咨询</p>
          </el-col>
          <el-col :span="8" style="padding: 10px;font-size: 20px" class="sub">
            <i class="el-icon-s-shop" style="color: green"></i>
            <p style="padding: 0;margin: 0">专栏</p>
          </el-col>
          <el-col :span="8" style="padding: 10px;font-size: 20px" class="sub">
            <i class="el-icon-s-goods" style="color: green"></i>
            <p style="padding: 0;margin: 0">百科</p>
          </el-col>
        </el-row>
      </div>

    </div>
</template>

<script>
export default {
  name: 'zhihuFuncs',
  data () {
    return {
      url: 'https://pic1.zhimg.com/80/v2-e5e1f5d7179151e0704bb6f8a9ae5196_r.png'
    }
  }
}
</script>

<style scoped lang="scss">
  .sub:hover{
    color: yellow;
  }

</style>
