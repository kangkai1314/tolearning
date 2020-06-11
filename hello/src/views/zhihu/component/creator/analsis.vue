<template>
    <div class="anlasis_data">
      <el-row >
        <el-col :span="7" v-for="i in answers" :key="i" style="border:1px solid #ebebeb;margin: 5px;padding: 10px">
          <p>{{i}}</p>
          <p>4</p>
        </el-col>

      </el-row>
      <div class="fenxi" style="border:1px solid #ebebeb;margin: 10px">
        <el-tabs style="padding: 10px">
          <el-tab-pane :label="'所有'+title">
            <el-row style="text-align: left">
              <el-button >最近7天</el-button>
              <el-button >最近14天</el-button>
              <el-button >最近30天</el-button>
              <el-button >最近90天</el-button>

            </el-row>
            <el-row>
              <el-col :span="6">
                <h4>分日报表</h4>
              </el-col>
              <el-col :span="6" style="float: right">
                <i class="el-icon-download">导出Excel</i>
              </el-col>
            </el-row>
            <el-table>
              <el-table-column label="回答内容">

              </el-table-column>
              <el-table-column label="发布时间">

              </el-table-column>
              <el-table-column label="阅读数">

              </el-table-column>
              <el-table-column label="评论数">

              </el-table-column>
              <el-table-column label="赞同数">

              </el-table-column>
              <el-table-column label="喜欢数">

              </el-table-column>
              <el-table-column label="收藏数">

              </el-table-column>
              <el-table-column label="操作">

              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane :label="'单篇'+title+'分析'">
            <el-row style="text-align: left">
              <el-button >最近7天</el-button>
              <el-button >最近14天</el-button>
              <el-button >最近30天</el-button>
              <el-button >最近90天</el-button>

            </el-row>
            <el-row>
              <el-col :span="6">
                <h4>统计详情</h4>
              </el-col>
              <el-col :span="6" style="float: right">
                <i class="el-icon-download">导出Excel</i>
              </el-col>
            </el-row>
            <el-table>
              <el-table-column label="回答内容">

              </el-table-column>
              <el-table-column label="发布时间">

              </el-table-column>
              <el-table-column label="阅读数">

              </el-table-column>
              <el-table-column label="评论数">

              </el-table-column>
              <el-table-column label="赞同数">

              </el-table-column>
              <el-table-column label="喜欢数">

              </el-table-column>
              <el-table-column label="收藏数">

              </el-table-column>
              <el-table-column label="操作">

              </el-table-column>
            </el-table>
          </el-tab-pane>

        </el-tabs>
      </div>
    </div>
</template>

<script>
export default {
  name: 'analsis',
  props: ['type'],
  computed: {
    answers: function () {
      if (this.type === 'answer') {
        return ['回答总数', '阅读总数', '赞同总数', '昨日阅读数', '昨日赞同数']
      } else if (this.type === 'idea') {
        return ['想法总数', '鼓掌总数', '评论总数', '昨日浏览数', '昨日鼓掌数', '昨日评论数']
      } else if (this.type === 'video') {
        return ['视频总数', '总播放量', '昨日播放量']
      } else if (this.type === 'article') {
        return ['文章总数', '阅读总数', '赞同总数', '昨日阅读数', '昨日赞同数']
      }
    },
    title: function () {
      if (this.type === 'answer') {
        return '回答'
      } else if (this.type === 'idea') {
        return '想法'
      } else if (this.type === 'video') {
        return '视频'
      } else if (this.type === 'article') {
        return '文章'
      }
    }
  }
}
</script>

<style scoped>
  .anlasis_data{

  }
  p{
    text-align: left;
    padding: 5px;
  }

</style>
