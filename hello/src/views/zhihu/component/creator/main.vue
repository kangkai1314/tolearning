<template>
  <div class="main-creator-page">
    <div class="view1" >
      <el-row>
        <el-col :span="6" >
          <el-image :src="url" style="width: 120px;height: 120px"></el-image>

        </el-col>
        <el-col :span="18">
          <p>当前等级level1 <span style="color: #999999;font-size: 13px">每周四更新</span></p>
          <el-slider></el-slider>
          <span style="float: left">已解锁权益 <i class="el-icon-data-board"></i> <i class="el-icon-data-analysis"></i></span>
          <div ><span> lever 4 将解锁权限 <i class="el-icon-collection"></i></span></div>
        </el-col>
      </el-row>
      <el-divider style="width: 100%"></el-divider>
      <el-row>
        <el-col :span="8">
          <div class="">
            <p>阅读总数<i class="el-icon-question"></i></p>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="">
            <p>赞同总数<i class="el-icon-question"></i></p>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="">
            <p>关注者总数<i class="el-icon-question"></i></p>
          </div>
        </el-col>
      </el-row>
      <el-row >
        <el-button type="text">更多数据详情<i class="el-icon-arrow-right"></i></el-button>
      </el-row >
    </div>

    <div class="view1" style="margin-top: 10px">
<h1>近期创作数据  <sapn>截止到昨日</sapn></h1>
      <el-row>
        <el-button type="text">更多创作数据<i class="el-icon-arrow-right"></i></el-button>
      </el-row>
    </div>
    <div class="view1">
      <h3>为你推荐的问题</h3>
      <el-button type="text">更多问题推荐<i class="el-icon-arrow-right"></i></el-button>

    </div>
    <div class="view1">
      <h2>成长进阶指南</h2>
      <el-row>
        <el-col :span="8" v-for="i in 3" :key="i">
          <i class="el-icon-document-checked">如何在知乎创造高质量回答</i>

        </el-col>
      </el-row>
    </div>
  </div>


</template>

<script>
export default {
  name: 'main',
  data () {
    return {
      url: 'https://static.zhihu.com/heifetz/assets/V1.63bfe1eb.jpg'
    }
  }
}
</script>

<style scoped>
  .main-creator-page{
  }
  .view1{
    background-color: white;
    margin: 10px;
    padding: 20px;
  }
  p{
    text-align: left;
    color: #20a0ff;
    span{
      color: #999999;
    }
  }


</style>
