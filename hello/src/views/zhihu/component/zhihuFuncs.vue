<template>
    <div class="zhihu_func_view">
      <el-row>      <el-image :src="url" style="width: 296px;padding: 0;margin: 0"></el-image>
      </el-row>

      <div class="view" style="display: flex;flex-wrap: wrap">
        <div v-for="i in 6" :key="i" style="margin: 20px;padding: 10px">
          <i class="el-icon-message" style="width: 36px;height: 36px"></i><p style="margin: 0;font-size: 30px" class="sub">live</p>

        </div>
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
