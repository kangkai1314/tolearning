<template>
  <div class="top-header">

    <el-menu mode="horizontal" :default-active="1" class="menu_class" >
      <el-menu-item style="display: flex">
        <el-menu-item><img src="../../../assets/zhihu.png" style="width: 50px;height: 50px"/></el-menu-item>
        <el-menu-item index="1">推荐</el-menu-item>
        <el-menu-item index="2">关注</el-menu-item>
        <el-menu-item index="3" >热榜</el-menu-item>
      </el-menu-item>

         <el-menu-item>
           <el-button style="background-color: #20a0ff;color: white">提问</el-button>
           <el-input placeholder="请输入你感兴趣的内容" prefix-icon="el-icon-search"></el-input>

         </el-menu-item>

    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'scrollMenu'
}
</script>

<style scoped lang="scss">
  .menu-class{
    width: 1000px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }


</style>
