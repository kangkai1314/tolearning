<template>
    <div class="bili-page">
      <div class="bili-head" ></div>
      <div class="bili-wrap">
        <bili-header></bili-header>
      </div>
      <div class="first-screen">

      </div>
      <div class="bili-content">
        <part-view v-for="title in titles" :key="title.id" :part="title"></part-view>
      </div>
      <ke-fu></ke-fu>
      <fixed-nav></fixed-nav>

    </div>
</template>

<script>
import BiliHeader from './component/header'
import VideoView from './component/videoView'
import PartView from './component/partView'
import KeFu from "./component/keFu";
import FixedNav from "./component/fixedNav";
export default {
  name: 'index',
  components: {FixedNav, KeFu, PartView, VideoView, BiliHeader},
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
  @import "../../styles/mixin";
  .bili-head{
  background-image: url(https://i0.hdslb.com/bfs/archive/22650682fd25a4a5aa96dd9ef53190c6b8d54912.png);
    min-height: 155px;
    justify-content: center;
    background-position: center 0;
    background-size: cover;
    display: flex;

  }
  .bili-wrap{
    margin: 0 auto;
    width: 999px;
  }

  @media screen and (max-width: 138px){
  .bili-wrap{
    width: 999px;
  }
  }

  p{
    background-color: #20a0ff;
  }
  .bili-content{
    margin:  0 auto;
    width: 999px;
    /deep/
    .el-button{
      @include biliButton;
    }
  }

</style>
