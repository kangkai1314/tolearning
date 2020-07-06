<template>
  <div class="tab-view">
    <el-tabs style="background-color: white;padding: 15px;
    font-size: 16px;z-index: 1">
      <el-tab-pane label="推荐" style="padding: 10px">
        <div  v-for=" item in items" :key="item.id" >
          <zhihu-item  :item="item"> </zhihu-item>
        </div>
      </el-tab-pane>
      <el-tab-pane label="关注">
        <div class="content" v-for=" item in items" :key="item.id" style="margin-top: 10px">
          <zhi-hu-attention :item="item"></zhi-hu-attention>
        </div>

      </el-tab-pane>
      <el-tab-pane label="热榜">
        <hot-item></hot-item>
      </el-tab-pane>
    </el-tabs>
  </div>

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
        this.items = response.data.data.dataList
      })
    }
  },
  data () {
    return {
      items: []
    }
  }
}
</script>

<style scoped>
  /deep/
  .el-tabs__item {
    font-size: 16px;

  }
  .tab-view{
  }

</style>
