<template>
    <div class="video-card">
      <a :href="video.destUrl" target="_blank">
        <el-image :src="video.url"></el-image>
      </a>

      <div class="title">{{video.desc}}</div>
      <span class="title">{{video.author}}</span>

    </div>
</template>

<script>
export default {
  name: 'videoView',
  props: {
    video: {
      type: Object
    }
  }
}
</script>

<style scoped lang="scss">
  .video-card{
   cursor: pointer;
    width: 170px;
    margin: 10px;
  }

  @media  screen and (max-width: 1438px) {
    width: 170px;
  }
  span:before{
    content: 'up';
  }
  a{
    height: 96px;
  }
  .title{
    overflow: hidden;
    text-overflow: ellipsis;
    width: 170px;
    white-space: nowrap;

  }
  .title:hover{
    color: #20a0ff;

  }
  .el-image{
    width: 170px;
    height: 96px;
  }
  p,span,div{
    font-size: 14px;
  }

</style>
