<template>
  <div class="left-view">
    <!--<el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" :router="true">-->
      <!--<el-submenu index="1">-->
        <!--<template slot="title">-->
          <!--<i class="el-icon-location"></i>-->
          <!--<span slot="title">导航一</span>-->
        <!--</template>-->
        <!--<el-menu-item-group>-->
          <!--<span slot="title">分组一</span>-->
          <!--<el-menu-item index="/study/bilibili">b站</el-menu-item>-->
          <!--<el-menu-item index="/study/zhihu">zhihu</el-menu-item>-->
        <!--</el-menu-item-group>-->
        <!--<el-menu-item-group title="分组2">-->
          <!--<el-menu-item index="/study/soul">soul</el-menu-item>-->
        <!--</el-menu-item-group>-->
        <!--<el-submenu index="1-4">-->
          <!--<span slot="title">选项4</span>-->
          <!--<el-menu-item index="1-4-1">选项1</el-menu-item>-->
        <!--</el-submenu>-->
      <!--</el-submenu>-->
      <!--<el-menu-item index="2">-->
        <!--<i class="el-icon-menu"></i>-->
        <!--<span slot="title">导航二</span>-->
      <!--</el-menu-item>-->
      <!--<el-menu-item index="3" disabled>-->
        <!--<i class="el-icon-document"></i>-->
        <!--<span slot="title">导航三</span>-->
      <!--</el-menu-item>-->
      <!--<el-menu-item index="4">-->
        <!--<i class="el-icon-setting"></i>-->
        <!--<span slot="title">导航四</span>-->
      <!--</el-menu-item>-->
    <!--</el-menu>-->
    <el-menu
      :default-active="$route.path"
      :collapse="isCollapse"
      background-color="black"
      text-color="white"
      active-text-color="red"
      :collapse-transition="false"
      mode="vertical"
    >

      <sidebar-item  v-for="route in app_routers"
                     :key="route.path"
                     :item="route"
                     :base-path="route.path"></sidebar-item>
    </el-menu>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import SidebarItem from '../views/layout/components/Sidebar/SidebarItem'

export default {
  name: 'leftNav',
  components: {SidebarItem},
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['app_routers', 'sidebar']),
    isCollapse () {
      return !this.sidebar.opened
    }
  },
  methods: {
    ...mapActions({
      toggleSideBar: 'toggleSideBar'
    }),
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  created () {
    console.log('created')
    console.log(this.app_routers)
  }
}
</script>

<style scoped>

</style>
