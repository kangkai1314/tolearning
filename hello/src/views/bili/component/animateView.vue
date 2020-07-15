<template>
  <div class="ani-view">
    <h2 style="float: left" >国创</h2>
    <el-button style="float: right">新番时间表</el-button>
    <el-tabs style="width: 100%">

      <el-tab-pane  v-for="list in animateList" :key="list.id"
                    :label="list.name" >
        <div class="list-box">
          <div class="item" v-for="i in 12" :key="i">
            <el-image class="imgView" :src="ani.url"></el-image>
            <div class="View">
              <div class="descView">{{ani.desc}}</div>
              <div class="updateView">{{ani.updateInfo}}</div>
            </div>

          </div>
        </div>

      </el-tab-pane>
    </el-tabs>

  </div>

</template>

<script>
export default {
  name: 'animateView',
  data () {
    return {
      animateList: [{id: 1, name: '最新', value: 'new'}, {id: 2, name: '周一', value: 'mon'}],
      ani: {
        url: 'https://i0.hdslb.com/bfs/bangumi/image/cc158458648bd98ad03c73a3fe2ebc03f788fdf2.jpg@70w_70h_1c_100q.webp',
        desc: '妖神值黑域篇',
        updateInfo: '第2话'
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .ani-view{
    padding: 10px;
    width: 100%;

  }
  .imgView{
    width: 70px;
    height: 70px;
  }
  .descView{

  }
  .descView:hover{
    color: #20a0ff;
    cursor: pointer;
  }
  .updateView{
    color: #20a0ff;
    font-size: 12px;
  }
  .item{
    display: flex;
    margin: 0 0 12px;
  }
  .View{
    width: 130px;
    height: 76px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .list-box{
    display: flex;
    flex-wrap: wrap;

  }

</style>
