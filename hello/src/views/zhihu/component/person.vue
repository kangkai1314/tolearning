<template>
  <div class="person-view">
    <div class="cover-view">
      <el-button style="float: right;margin: 20px;background-color: transparent;color: white" icon="el-icon-camera">上传封面照片</el-button>

    </div>
    <div class="profile-view" style="background-color: #ffffff">
      <el-row >
        <el-col :span="6">
          <el-image :src="url" style="width:160px;height: 160px;top:-25px;position: relative;overflow: hidden;"></el-image>
        </el-col>
        <el-col :span="18">
          <div  class="person" style="padding: 20px">
            <h1 style="text-align: left">{{person.info.name}}</h1>
            <p>{{person.info.pro}}  <el-divider direction="vertical"></el-divider> {{person.info.company}}</p>
            <p>{{person.info.study}}  <el-divider direction="vertical"></el-divider> <i class="el-icon-male"></i></p>
            <p><i class="el-icon-arrow-down">查看详细资料</i></p>
          </div>
        </el-col>
      </el-row>

    </div>
    <div class="info-view">
      <div class="tab-view" >
        <el-tabs v-model="activeName" >
          <el-tab-pane label="动态" >
            <h3>我的动态</h3>
            <div class="view" v-for="i in 10" :key="i" style="padding: 10px;border-bottom: 1px solid #f4f4f5" >
              <div class="view-head" style="display: flex;justify-content: space-between;align-items: center;font-size: 15px;color: #999999">
                <span>回答了问题</span>
                <p>1小时前</p>

              </div>
              <h2 style="text-align: left">不考虑工作，你最想做什么工作?</h2>
              <div class="author-view" style="display: flex;padding: 10px">
                <el-avatar :src="url" :size="30" shape="square" style="margin-right: 10px"></el-avatar>
                <span>{{person.info.name}}</span>
              </div>
              <div class="desc-view">
                 <folder></folder>
              </div>
              <div class="op-view" style="display: flex">
                <el-button style="color: #0084ff;background-color: rgba(0,132,255,.1);height: 36px"><i class="el-icon-caret-top"></i>赞同 </el-button>

                <el-button type="text" style="color: #999999;"><i class="el-icon-message"></i>5条评论</el-button>

                         <el-button type="text" style="color: #999999;"><i class="el-icon-share"></i>分享</el-button>

                    <el-button type="text" style="color: #999999;"><i class="el-icon-star-on"></i>收藏</el-button>

                    <el-button type="text" style="color: #999999;"><i class="el-icon-heavy-rain"></i>喜欢</el-button>

                    <el-dropdown  style="padding: 10px">
                      <i class="el-icon-more"></i>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>没有帮助</el-dropdown-item>
                        <el-dropdown-item>举报</el-dropdown-item>
                        <el-dropdown-item>不感兴趣</el-dropdown-item>
                      </el-dropdown-menu>

                    </el-dropdown>

                    <el-button type="text"> <i class="el-icon-arrow-up"></i>收起</el-button>

              </div>

            </div>
          </el-tab-pane>
          <el-tab-pane label="回答">
            <h3 class="headerView">我的回答</h3>
            <h2 style="text-align: left">不考虑工作，你最想做什么工作?</h2>
            <div class="author-view" style="display: flex;padding: 10px">
              <el-avatar :src="person.info.url" :size="30" shape="square" style="margin-right: 10px"></el-avatar>
              <span>{{person.info.name}}</span>
            </div>
            <div class="desc-view">
              <folder></folder>
            </div>
            <div class="op-view" style="display: flex">
              <el-button style="color: #0084ff;background-color: rgba(0,132,255,.1);height: 36px"><i class="el-icon-caret-top"></i>赞同 </el-button>

              <el-button type="text" style="color: #999999;"><i class="el-icon-message"></i>5条评论</el-button>

              <el-button type="text" style="color: #999999;"><i class="el-icon-share"></i>分享</el-button>

              <el-button type="text" style="color: #999999;"><i class="el-icon-star-on"></i>收藏</el-button>

              <el-button type="text" style="color: #999999;"><i class="el-icon-heavy-rain"></i>喜欢</el-button>

              <el-dropdown  style="padding: 10px">
                <i class="el-icon-more"></i>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>没有帮助</el-dropdown-item>
                  <el-dropdown-item>举报</el-dropdown-item>
                  <el-dropdown-item>不感兴趣</el-dropdown-item>
                </el-dropdown-menu>

              </el-dropdown>

              <el-button type="text"> <i class="el-icon-arrow-up"></i>收起</el-button>

            </div>

          </el-tab-pane>
          <el-tab-pane label="视频">
            <h3 class="headerView">我的视频</h3>

          </el-tab-pane>
          <el-tab-pane label="提问">
            <h3 class="headerView">我的提问</h3>
            <div v-for="i in 5" :key="i">
              <h3>你觉得自己五年后十年后，会在哪里干什么</h3>
              <p>时间  0个回答。2个关注</p>
            </div>

          </el-tab-pane>
          <el-tab-pane label="文章">
            <h3 class="headerView">我的文章</h3>

          </el-tab-pane>
          <el-tab-pane label="专栏">
            <h3>我的专栏</h3>

          </el-tab-pane>
          <el-tab-pane label="想法">
            <h3>我的想法</h3>

          </el-tab-pane>
          <el-tab-pane label="更多" >
            <el-dropdown slot="label" @command="handleCommand">
  <span class="el-dropdown-link">
    更多<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="collection">收藏</el-dropdown-item>
                <el-dropdown-item command="attention">关注</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <div class="collection-view" v-if="showCollection">
              <h4 style="padding: 10px;border-bottom: 1px solid #f4f4f5">我的收藏夹</h4>
              <div class="co-view" v-for="i in 3" :key="i" style="padding: 10px">
                <h3>收藏的标题</h3>
                <span>2016-05-10 更新-1条内容-0人关注</span>
              </div>
            </div>
            <div class="attention-view" v-else>
              <el-tabs>
                <el-tab-pane label="我关注的人">
                  <div class="follower-view" style="display: flex;justify-content: space-between;align-items: center;padding: 10px" v-for="i in 3" :key="i">
                    <div style="display: flex">
                      <el-avatar shape="square" :src="url" :size="100" style="margin-right: 10px"></el-avatar>
                      <div >
                        <h3>作者姓名</h3>
                        <p>作者详细描述</p>
                        <p>n回答。34文章-2312321关注者</p>
                      </div>
                    </div>

                    <el-button>已关注</el-button>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="关注我的人">
                  <div class="follower-view" style="display: flex;justify-content: space-between;align-items: center;padding: 10px" v-for="i in 3" :key="i">
                    <div style="display: flex">
                      <el-avatar shape="square" :src="url" :size="60" style="margin-right: 10px"></el-avatar>
                      <div style="font-size: 14px" >
                        <h3>作者姓名</h3>
                        <p>作者详细描述</p>
                        <p>n回答。34文章-2312321关注者</p>
                      </div>
                    </div>

                    <el-button>已关注</el-button>
                  </div>

                </el-tab-pane>
                <el-tab-pane label="我关注的专栏"></el-tab-pane>
              </el-tabs>
            </div>
          </el-tab-pane>

        </el-tabs>
      </div>
      <div class="view" style="width: 30%">
        <module-creator class="view"></module-creator>
        <div class="success-view" style="">
          <h3 >个人成就</h3>
          <el-divider></el-divider>
          <div style="display: flex;flex-direction: column">
            <p><i class="el-icon-aim">获得三次赞同</i></p>
            <p><i class="el-icon-edit">参与14次公共编辑</i></p>
          </div>

        </div>
        <div class="" style="display: flex;justify-content: center;background-color: #ffffff;margin-top: 10px;padding: 10px;font-weight: bold">
         <div style="flex:1;border-right: 1px solid #f5f5f5">
           <p style="text-align: center">关注了</p>
           <p style="text-align: center">{{person.relate.follow}}</p>
         </div>
          <div style="flex: 1">
            <p style="text-align: center">关注者</p>
            <p style="text-align: center">{{person.relate.follower}}</p>
          </div>
        </div>
        <div style="padding: 10px;font-size: 14px">
          <p style="padding: 10px;border-bottom: 1px solid #ebebeb;text-align: left" @click="goAttention">关注的话题 <span style="float: right">{{person.follow.topic}}</span></p>
          <p style="padding: 10px;border-bottom: 1px solid #ebebeb;text-align: left" @click="goAttention">关注的专栏<span style="float: right">{{person.follow.item}}</span></p>
          <p style="padding: 10px;border-bottom: 1px solid #ebebeb;text-align: left" @click="goAttention">关注的问题<span style="float: right">{{person.follow.question}}</span></p>
          <p style="padding: 10px;border-bottom: 1px solid #ebebeb;text-align: left" @click="goAttention">关注的收藏夹<span style="float: right">{{person.follow.collection}}</span></p>
          <p style="padding: 10px;border-bottom: 1px solid #ebebeb;text-align: left">个人被浏览{{person.follow.times}}次</p>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import ModuleCreator from './creator/moduleCreator'
import Folder from '../../../components/folder'
export default {
  name: 'person',
  components: {Folder, ModuleCreator},
  data () {
    return {
      url: 'https://pic3.zhimg.com/v2-748eafe09f619826704908687dd04631_xl.jpg',
      activeName: '',
      person: {
        info: {name: '康凯',
          pro: '互联网',
          company: '亚信软件公司',
          study: '本科学历'},
        relate: {
          follow: 12,
          follower: 24
        },
        follow: {
          topic: 10,
          question: 14,
          collection: 16,
          item: 3,
          times: 128
        }
      },
      showCollection: false

    }
  },
  methods: {
    handleCommand: function (com) {
      console.log(com)
      if (com === 'collection') {
        this.showCollection = true
      } else {
        this.showCollection = false
      }
    },
    goAttention: function () {
      console.log(this.activeName)
      this.activeName = '7'
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

  .info-view{
    display: flex;
    flex-direction: row;
    margin-top: 10px;

  }
  .view{

    /*background-color: white;*/
    /*margin: 10px;*/
    /*padding: 10px;*/
  }
  .headerView{
    text-align: left;
    border-bottom: 1px solid #f4f4f5;
  }
  p:hover{
    cursor: pointer;
  }
  .tab-view{
    margin-right: 10px;
    width: 70%;
    background-color: white;
    padding: 10px;
    text-align: left;
    h3{
      font-size: 15px;
      padding: 10px;
      border-bottom: 1px solid #f4f4f5;
    }
    h2{
      font-size: 18px;
      padding: 10px;
      border-bottom: 1px solid #f4f4f5;
    }
  }
  .success-view{
    margin-top: 10px;
    background-color: white;
    padding: 10px;
    font-size: 14px;
    text-align: left;
    .el-divider--horizontal {
      margin: 10px 0;
    }
  }

</style>
