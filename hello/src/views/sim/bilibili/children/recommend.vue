<template>
    <div class="recommend-view">
      <el-row>
        <el-col :span="12">
          <el-carousel height="150px" >
            <el-carousel-item v-for="item in 4" :key="item">

              <el-image :src="url"></el-image>
            </el-carousel-item>
          </el-carousel>
        </el-col>
        <el-col :span="12">
          <el-carousel height="150px" >
            <el-carousel-item v-for="item in 4" :key="item">

              <el-image v-for="i in 4" :key="i" :src="url1" style="margin: 10px"></el-image>
            </el-carousel-item>
          </el-carousel>
        </el-col>
      </el-row>

    </div>
</template>

<script>
export default {
  name: 'recommend',
  data () {
    return {
      url: 'https://i0.hdslb.com/bfs/archive/394f9b736cea3c930cde1a8221cdc6762f3f7d69.jpg@880w_440h.webp',
      url1: 'https://i1.hdslb.com/bfs/archive/96aa61ac8f0188c5ec1d19e5fbd88bea3d353b67.png@160w_100h.png'
    }
  }
}
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

</style>
