<template>
    <div class="menu_view">
     <el-menu mode="horizontal">
       <el-menu-item v-for="menu in menus" :key="menu.id" :index="menu.name">{{menu.name}}</el-menu-item>
       


     </el-menu>
    </div>
</template>

<script>
    export default {
        name: "bakeMenu",
      props:{
          menus:{
            type:Array,
          }
      }
    }
</script>

<style scoped>

</style>
