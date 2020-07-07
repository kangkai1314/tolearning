<template>
    <div class="creator-view">
      <el-row :gutter="10" >
        <el-col :span="4" style="margin-top: 10px">
          <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" router>

            <el-menu-item-group >
              <span slot="title" style="padding: 10px;font-size: 15px;font-weight: bold"><i class="el-icon-user-solid"></i>创作者中心</span>
              <el-menu-item index="/zhihu/creator/main">主页</el-menu-item>
              <el-menu-item index="/zhihu/creator/activity">活动中心</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group >
              <span slot="title" style="padding: 10px;font-size: 15px;font-weight: bold"><i class="el-icon-edit"></i>创作</span>
              <el-menu-item index="/zhihu/creator/invited">问题推荐</el-menu-item>
              <el-menu-item index="/zhihu/creator/video">上传视频</el-menu-item>
              <el-menu-item index="1-1">创作手册</el-menu-item>
              <el-menu-item index="1-2">圆桌手册</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group >
              <span slot="title" style="padding: 10px;font-size: 15px;font-weight: bold"><i class="el-icon-data-analysis"></i>创作数据</span>
              <el-menu-item index="/zhihu/creator/content">内容分析</el-menu-item>
              <el-menu-item index="/zhihu/creator/ranks">创作榜单</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group >
              <span slot="title" style="padding: 10px;font-size: 15px;font-weight: bold"><i class="el-icon-user-solid"></i>更多曝光</span>
              <el-menu-item index="1-1">内容自荐</el-menu-item>
              <el-menu-item index="1-2">圆桌主持人</el-menu-item>
              <el-menu-item index="1-2">专题主持人</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group >
              <span slot="title" style="padding: 10px;font-size: 15px;font-weight: bold"><i class="el-icon-user-solid"></i>更多曝光</span>
              <el-menu-item index="1-1">内容自荐</el-menu-item>
              <el-menu-item index="1-2">圆桌主持人</el-menu-item>
              <el-menu-item index="1-2">专题主持人</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group >
              <span slot="title" style="padding: 10px;font-size: 15px;font-weight: bold"><i class="el-icon-user-solid"></i>更多曝光</span>
              <el-menu-item index="1-1">内容创收</el-menu-item>
              <el-menu-item index="1-2">赞赏功能</el-menu-item>
              <el-menu-item index="1-2">知乎Live</el-menu-item>
              <el-menu-item index="1-2">品牌任务</el-menu-item>

            </el-menu-item-group>
            <el-menu-item-group >
              <span slot="title" style="padding: 10px;font-size: 15px;font-weight: bold"><i class="el-icon-user-solid"></i>账号</span>
              <el-menu-item index="1-1">成长等级</el-menu-item>
              <el-menu-item index="1-2">权益中心</el-menu-item>
              <el-menu-item index="1-2">账号信息</el-menu-item>
              <el-menu-item index="1-2">常见问题</el-menu-item>

            </el-menu-item-group>
            <el-menu-item-group >
              <span slot="title" style="padding: 10px;font-size: 15px;font-weight: bold"><i class="el-icon-user-solid"></i>其他</span>
              <el-menu-item index="1-1">瓦力保镖</el-menu-item>
              <el-menu-item index="1-2">版权服务</el-menu-item>

            </el-menu-item-group>
          </el-menu>

        </el-col>

        <el-col :span="20" ><router-view></router-view></el-col>
      </el-row>
    </div>
</template>

<script>
export default {
  name: 'creator'
}
</script>

<style scoped lang="scss">
  @import "../../styles/mixin";
.creator-view {
  width: 80%;
  margin: auto;

}
  .el-menu{
    text-align: center;
    padding: 10px;
    @include rightMenu('center');
  }

</style>
