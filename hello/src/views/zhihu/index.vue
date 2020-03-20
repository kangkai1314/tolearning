<template>
    <div class="zhihu-page">
      <top-menu style="margin: 0 auto"></top-menu>
      <div class="zhihu-content" >
       <router-view></router-view>
      </div>
    </div>
</template>

<script>
import TopMenu from './component/topMenu'
export default {
  name: 'index',
  components: {TopMenu}
}
</script>

<style scoped lang="scss">
  .zhihu-page{
  }
  .header{
    height: 52px;
    padding: 0;
    width: 800px;
  }
  .zhihu-content{
    background-color: transparent;
    display: flex;

  }
  .banner{
    width: 700px;
    height: 200px;
    background-color: #b3d8ff;

  }
  .modules{
    width: 200px;
    height: 300px;
    background-color: #999999;

  }
  .content{
    width: 700px;
    height: 700px;
    background-color: #20a0ff;

  }

</style>
