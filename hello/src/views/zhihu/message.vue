<template>
  <div class="all-view">
    <div class="notification-view">
      <div class="notification-head">
        <h3 style="font-size: 19px">通知中心</h3>
        <el-button icon="el-icon-setting" type="text" @click="goSetting" style="font-size: 14px">设置</el-button>
      </div>
      <div class="notification-content">
        <div style="display: flex;justify-content: space-between"> <h3>最近收到的通知</h3>
          <el-dropdown>
  <span class="el-dropdown-link">
    全部类别<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>全部类别</el-dropdown-item>
              <el-dropdown-item>关注我的</el-dropdown-item>
              <el-dropdown-item>赞同与喜欢</el-dropdown-item>
              <el-dropdown-item>评论与回复</el-dropdown-item>
              <el-dropdown-item>邀请</el-dropdown-item>
              <el-dropdown-item>提到我的</el-dropdown-item>
              <el-dropdown-item>站务通知</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown></div>

        <message-view></message-view>

      </div>
    </div>
    <div class="other-view">
      <zhihu-modules></zhihu-modules>
      <module-creator></module-creator>
      <zhihu-funcs></zhihu-funcs>
      <zhihu-menu></zhihu-menu>
    </div>
  </div>

</template>

<script>
import MessageView from './messageView'
import ZhihuModules from './component/zhihuModules'
import ModuleCreator from './component/creator/moduleCreator'
import ZhihuFuncs from './component/zhihuFuncs'
import ZhihuMenu from './component/zhihuMenu'
export default {
  name: 'message',
  components: {ZhihuMenu, ZhihuFuncs, ModuleCreator, ZhihuModules, MessageView},
  methods: {
    goSetting: function () {
      this.$router.push('/zhihu/setting')
    }
  }
}
</script>

<style scoped>
  .all-view{
    margin: 0 110px;
    width: 100%;
    display: flex;
  }
  .notification-view{
    flex:4;
    margin-top: 10px;
    margin-right: 10px;
  }
  .other-view{
    flex:1;
  }
  .notification-head{
    padding: 20px;
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #f4f4f5;
  }
  .notification-content{
  background-color: #ffffff;
    display: flex;
    flex-direction: column;
    padding: 10px;
  }

</style>
