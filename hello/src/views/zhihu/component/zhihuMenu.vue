<template>
    <el-menu mode="vertical" style="margin-top: 10px">
      <el-menu-item index="/collection">
        <template slot="title" >

            <div>            <i class="el-icon-star-on"></i><span>我的收藏</span>
            </div>
            <el-tag style="margin-left: 20px">555</el-tag>

        </template></el-menu-item>
      <el-menu-item>
        <template slot="title">

            <div>                     <i class="el-icon-question"></i><span>我关注的问题</span>

            </div>
            <el-tag style="margin-left: 20px">555</el-tag>
        </template>
      </el-menu-item>
      <el-menu-item>
        <template slot="title">
            <div>                              <i class="el-icon-user-solid"></i><span>我的邀请</span>

            </div>
            <el-tag style="margin-left: 20px">555</el-tag>

        </template>
      </el-menu-item>
      <el-menu-item>
        <template slot="title">
          <div>          <i class="el-icon-user-solid"></i><span>我的邀请</span>
          </div>
        </template>
      </el-menu-item>
      <el-menu-item>
        <template slot="title">
          <div>
            <i class="el-icon-user-solid"></i><span>我的余额</span>
          </div>
        </template>
      </el-menu-item>
      <el-menu-item>
        <template slot="title">
          <div>          <i class="el-icon-user-solid"></i><span>站务中心</span>
          </div>
        </template>
      </el-menu-item><el-menu-item>
      <template slot="title">
        <div>
          <i class="el-icon-user-solid"></i><span>帮助中心</span>
        </div>
      </template>
    </el-menu-item>
      <el-menu-item>
        <template slot="title">
          <div>
            <i class="el-icon-user-solid"></i><span>版权服务中心</span>
          </div>
        </template>
      </el-menu-item>

    </el-menu>
</template>

<script>
export default {
  name: 'zhihuMenu'
}
</script>

<style scoped lang="scss">
  @import "../../../styles/mixin";
  .el-menu{
    padding-top: 10px;
    @include rightMenu('space-between');
    .el-menu-item:active{
      color: #0084FF;
      background: rgba(0,132,255,0.08);
    }

  }

</style>
