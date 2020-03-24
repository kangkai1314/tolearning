<template>
  <div class="zhihu-modules" >
    <el-row v-for="i in 3" :key="i ">
      <el-col :span="8" :key="i" v-for="i in 3">
        <p><i class="el-icon-document"></i>写答案</p>

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
