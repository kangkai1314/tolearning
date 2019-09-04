<template>
    <div class="other-view" >
      <el-row><h3 style="float: left">推广</h3></el-row>
      <el-row style="padding: 0">
        <el-col :span="18">
          <el-image v-for="i in 8" :key="i" style="width: 160px;height: 100px;margin-left: 20px"
          :src="url"></el-image>

        </el-col>
        <el-col :span="6">
          <ol>
            <li v-for="i in 10" :key="i">comic {{i}}</li>
          </ol>
        </el-col>

      </el-row>

    </div>
</template>

<script>
export default {
  name: 'subModel',
  data () {
    return {
      url: 'https://i0.hdslb.com/bfs/archive/e0724b5ed907ef42e1ca6f51ee4c7452be19a0ee.jpg@160w_100h.jpg'
    }
  }
}
</script>

<style scoped>
.other-view{
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
