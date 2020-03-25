<template>
  <div class="top-header">
    <el-menu mode="horizontal" :default-active="1" class="menu-class">
      <el-menu-item><el-image :src="url"></el-image></el-menu-item>
      <el-menu-item v-for="m in menus" :key="m.id" :index="m.id" >{{m.name}}</el-menu-item>
      <el-menu-item>
        <el-input aria-placeholder="请输入你的信息" suffix-icon="el-icon-search" class="search-input"></el-input></el-menu-item>
      <el-menu-item><el-button class="button-class">提问</el-button></el-menu-item>
      <el-menu-item >
        <el-badge :value="20" class="item">        <el-popover trigger="hover">
          <el-tabs>
            <el-tab-pane >
              <i slot="label" class="el-icon-bank-card">
              </i>
              <div class="mess" v-for="i in 5" :key="i" style="padding: 10px;margin: 5px; ">
                <el-link>xxx用户</el-link>回答了 <el-link>xxxxx问题</el-link>
              </div>

            </el-tab-pane>
            <el-tab-pane >
              <i slot="label" class="el-icon-bank-card"></i>

            </el-tab-pane>
            <el-tab-pane >
              <i slot="label" class="el-icon-bank-card"></i>

            </el-tab-pane>
          </el-tabs>
          <div class="bottom_notify" style="display: flex;justify-content: space-between">
            <span><i class="el-icon-setting"></i>设置</span>
            <span>查看全部通知</span>

          </div>
          <i class="el-icon-alarm-clock"
                    slot="reference"></i></el-popover>
        </el-badge>
      </el-menu-item>
      <el-menu-item><el-badge :value="20" class="item"><el-icon class="el-icon-message"
                                                                style="width: 36px"></el-icon></el-badge></el-menu-item>
      <el-menu-item><el-avatar :src="url1"></el-avatar></el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'topMenu',
  data () {
    return {
      menus: [{id: 1, name: '主页'}, {id: 2, name: '发现'}, {id: 3, name: '等你来答'}],
      url: '',
      url1: 'https://pic1.zhimg.com/6ffe730f076d5378c03ca8ea2222cee1_is.jpg'
    }
  }
}
</script>

<style scoped>
  .item{

  }

  /deep/
  .el-input__inner{
    background-color: transparent;
    width: 256px;
  }
  .button-class{
    color: #fff;
    background-color: #0084ff;
  }
  .menu-class{
 }
  .top-header{
    width: 100%;
    margin: 0 110px;
    display: flex;
  }

</style>
