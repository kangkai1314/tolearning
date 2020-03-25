<template>
    <div class="zhihu_func_view">
      <el-row>      <el-image :src="url" style="width: 296px;padding: 0;margin: 0"></el-image>
      </el-row>

      <div class="view">
        <el-row >
          <el-col :span="8" v-for="i in 6" :key="i" style="padding: 10px">
            <i class="el-icon-message"></i><p style="padding: 0;margin:0;font-size: 30px" class="sub">live</p>
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
