<template>
  <div class="ex_view" style="margin: auto">
    <el-row style="padding: 0;margin: 0">
      <el-col :span="18" >
        <zhihu-banner></zhihu-banner>
        <el-row>
          <zhihu-content></zhihu-content>
        </el-row>

      </el-col>
      <el-col :span="6" >
        <zhihu-modules></zhihu-modules>
        <el-row style="margin-top: 10px;background-color: white; width: 296px;">
          <div class="author_view" style="display: flex;justify-content: space-around">
            <p><i class="el-icon-phone"> </i>作者中心</p>
            <p>去开通<i class="el-icon-arrow-right"></i></p>

          </div>

        </el-row>
        <el-row style="padding: 0;margin-top: 10px">
          <zhihu-funcs></zhihu-funcs>

        </el-row>
      </el-col>

    </el-row>

  </div>

</template>

<script>
import ZhihuBanner from './component/zhihuBanner'
import ZhihuContent from './component/zhihuContent'
import ZhihuModules from './component/zhihuModules'
import ZhihuFuncs from "./component/zhihuFuncs";
export default {
  name: 'explore',
  components: {ZhihuFuncs, ZhihuModules, ZhihuContent, ZhihuBanner}
}
</script>

<style scoped lang="scss">
  .zhihu-explore{

  }

</style>
