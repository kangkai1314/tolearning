<template>
    <div class="main-part">
      <div class="content-part">
        <div class="main-part-head">
          <div class="head-title">
           <h3>{{part.name}}</h3>
          </div>
          <div class="head-op">
           <el-button >更多<i class="el-icon-arrow-right"></i></el-button>
          </div>

        </div>
        <div class="main-part-content">
          <template v-if="showAnimate">
            <animate-view></animate-view>
          </template>
          <template v-else>
            <video-view  :video="videoObj" v-for="i in 8" :key="i"></video-view>

          </template>
        </div>
      </div>
      <div class="rank-part">
            <bili-rank></bili-rank>
      </div>

    </div>
</template>

<script>
import BiliRank from './rank'
import VideoView from './videoView'
import AnimateView from './animateView'
export default {
  name: 'partView',
  components: {AnimateView, VideoView, BiliRank},
  data () {
    return {
      videoObj: {
        url: 'https://i0.hdslb.com/bfs/archive/02b6c166dbf56d185230425dcc10dc7fa43f96a2.jpg@412w_232h_1c_100q.jpg',
        desc: '教你如何在极品飞车里痛车——亚丝娜（结城明日奈）',
        author: '不要叫我老玻璃',
        destUrl: '/'
      }

    }
  },
  props: ['part'],
  computed: {
    showAnimate: function () {
      return this.part.value === 'animate'
    }
  }
}
</script>

<style scoped lang="scss">
  .main-part{
    padding: 10px;
    display: flex;
    justify-content: space-between;
    margin:  0 auto;
    align-items: flex-start;
  }
  .main-part-content{
    display: flex;
    flex-wrap: wrap;
  }
  .main-part-head{
    display: flex;
    justify-content: space-between;
  }
  .content-part{
    margin-right: 10px;
    width: 80%;
    box-sizing: border-box;
  }

</style>
