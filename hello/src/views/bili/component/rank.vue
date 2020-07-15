<template>
    <div class="rankView">
      <div class="rankHeader">
        <h2>排行榜</h2>
        <el-button >更多<i class="el-icon-arrow-right"></i></el-button>
      </div>
      <div class="rankWrap" v-for="i in 10" :key="i">
        <span >{{i}}</span>
        <a class="rankTitle">rank 排行榜</a>
      </div>
    </div>
</template>

<script>
export default {
  name: 'BiliRank'
}
</script>

<style scoped lang="scss">
  .rankView{
max-width: 180px;
    flex-basis: 100px;
  }
  .rankWrap{
    display: flex;
    padding: 0 0 12px;
    justify-content: space-between;
    align-items: center;

  }
  .rankHeader{
    display: flex;
    padding: 5px;
    justify-content: space-between;
  }
  .rankTitle{
    overflow: hidden;
    white-space: nowrap;
    font-size: 14px;

  }

</style>
