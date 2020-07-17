<template>
  <div class="fixed-nav" >
    <el-menu mode="vertical">
      <el-menu-item v-for="menu in titles" :key="menu.id">
        {{menu.name}}
      </el-menu-item>
    </el-menu>

  </div>
</template>

<script>
export default {
  name: 'fixedNav',
  data () {
    return {
      titles: [{id: 1, name: '直播', value: 'live'}, {id: 2, name: '动画', value: 'animate'},
        {id: 3, name: '番剧', value: 'fan'}, {id: 4, name: '国创', value: 'country'},
        {id: 5, name: '漫画', value: 'comic'}, {id: 6, name: '音乐', value: 'music'},
        {id: 7, name: '游戏', value: 'game'}, {id: 8, name: '舞蹈', value: 'break'},
        {id: 9, name: '知识', value: 'knowledge'}, {id: 10, name: '生活', value: 'life'},
        {id: 11, name: '数码', value: 'digital'}, {id: 12, name: '鬼畜', value: 'gui'},
        {id: 13, name: '时尚', value: 'fashion'}
      ]

    }
  }
}
</script>

<style scoped lang="scss">
 .fixed-nav{
   position: fixed;
   top:0;
   right:30px
 }

  .el-menu-item{
    line-height: 12px;
    text-align: center;
    cursor: pointer;
    transition: all .2s;
    /*-ms-user-select: none;*/
    /*user-select: none;*/
    /*background: #fff;*/
  }
  .el-menu-item:hover,.el-menu-item:hover{
    background-color: #20a0ff;
  }
  /deep/
  .el-menu li{
    padding-left: 0;
  }

</style>
