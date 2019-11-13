<template>
    <div class="wrapper_left">
      <el-scrollbar wrap-class="scrollbar-wrapper">
        <el-menu :default-active="$route.path"
                 :collapse="isCollapse"
                 :collapse-transition="false"
                 mode="vertical">
          <sidebar-item
            v-for="route in app_routes"
            :key="route.path"
            :item="route"
            :base-path="route.path"
          />

        </el-menu>
      </el-scrollbar>
    </div>
</template>

<script>
import SidebarItem from "./SidebarItem";
export default {
  name: 'index',
  components: {SidebarItem},
  data(){
    return{
      isCollapse: true,
    }
  }
}
</script>

<style scoped>

</style>
