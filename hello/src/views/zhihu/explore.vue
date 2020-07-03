<template>
  <div class="ex_view" style="margin: auto">
    <el-row style="padding-top: 10px" :gutter="10">
      <el-col :span="16" style="font-size: 14px" >
        <!--<zhihu-banner></zhihu-banner>-->
        <el-row>
          <zhihu-content></zhihu-content>
        </el-row>

      </el-col>
      <el-col :span="8" >
        <zhihu-modules></zhihu-modules>
        <el-row style="background-color: white; margin-top: 10px">
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
  .ex_view{
   display: flex;
  }

</style>
