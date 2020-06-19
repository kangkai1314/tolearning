<template>
  <div class="ex_view" style="margin: auto">
    <el-row >
      <el-col :span="18" style="width: 796px;margin-right: 10px;margin-top: 10px" >
        <!--<zhihu-banner></zhihu-banner>-->
        <el-row>
          <zhihu-content></zhihu-content>
        </el-row>

      </el-col>
      <el-col :span="5" style="width: 296px">
        <zhihu-modules></zhihu-modules>
        <el-row style="margin-top: 10px;background-color: white; width: 296px;">
         <module-creator></module-creator>

        </el-row>
        <el-row style="padding: 0;margin-top: 10px;background-color: white">
          <zhihu-funcs></zhihu-funcs>

        </el-row>
        <el-row style="margin-top: 10px">
          <zhihu-menu></zhihu-menu>
        </el-row>
      </el-col>

    </el-row>

  </div>

</template>

<script>
import ZhihuBanner from './component/zhihuBanner'
import ZhihuContent from './component/zhihuContent'
import ZhihuModules from './component/zhihuModules'
import ZhihuFuncs from './component/zhihuFuncs'
import ZhihuMenu from './component/zhihuMenu'
import ModuleCreator from './component/creator/moduleCreator'
export default {
  name: 'explore',
  components: {ModuleCreator, ZhihuMenu, ZhihuFuncs, ZhihuModules, ZhihuContent, ZhihuBanner}
}
</script>

<style scoped lang="scss">
  .zhihu-explore{

  }

</style>
