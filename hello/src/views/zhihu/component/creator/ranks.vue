<template>
  <div class="rank_page">
    <h3 style="text-align: left">创作榜单</h3>
    <el-divider style="width: 100%"></el-divider>
    <el-image v-for="url in urls" :key="url" :src="url" style="width: 360px;height: 250px;margin: 10px"></el-image>
  </div>
</template>

<script>
export default {
  name: 'ranks',
  data () {
    return {
      urls: ['https://pic4.zhimg.com/v2-35400dde764ed7ba1d3b720ad449c033.jpg',
        'https://pic2.zhimg.com/v2-54fc3a5d1e33138dfa2e4d8359193151.jpg', 'https://pic2.zhimg.com/v2-54fc3a5d1e33138dfa2e4d8359193151.jpg',
        'https://pic2.zhimg.com/v2-9befd1feccdb22cf489ca7e55331b5bd.jpg', 'https://static.zhihu.com/heifetz/assets/coming-soon.b5aa31c7.png']
    }
  }
}
</script>

<style scoped>
  .rank_page{
    background-color: white;
    padding: 10px;
    margin: 10px;
  }

</style>
