<template>
<div class="job-view">
 <p>统计拉勾网和猎聘网相关工作内容</p>
  <div class="job-content">
    <el-row>
      <el-col :span="8" v-for="i in 10" :key="i" style="margin: 20px;padding: 10px;width: 200px;display: block;background-color: #13ce66;height: 100px">
        <h3>job name</h3>
        <p>publish date</p>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <p>拉勾</p>
        <ul>
         <li v-for="job in jobs" :key="job.id">{{job.position_name}}</li>
        </ul>
      </el-col>
      <el-col :span="12">
        <p>猎聘</p>
        <ul>
          <li v-for="job in liePinjobs" :key="job.id">{{job.job_name}}</li>
        </ul>
      </el-col>
    </el-row>
  </div>
</div>
</template>

<script>
import {fetchJobs, fetchLiepinJobs} from '../../api/job'

export default {
  name: 'job',
  data () {
    return {
      jobs: []

    }
  },
  created () {
    this.getJobs()
    this.getLiepinJobs()
  },
  methods: {
    getJobs: function () {
      fetchJobs().then(response => {
        console.log(response.data)
        this.jobs = response.data.data
      }).catch(error => {
        console.log(error)
        this.$message.error(error)
      })
    },
    getLiepinJobs: function () {
      fetchLiepinJobs().then(response => {
        console.log(response)
        this.liePinjobs = response.data.results
      })
    }
  }
}
</script>

<style scoped >

</style>
