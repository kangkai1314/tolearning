<template>
    <div class="zhihu-modules">
      <el-row v-for="i in 2" :key="i">
        <el-col :span="8" :key="i" v-for="i in 3">
          <i class="el-icon-document"></i>
          <p>写答案</p>
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
  .zhihu-modules{

  }
  .subview{
  }

</style>
