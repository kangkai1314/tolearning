<template>
    <div class="benefit-view">
      <h3 style="padding: 10px;border-bottom: 1px solid #f4f4f5">权益中心</h3>
      <div class="benefit-content">
        <div class="benefit" v-for="be in bes" :key="be.title">
          <div  class="head">
            <h3><i class="el-icon-data-analysis"></i>{{be.title}}</h3>
          </div>
          <p>{{be.content}}</p>
          <p>{{be.condition}}</p>
          <el-button v-if="rank" type="text">进入功能页</el-button>
          <el-button v-else @click="show">未达等级</el-button>
        </div>
      </div>

    </div>
</template>

<script>
export default {
  name: 'benefit',
  data () {
    return {
      bes: [{title: '内容分析',
        content: '可以查看你所创作的「回答」「文章」「想法」的详细数据分析。',
        condition: '申请条件：创作者等级为一级及以上的创作者。',
        rank: true},
      {title: '内容分析',
        content: '可以查看你所创作的「回答」「文章」「想法」的详细数据分析。',
        condition: '申请条件：创作者等级为一级及以上的创作者。',
        rank: true},
      {title: '内容分析',
        content: '可以查看你所创作的「回答」「文章」「想法」的详细数据分析。',
        condition: '申请条件：创作者等级为一级及以上的创作者。',
        rank: true}, {title: '内容分析',
        content: '可以查看你所创作的「回答」「文章」「想法」的详细数据分析。',
        condition: '申请条件：创作者等级为一级及以上的创作者。',
        rank: true}]
    }
  },
  methods:{
    show:function () {
      let {log}=console
      log('hello')
    }
  }
}
</script>

<style scoped lang="scss">
.benefit-view{
margin-top: 10px;
  padding: 10px;
  background-color: white;
  text-align: left;

}
.benefit-content{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: space-between;
}
  .benefit{
    border: 1px solid #f4f4f5;
    font-size: 14px;
    margin: 10px;
    width: 400px;
  }
</style>
