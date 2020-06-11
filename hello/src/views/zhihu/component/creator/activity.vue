<template>
    <div class="activity_page">
      <h3 style="text-align: left">活动中心</h3>
      <el-divider style="width: 100%"></el-divider>
      <el-image v-for="url in urls" :key="url" :src="url" style="width: 360px;height: 250px;margin: 10px"></el-image>
    </div>
</template>

<script>
export default {
  name: 'activity',
  data () {
    return {
      urls: ['https://pic1.zhimg.com/v2-5c9f2263a8be887d40357e416ec2fa08.jpg', 'https://pic4.zhimg.com/v2-f8dbcfa2ec6c5453a5a5b9a69ad20697.jpg',
        'https://pic4.zhimg.com/v2-89a649fccb20e5c7a14b63135446c9a7.jpg', 'https://static.zhihu.com/heifetz/assets/coming-soon.b5aa31c7.png']
    }
  }
}
</script>

<style scoped>
  .activity_page{
    background-color: white;
    padding: 10px;
    margin: 10px;
  }

</style>
