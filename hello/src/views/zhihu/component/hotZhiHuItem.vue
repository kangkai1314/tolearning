<template>
  <div class="hot-view">
    <div class="hot-zhihu-item" v-for="i in 50" :key="i">
      <el-row style="padding: 10px" >
        <el-col :span="12">
          <p style="font-weight: bold">{{i}} 如何评价必胜客新出的158元自助餐 </p>
          <div class="content">
            <p style="padding: 0;margin: 0">
              90 分钟限时，158 元 / 位，具体性价比如何？</p>
            <el-row>
              <i class="el-icon-fi"><span>1999热度</span></i>
              <el-button icon="el-icon-s-promotion" type="text">分享</el-button>
            </el-row>
          </div>
        </el-col>
        <el-col :span="12">
          <el-image :src="url" style="width: 200px;height:105px "></el-image>
        </el-col>
      </el-row>

    </div>
  </div>
</template>

<script>
export default {
  name: 'hotZhiHuItem',
  data () {
    return {
      url: 'https://pic2.zhimg.com/80/v2-1e0a0d8a294dbeacd73a34d8c053b4e4_400x224.jpg'
    }
  }
}
</script>

<style scoped>

</style>
