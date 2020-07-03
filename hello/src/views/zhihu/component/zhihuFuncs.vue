<template>
    <div class="zhihu_func_view">
      <div class="view">
        <el-row >
          <!--<el-col :span="8" v-for="i in 6" :key="i" style="padding: 10px">-->
            <!--<i class="el-icon-message"></i><p style="padding: 0;margin:0;font-size: 30px" class="sub">live</p>-->
          <!--</el-col>-->
          <el-col :span="8" style="padding: 10px;font-size: 22px" class="sub">
            <i class="el-icon-hot-water" style="color: yellow"></i>
            <p >live</p>
          </el-col>
          <el-col :span="8" style="padding: 10px;font-size: 22px" class="sub">
            <i class="el-icon-s-platform" style="color: green"></i>
            <p >书店</p>
          </el-col>
          <el-col :span="8" style="padding: 10px;font-size: 22px" class="sub">
            <i class="el-icon-tableware" style="color: blue"></i>
            <p >圆桌</p>
          </el-col>
        </el-row>
        <el-row >
          <!--<el-col :span="8" v-for="i in 6" :key="i" style="padding: 10px">-->
          <!--<i class="el-icon-message"></i><p style="padding: 0;margin:0;font-size: 30px" class="sub">live</p>-->
          <!--</el-col>-->
          <el-col :span="8" style="padding: 10px;font-size: 20px" class="sub">
            <i class="el-icon-hot-water" style="color: #20a0ff"></i>
            <p >付费咨询</p>
          </el-col>
          <el-col :span="8" style="padding: 10px;font-size: 20px" class="sub">
            <i class="el-icon-s-shop" style="color: green"></i>
            <p >专栏</p>
          </el-col>
          <el-col :span="8" style="padding: 10px;font-size: 20px" class="sub">
            <i class="el-icon-s-goods" style="color: green"></i>
            <p >百科</p>
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
  .view{
    margin-top: 10px;
  }
  .sub:hover{
    color: yellow;
  }
  i{
    font-size: 24px;
  }
  p{
    font-size: 15px;
    margin: 0;
    padding: 0;
    color: #8590a6;
  }

</style>
