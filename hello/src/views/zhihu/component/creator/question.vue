<template>
    <div class="question">
      <h3 style="text-align: left;font-size: 14px;color: #999999">{{title}}</h3> <span style="float: right;top: 0">10分钟前</span>
      <h1 style="text-align: left;font-size: 16px;padding: 10px">用什么来形容一下高中生活</h1>
      <div class="op_view" style="display: flex;justify-content: space-between;align-items: center">

          <div >
            <el-button icon="el-icon-edit" style="color: #20a0ff">写回答</el-button>
            <el-button icon="el-icon-refresh-right" type="text" style="color: #999999">忽略</el-button>
            <el-button icon="el-icon-timer" type="text" style="color: #999999">稍后答</el-button>
          </div>
          <div  >
            <p>0个回答1个关注</p>
          </div>
      </div>
      <el-divider style="width: 100%"></el-divider>

    </div>
</template>

<script>
export default {
  name: 'questionInvited',
  props: ['title']
}
</script>

<style scoped lang="scss">
.question{
  padding: 10px;
  font-size: 14px;
}
</style>
