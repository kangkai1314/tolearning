<template>
    <div class="wali-view">
      <div class="head">
        <el-image :src="url" style="width: 40px"></el-image>
        <h3>瓦力保镖已累计为您创作提供实时保护:<strong>10</strong>次</h3>
      </div>
      <div class="content">
        <h3>创作保护记录</h3>
        <el-table>
          <el-table-column label="保护内容">

          </el-table-column>
          <el-table-column label="类型">

          </el-table-column> <el-table-column label="处理结果">

        </el-table-column> <el-table-column label="处理原因">

        </el-table-column> <el-table-column label="处理时间">

        </el-table-column>
        </el-table>
        <el-pagination >

        </el-pagination>
      </div>
    </div>
</template>

<script>
export default {
  name: 'wali',
  data () {
    return {
      url: 'https://static.zhihu.com/heifetz/assets/CreationWall.eb35aa40.svg'
    }
  }
}
</script>

<style scoped lang="scss">
  .wali-view{
    background-color: white;
    margin-top: 10px;
  }
  .head{
    border-bottom: 1px solid #f4f4f5;
    display: flex;
    padding: 10px;
  }

</style>
