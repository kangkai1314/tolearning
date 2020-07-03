<template>
  <div class="hot-view">
    <div class="hot-zhihu-item" v-for="rankItem in rankItems" :key="rankItem.id" @click="goQuestion(rankItem.id)">
      <el-row style="padding: 10px" >
        <el-col :span="12">
          <p style="font-weight: bold">{{rankItem.id}} {{rankItem.name }} </p>
          <div class="content">
            <p style="padding: 0;margin: 0">
             {{rankItem.desc}}</p>
            <el-row>
              <i class="el-icon-fi"><span>{{rankItem.hot}}热度</span></i>
              <el-button icon="el-icon-s-promotion" type="text">分享</el-button>
            </el-row>
          </div>
        </el-col>
        <el-col :span="12">
          <el-image :src="rankItem.url" style="width: 200px;height:105px "></el-image>
        </el-col>
      </el-row>

    </div>
  </div>
</template>

<script>
import {getHotArticles} from '../../../api/zhihu'
export default {
  name: 'hotZhiHuItem',
  data () {
    return {
      rankItem: {
        name: '如何评价必胜客新出的158元自助餐',
        desc: ' 90 分钟限时，158 元 / 位，具体性价比如何？',
        hot: '1999',
        url: 'https://pic2.zhimg.com/80/v2-1e0a0d8a294dbeacd73a34d8c053b4e4_400x224.jpg'
      },
      rankItems: []
    }
  },
  methods: {
    goQuestion: function (id) {
      console.log(id)
      this.$router.push('/zhihu/question/' + id)
    },
    getHotItems: function () {
      getHotArticles().then(response => {
        console.log(response)
        this.rankItems = response.data.data.dataList
      })
    }
  },
  mounted () {
    this.getHotItems()
  }
}
</script>

<style scoped>
  .hot-zhihu-item{
    cursor: pointer;
  }
  /deep/
  .el-button{
    height: 36px;
    min-width: 100px;
  }
</style>
