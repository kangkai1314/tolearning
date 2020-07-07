<template>
  <div class="top-header">

    <el-menu mode="horizontal" :default-active="1" class="menu-class" router>
      <el-menu-item><img src="../../../assets/zhihu.png" style="width: 50px;height: 50px"/></el-menu-item>
      <el-menu-item v-for="m in menus" :key="m.id" :index="m.index" >{{m.name}}</el-menu-item>
      <el-menu-item>
        <el-input aria-placeholder="请输入你的信息" suffix-icon="el-icon-search" class="search-input"></el-input></el-menu-item>
      <el-menu-item><el-button class="button-class">提问</el-button></el-menu-item>


      <el-menu-item  >
          <el-badge :value="20" class="item" style="padding: 0;width: 20px" >        <el-popover trigger="hover">
            <div >
              <el-tabs >
                <el-tab-pane  >
                  <i slot="label" class="el-icon-bank-card" style="font-size: 22px">
                  </i>
                  <div class="mess" v-for="i in 5" :key="i" style="padding: 10px;margin: 5px; ">
                    <el-link>xxx用户</el-link>回答了 <el-link>xxxxx问题</el-link>
                  </div>

                </el-tab-pane >
                <el-tab-pane>
                  <i slot="label" class="el-icon-bank-card" style="font-size: 22px"></i>

                </el-tab-pane>
                <el-tab-pane >
                  <i slot="label" class="el-icon-bank-card" style="font-size: 22px"></i>

                </el-tab-pane>
              </el-tabs>
              <div class="bottom_notify" style="display: flex;justify-content: space-between">
                <el-button type="text" icon="el-icon-setting" @click="goSetting">设置</el-button>
                <el-button @click="goMessage" type="text">查看全部通知</el-button>

              </div>
            </div>

            <i class="el-icon-alarm-clock"
               slot="reference"  style="font-size: 20px"></i></el-popover>
          </el-badge>
        </el-menu-item>

        <el-menu-item><el-badge :value="message.count" class="item" v-if="message.count!==0">
          <el-popover trigger="hover"
                                                                 >
          <div  class="hover-view" style="width: 360px">
            <h3 style="border-bottom: 1px solid #f4f4f5;text-align: center;font-size: 16px;padding: 10px">我的私信</h3>
            <div  style="border-bottom: 1px solid #f4f4f5;padding: 10px;display: flex;align-items: center" v-for="i in 5" :key="i">
              <div style="margin-right: 20px">              <el-avatar shape="square" :src="url"></el-avatar>
              </div>
              <div >              <p>知乎联盟</p>
                <span>一周小结</span>
              </div>
            </div>
          </div>
          <i class="el-icon-message" slot="reference"></i>
        </el-popover>
        </el-badge>
          <el-popover trigger="hover" v-else
          >
            <div  class="hover-view" style="width: 360px">
              <h3 style="border-bottom: 1px solid #f4f4f5;text-align: center;font-size: 16px;padding: 10px">我的私信</h3>
              <div  style="border-bottom: 1px solid #f4f4f5;padding: 10px;display: flex;align-items: center" v-for="i in 5" :key="i">
                <div style="margin-right: 20px">              <el-avatar shape="square" :src="url"></el-avatar>
                </div>
                <div >              <p>知乎联盟</p>
                  <span>一周小结</span>
                </div>
              </div>
            </div>
            <i class="el-icon-message" slot="reference"></i>
          </el-popover>
        </el-menu-item>
      <el-menu-item >
        <el-dropdown @command="handleCommand">
          <el-avatar :src="url1" class="el-dropdown-link" >
          </el-avatar>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="page"><i class="el-icon-user-solid"></i>我的主页</el-dropdown-item>
            <el-dropdown-item command="creator"><i class="el-icon-s-platform"></i>创作者中心</el-dropdown-item>
            <el-dropdown-item command="settings"><i class="el-icon-setting"></i>设置</el-dropdown-item>
            <el-dropdown-item  command="exit"><i class="el-icon-switch-button"></i>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

      </el-menu-item>

    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'topMenu',
  data () {
    return {
      menus: [{id: 1, name: '主页', index: '/zhihu/index'}, {id: 2, name: '发现', index: '/zhihu/find'}, {id: 3, name: '等你来答', index: '/zhihu/question'}],
      url1: 'https://pic1.zhimg.com/6ffe730f076d5378c03ca8ea2222cee1_is.jpg',
      message: {
        count: 100,
        messages: []
      },
      notification: {
        count: 100,
        notifs: []
      }
    }
  },
  methods: {
    handleCommand: function (com) {
      if (com === 'creator') {
        this.$router.push('/zhihu/creator/main')
      } else if (com === 'page') {
        this.$router.push('/zhihu/person')
      } else if (com === 'settings') {
        this.$router.push('/zhihu/setting')
      }
    },
    goSetting: function () {
      this.$router.push('/zhihu/setting')
    },
    goMessage: function () {
      this.$router.push('/zhihu/message')
    }
  }
}
</script>

<style scoped lang="scss">
 @import "../../../styles/mixin";

  /deep/
  .el-input__inner{
    background-color: transparent;
    width: 256px;
  }
  .button-class{
    @include blueButton;
  }
  .menu-class{
    display: flex;
    margin: 0 auto;
    width: 1000px;
 }
  .top-header{

  }
  /deep/
  .el-badge__content.is-fixed {
    top: 15px;

  }
  .el-dropdown-menu {

  }

</style>
