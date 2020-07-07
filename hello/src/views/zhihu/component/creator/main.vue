<template>
  <div class="main-creator-page">
    <div class="view2" >
      <el-row>
        <el-col :span="6" >
          <el-image :src="url" style="width: 120px;height: 120px"></el-image>

        </el-col>
        <el-col :span="18" class="head-view">
          <p>当前等级level{{person.rank}} <span style="color: #999999;font-size: 13px">每周四更新</span></p>
          <el-slider v-model="person.rankInfo" ></el-slider>
          <div style="display: flex; align-items: center">
            <span style="float: left">已解锁权益:</span>
            <el-popover trigger="hover" placement="bottom-start" >
              <i class="el-icon-data-board icon-view"  slot="reference"></i>
              <div >
                <h3>内容分析</h3>
                <p>可以查看你创作的【回答】【文章】的详细数据分析</p>
              </div>
            </el-popover>
            <el-popover placement="bottom-start"  trigger="hover">
              <i class="el-icon-data-analysis icon-view" slot="reference"></i>
              <div>
                <h3>版权服务</h3>
                <p>知乎和微信平台联合推出了自动处理投诉的平台</p>
              </div>
            </el-popover>
            <el-popover trigger="hover" placement="bottom-start" >
              <span slot="reference" style="display: flex;align-items: center"> lever 4 将解锁权限 <i class="el-icon-collection icon-view"></i></span>
            <div>
              <h3>内容自荐</h3>
              <p>你可以推荐有些的自己的内容和别人的内容去，我们可以通过算法，来更好的展示给用户</p>
            </div></el-popover>
          </div>

        </el-col>
      </el-row>
      <el-divider style="width: 100%"></el-divider>
      <el-row>
        <el-col :span="8" >
          <div class="span-view">
            <p>阅读总数<i class="el-icon-question"></i></p>
            <spa>{{person.view.total}}</spa>
            <p class="sub-view">昨日阅读数<span>{{person.view.yest}}</span></p>

          </div>
        </el-col>
        <el-col :span="8">
          <div class="span-view">
            <p>赞同总数<i class="el-icon-question"></i></p>
            <span>{{person.approv.total}}</span>
            <p class="sub-view">昨日赞同数<span>{{person.approv.yest}}</span></p>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="span-view">
            <p>关注者总数<i class="el-icon-question"></i></p>
            <span>{{person.follow.total}}</span>
            <p class="sub-view">昨日新增关注者<span>{{person.follow.yest}}</span></p>
          </div>
        </el-col>
      </el-row>
      <el-row >
        <el-button type="text">更多数据详情<i class="el-icon-arrow-right"></i></el-button>
      </el-row >
    </div>

    <div class="view2" >
    <h3 class="head">近期创作数据  <sapn class="sub-view">截止到昨日</sapn></h3>
      <div>
        <div class="quest-view" v-for="i in 6" :key="i">
          <el-tag>回答</el-tag>
          <div>
            <div class="over-view">生活永远大于全部</div>
            <div class="over-view">如果不是你我该多幸福</div>

          </div>
          <div v-for="i in 5" :key="i">
            <p class="sub-view">回答</p>
            <span>10</span>
          </div>
          <el-button type="text">详细分析</el-button>
        </div>
      </div>
      <el-row>
        <el-button type="text">更多创作数据<i class="el-icon-arrow-right "></i></el-button>
      </el-row>
    </div>
    <div class="view2">
      <h3 class="head">为你推荐的问题</h3>
      <el-button type="text">更多问题推荐<i class="el-icon-arrow-right"></i></el-button>

    </div>
    <div class="view2">
      <h3 class="head">成长进阶指南</h3>
      <el-row style="padding: 10px" >
        <el-col :span="8" v-for="i in 3" :key="i" style="display: flex;align-items: center">
          <el-image :src="url1" style="width: 58px"></el-image><span>如何在知乎创造高质量回答1231313133212313</span>

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
      url: 'https://static.zhihu.com/heifetz/assets/V1.63bfe1eb.jpg',
      url1: 'https://static.zhihu.com/heifetz/assets/icon_guide_1.ddf567fd.png',
      person: {
        view: {
          total: 1024,
          yest: 0
        },
        follow: {
          total: 100,
          yest: 2
        },
        approv: {
          total: 200,
          yest: 2
        },
        rank: 1,
        rankInfo: 40
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .main-creator-page{
  }
  .view2{
    background-color: white;
    margin: 10px;
    padding: 20px;

  }
  .head{
    text-align: left;
  }

  .head-view{
    font-size: 13px;
    padding-right: 20px;

  }

  .sub-view{
    font-size: 12px;
    color: #999999;
  }
  .quest-view{
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px;
    border-bottom: 1px solid #f4f4f5;

  }
  .over-view{
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 5rem;
  }
  .icon-view{
    font-size: 40px;
    color: #0084FF;
    border-radius: 6px;
    height: 36px;
    min-width: 36px;
    padding: 0 6px;
    background: rgba(0,132,255,0.08);
    margin-right: 8px;
  }

</style>
