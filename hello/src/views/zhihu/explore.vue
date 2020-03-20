<template>
      <el-row style="width: 100%;margin: 5px auto;padding: 0">
        <el-col :span="16" style="margin-right: 5px" >
          <zhihu-banner></zhihu-banner>

        </el-col>
        <el-col :span="6">
          <zhihu-modules></zhihu-modules>
        </el-col>

      </el-row>

</template>

<script>
import ZhihuBanner from './component/zhihuBanner'
import ZhihuContent from './component/zhihuContent'
import ZhihuModules from './component/zhihuModules'
export default {
  name: 'explore',
  components: {ZhihuModules, ZhihuContent, ZhihuBanner}
}
</script>

<style scoped lang="scss">
  .zhihu-explore{

  }

</style>
