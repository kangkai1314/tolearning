<template>
  <div class="person-view">
    <div class="cover-view">
      <el-button style="float: right;margin: 20px;background-color: transparent;color: white" icon="el-icon-camera">上传封面照片</el-button>

    </div>
    <div class="profile-view" style="top:-25px;position: relative;overflow: hidden">
      <el-row >
        <el-col :span="6">
          <el-image :src="url" style="width:160px;height: 160px"></el-image>
        </el-col>
        <el-col :span="18">
          <div  class="person" style="padding: 20px">
            <h1 style="text-align: left">康凯</h1>
            <p>互联网  <el-divider direction="vertical"></el-divider> 亚信科技</p>
            <p>大学本科  <el-divider direction="vertical"></el-divider> <i class="el-icon-male"></i></p>
            <p><i class="el-icon-arrow-down">查看详细资料</i></p>
          </div>
        </el-col>
      </el-row>

    </div>
    <div class="info-view">
      <div class="view" style="margin-right: 10px;width: 70%;background-color: white;padding: 10px">
        <el-tabs v-model="activeName" >
          <el-tab-pane label="动态">
            <h3>我的动态</h3>
            <span>回答了问题</span>
          </el-tab-pane>
          <el-tab-pane label="回答">
            <h3>我的动态</h3>

          </el-tab-pane>
          <el-tab-pane label="视频">
            <h3>我的视频</h3>

          </el-tab-pane>
          <el-tab-pane label="提问">
            <h3>我的提问</h3>

          </el-tab-pane>
          <el-tab-pane label="文章">
            <h3>我的文章</h3>

          </el-tab-pane>
          <el-tab-pane label="专栏">
            <h3>我的专栏</h3>
            <el-badge :value="12" class="item" style="width: 10px">
              <el-button size="small">评论</el-button>
            </el-badge>

          </el-tab-pane>
          <el-tab-pane label="想法">
            <h3>我的想法</h3>

          </el-tab-pane>
          <el-tab-pane label="更多">
            <el-dropdown slot="label" @command="handleCommand">
  <span class="el-dropdown-link">
    更多<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="collection">收藏</el-dropdown-item>
                <el-dropdown-item command="attention">关注</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-tab-pane>
          <div class="collection-view" v-if="showCollection">
            <h2>我的收藏夹</h2>
            <div class="co-view" v-for="i in 3" :key="i">
              <h2>收藏的标题</h2>
              <span>2016-05-10 更新-1条内容-0人关注</span>
            </div>
          </div>
          <div class="attention-view" v-else></div>

        </el-tabs>
      </div>
      <div class="view" style="width: 30%">
        <module-creator class="view"></module-creator>
        <div class="success-view" style="margin-top: 10px;background-color: white;padding: 10px">
          <h3>个人成就</h3>
          <el-divider></el-divider>

        </div>
        <div class="">

        </div>
        <div style="padding: 10px">
          <p >关注的话题 <span style="float: right">0</span></p>
          <p>关注的专栏<span style="float: right">0</span></p>
          <p>关注的问题<span style="float: right">0</span></p>
          <p>关注的收藏夹<span style="float: right">0</span></p>

        </div>
      </div>

    </div>

  </div>
</template>

<script>
import ModuleCreator from './creator/moduleCreator'
export default {
  name: 'person',
  components: {ModuleCreator},
  data () {
    return {
      url: 'https://pic3.zhimg.com/v2-748eafe09f619826704908687dd04631_xl.jpg',
      activeName: ''
    }
  }
}
</script>

<style scoped lang="scss">
  .person-view{
    width: 80%;
    margin: auto;
  }
  .cover-view{
    height: 132px;
    width: 100%;
    background-color: #999999;
  }
  h3{
    text-align: left;
  }
  .info-view{
    display: flex;
    flex-direction: row;
  }
  .view{
    /*background-color: white;*/
    /*margin: 10px;*/
    /*padding: 10px;*/
  }
  p{
    text-align: left;
    border-bottom: 1px solid #f4f4f5;
  }
  p:hover{
    cursor: pointer;
  }

</style>
