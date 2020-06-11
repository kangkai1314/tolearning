<template>
    <div class="invited_page">
      <el-tabs>
        <el-tab-pane label="邀请回答">
          <el-tabs>
            <el-tab-pane label="所有人">
              <question-invited title="邀请你回答" v-for="i in 100" :key="i"></question-invited>
            </el-tab-pane>
            <el-tab-pane label="我关注的人"></el-tab-pane>
          </el-tabs>
        </el-tab-pane>
        <el-tab-pane label="为你推荐">
          <el-row>
            <el-col :span="8">
            <h3 style="text-align: left">这里是你可能感兴趣的问题</h3>
            </el-col>
            <el-col :span="8" style="float: right">
    <el-button icon="el-icon-edit" type="text" style="color: #999999" @click="show">管理你擅长的领域</el-button>
              <el-dialog :visible.sync="dialogVisible">
                <el-row>
                  <el-row>
                    <el-col :span="8" >
                      <h4>添加你擅长的领域使推荐更精准</h4>
                    </el-col>
                    <el-col :span="8" style="float: right">
                      <el-input placeholder="搜索添加擅长领域" suffix-icon="el-icon-search"></el-input>
                    </el-col>
                  </el-row>
                </el-row>
              </el-dialog>
            </el-col>
          </el-row>
          <question-invited title="你可能感兴趣" v-for="i in 100" :key="i"></question-invited>

        </el-tab-pane>

        <el-tab-pane label="最新问题">
          <question-invited title="你可能感兴趣" v-for="i in 100" :key="i"></question-invited>

        </el-tab-pane>
        <el-tab-pane label="致知计划">
          <question-invited v-for="i in 100" :key="i" ></question-invited>

        </el-tab-pane>

      </el-tabs>

    </div>
</template>

<script>
import Question from '../../question'
import QuestionInvited from './question'
export default {
  name: 'invited',
  components: {QuestionInvited, Question},
  data () {
    return {
      dialogVisible: false
    }
  },
  methods: {
    show: function () {
      this.dialogVisible = true
    }
  }
}
</script>

<style scoped>
  .invited_page{
    padding: 10px;
    margin: 10px;
    background-color: white;
  }

</style>
