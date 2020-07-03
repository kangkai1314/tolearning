<template>
    <el-menu mode="vertical" style="margin-top: 10px">
      <el-menu-item index="/collection">
        <template slot="title" >
          <div style="display: flex;justify-content: space-between;align-items: center">
            <div>            <i class="el-icon-star-on"></i><span>我的收藏</span>
            </div>
            <el-tag style="margin-left: 20px">555</el-tag>
          </div>

        </template></el-menu-item>
      <el-menu-item>
        <template slot="title">
          <div style="display: flex;justify-content: space-between;align-items: center">
            <div>                     <i class="el-icon-question"></i><span>我关注的问题</span>

            </div>
            <el-tag style="margin-left: 20px">555</el-tag>
          </div>
        </template>
      </el-menu-item>
      <el-menu-item>
        <template slot="title">
          <div style="display: flex;justify-content: space-between;align-items: center">
            <div>                              <i class="el-icon-user-solid"></i><span>我的邀请</span>

            </div>
            <el-tag style="margin-left: 20px">555</el-tag>

          </div>
        </template>
      </el-menu-item>
      <el-menu-item>
        <template slot="title">
          <i class="el-icon-user-solid"></i><span>我的邀请</span>
        </template>
      </el-menu-item>
      <el-menu-item>
        <template slot="title">
          <i class="el-icon-user-solid"></i><span>我的余额</span>
        </template>
      </el-menu-item>
      <el-menu-item>
        <template slot="title">
          <i class="el-icon-user-solid"></i><span>站务中心</span>
        </template>
      </el-menu-item><el-menu-item>
      <template slot="title">
        <i class="el-icon-user-solid"></i><span>帮助中心</span>
      </template>
    </el-menu-item>
      <el-menu-item>
        <template slot="title">
          <i class="el-icon-user-solid"></i><span>版权服务中心</span>
        </template>
      </el-menu-item>

    </el-menu>
</template>

<script>
export default {
  name: 'zhihuMenu'
}
</script>

<style scoped>

</style>
