<template>
    <el-tabs style="background-color: white;width: 796px">
      <el-tab-pane label="推荐" style="padding: 10px">
        <div class="content" v-for=" i in 100" :key="i" style="margin-top: 10px">
          <zhihu-item></zhihu-item>
        </div>
      </el-tab-pane>
      <el-tab-pane label="关注">
        <div class="content" v-for=" i in 100" :key="i" style="margin-top: 10px">
          <zhi-hu-attention></zhi-hu-attention>
        </div>

      </el-tab-pane>
      <el-tab-pane label="热榜">
        <hot-item></hot-item>
      </el-tab-pane>
    </el-tabs>
</template>

<script>
import ZhihuModules from './zhihuModules'
import ZhihuItem from './zhihuItem'
import HotItem from './hotItem'
import ZhiHuAttention from './ZhiHuAttention'
import {getRecommendArticles} from '../../../api/zhihu'

export default {
  name: 'zhihuContent',
  components: {ZhiHuAttention, HotItem, ZhihuItem, ZhihuModules},
  created () {
    this.getRecommendData()
  },
  methods: {
    getRecommendData: function () {
      getRecommendArticles().then(response => {
        console.log(response)
      })
    }
  }
}
</script>

<style scoped>

</style>
