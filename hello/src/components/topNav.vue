<template>
    <div class="nav_view">
     <!--<el-menu mode="horizontal" style="height: 70px" active-text-color="#409eff" background-color="black" :router="true">-->
      <!--<el-menu-item v-for="menu in menus" :key="menu.id" :index="menu.path" >{{menu.name}}</el-menu-item>-->
       <!--<el-menu-item><el-input></el-input></el-menu-item>-->
       <!--<el-menu-item style="float: right" index="person">个人中心</el-menu-item>-->
       <!--<el-menu-item style="float: right" index="/work/setting">设置</el-menu-item>-->
       <!--<el-menu-item style="float: right" index="/work/login">登录</el-menu-item>-->
       <!--<el-menu-item><el-avatar></el-avatar></el-menu-item>-->
     <!--</el-menu>-->
      <el-row>
        <el-col :span="4">学习网站<el-image></el-image></el-col>
        <el-col :span="4">      <breadcrumb></breadcrumb>
        </el-col>
        <el-col :span="16">
          <el-dropdown style="margin: 10px;padding: 10px;float: right">
            <span class="el-dropdown-link">
              {{userName}}
              <i class="el-icon-arrow-down"></i></span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人信息</el-dropdown-item>
              <el-dropdown-item>设置</el-dropdown-item>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>

    </div>
</template>

<script>
import Breadcrumb from './Breadcrumb/index'
export default {
  name: 'topNav',
  components: {Breadcrumb},
  data () {
    return {
      menus: [{id: 1, name: '首页', path: '/'}, {id: 2, name: '工作', path: '/work/job'}, {id: 3, name: '租房', path: '/work/rent'}, {id: 4, name: '相亲', path: '/work/date'}],
      userName: 'kangkai'
    }
  }
}
</script>

<style scoped lang="scss">
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>
