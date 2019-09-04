<template>
<div class="job-view">
 <p>统计拉勾网和猎聘网相关工作内容</p>
  <div class="job-content">
    <el-row>
      <el-col :span="12">
        <p>拉勾</p>
        <ul>
         <li v-for="job in jobs" :key="job.id">{{job.name}}</li>
        </ul>
      </el-col>
      <el-col :span="12">
        <p>猎聘</p>
        <ul>
          <li>python</li>
        </ul>
      </el-col>
    </el-row>
  </div>
</div>
</template>

<script>
import {fetchJobs} from '../../api/job'

export default {
  name: 'job',
  data () {
    return {
      jobs: []

    }
  },
  created () {
    this.getJobs()
  },
  methods: {
    getJobs: function () {
      fetchJobs().then(response => {
        console.log(response.data.dataList)
        this.jobs = response.data.dataList
      }).catch(error => {
        console.log(error)
        this.$message.error('api failed')
      })
    }
  }
}
</script>

<style scoped>

</style>
