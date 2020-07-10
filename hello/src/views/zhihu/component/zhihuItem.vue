<template>
    <div class="zhihu-item-class"  >
      <el-row
        >
        <h3 style="float: left;margin-left: 10px" @click="pathQuestion(item.id)">{{item.title}}</h3>

      </el-row>
      <el-row style="margin-top: 10px;padding: 10px">
        <el-col :span="6">
          <el-image :src="item.url"></el-image>
        </el-col>
        <el-col :span="18">
        <folder ></folder>

        </el-col>
      </el-row>
      <el-row style="padding: 10px;margin: 10px;display: flex;align-items: center;justify-content: space-evenly">
          <el-button  class="button-agree" @click="agreeFunc(item)" ref="approveButton">赞同 {{item.approve}}</el-button>

          <el-button icon="el-icon-caret-bottom" style="color: #0084ff;background-color: rgba(0,132,255,.1);" size="small"></el-button>
            <el-button type="text"  v-if="!showComments" @click="showComments=true">
              <i class="el-icon-message"></i>{{item.comment}}条评论</el-button>
        <el-button v-else type="text" @click="showComments=false">收起评论</el-button>
        <el-dropdown>
          <span  style="color: #999999;"  class="el-dropdown-link">分享<i class="el-icon-share"></i></span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>复制链接</el-dropdown-item>
            <el-dropdown-item>新浪微博</el-dropdown-item>
            <el-dropdown-item>微信扫一扫</el-dropdown-item>
          </el-dropdown-menu>

        </el-dropdown>

            <el-button type="text" style="color: #999999;" @click="collect"><i class="el-icon-star-on"></i>收藏</el-button>
            <el-button type="text" style="color: #999999;" @click="changeLike" ref="like"><i class="el-icon-heavy-rain"></i>喜欢</el-button>
            <el-dropdown  style="padding: 10px">
              <i class="el-icon-more"></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>没有帮助</el-dropdown-item>
                <el-dropdown-item>举报</el-dropdown-item>
                <el-dropdown-item>不感兴趣</el-dropdown-item>
              </el-dropdown-menu>

            </el-dropdown>

            <el-button type="text"> <i class="el-icon-arrow-up"></i>收起</el-button>

      </el-row>
      <div class="comment-view" v-if="showComments"  >
        <div class="comment-head" style="display: flex;justify-content: space-between;font-size: 14px;align-items: center">
          <h3>{{item.comment}}条评论</h3>
          <span><i class="el-icon-aim"></i>切换为时间排序</span>
        </div>
        <div class="selected-commnet" style="text-align: left" >

          <div class="selected-commnet-header" style="padding: 10px 20px;
    font-size: 14px;
    color: grey;
    background-color: #f6f6f6;
    font-weight: 600">
            <h3>精彩评论(10)</h3>
          </div>
          <div v-for="comment in comments" :key="comment.id" @mouseover="showSpan(comment)" @mouseleave="hideSpan(comment)">
            <div class="selected-comment-user" >
              <el-avatar :src="url" shape="square" :size="20"></el-avatar>
              <span>{{comment.user}}</span>
              <span>{{comment.date}}</span>
            </div>
            <p>{{comment.content}}</p>
            <div class="action-view" style="display: flex;justify-content: flex-start;align-items: center;font-size: 14px">
              <div class="sub-action"><img src="../../../assets/agree.png"/> <span>200</span></div>
              <div class="sub-action"><i class="el-icon-chat-dot-round">查看回复</i></div>
              <div v-if="comment.hover" style="display: flex;align-items: center">
                <div class="sub-action">              <i class="el-icon-s-promotion">回复</i>
                </div>
                <div class="sub-action">              <img src="../../../assets/disagree.png"/> <span>踩</span>
                </div>
                <div class="sub-action">              <img src="../../../assets/flag.png"/> <span>举报</span>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div class="all-comment" style="text-align: left">
          <div class="selected-commnet-header" style="padding: 10px 20px;
    font-size: 14px;
    color: grey;
    background-color: #f6f6f6;
    font-weight: 600">
            <h3>全部评论({{item.comment}})</h3>
          </div>
          <div v-for="comment in comments" :key="comment.id" @mouseover="showSpan(comment)" @mouseleave="hideSpan(comment)">
            <div class="selected-comment-user" >
              <el-avatar :src="url" shape="square" :size="20"></el-avatar>
              <span>{{comment.user}}</span>
              <span>{{comment.date}}</span>
            </div>
            <p>{{comment.content}}</p>
            <div class="action-view" style="display: flex;justify-content: flex-start;align-items: center;font-size: 14px">
              <div class="sub-action"><img src="../../../assets/agree.png"/> <span>200</span></div>
              <div class="sub-action"><i class="el-icon-chat-dot-round">查看回复</i></div>
              <div v-if="comment.hover" style="display: flex;align-items: center">
                <div class="sub-action">              <i class="el-icon-s-promotion">回复</i>
                </div>
                <div class="sub-action">              <img src="../../../assets/disagree.png"/> <span>踩</span>
                </div>
                <div class="sub-action">              <img src="../../../assets/flag.png"/> <span>举报</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <el-dialog :visible.sync="dialogVisible" width="40%">
        <div class="collect-view">
          <h1>添加收藏</h1>
          <p>请选择你想添加到的收藏夹</p>
          <div class="collection">
            <div >
              <h3>那些你想做的事</h3>
              <p>1条内容</p>
            </div>

            <el-button>收藏</el-button>
          </div>
          <el-button class="shallow" @click="showMake">创建收藏夹</el-button>
        </div>
      </el-dialog>
      <el-dialog :visible.sync="makeCollect" width="40%">
        <div class="makeCollect-view">
          <h1>创建新收藏夹</h1>
          <el-form>
            <el-form-item>
              <el-input placeholder="收藏标题"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input type="textarea" placeholder="收藏描述(可选)"></el-input>
            </el-form-item>
            <el-form-item>
              <el-radio-group style="text-align: left">
                <el-radio style="width: 100%">公开<span style="color: #999999;font-size: 14px">有其他人关注此收藏夹时不可以设置为隐私</span></el-radio>
                <el-radio>私密<span style="color: #999999;font-size: 14px">只有自己才能查看这个收藏家的</span></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item style="display: flex;width: 100%">
              <el-button style="flex: 1;min-width: 220px">返回</el-button>
              <el-button style="flex: 1;min-width: 220px">确认创建</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-dialog>

    </div>
</template>

<script>
import Folder from '../../../components/folder'
export default {
  name: 'zhihuItem',
  components: {Folder},
  data () {
    return {
      text: '1213131313132323',
      showComments: false,
      agree: false,
      hover: false,
      url: 'https://pic4.zhimg.com/d3a1359ca3e95f0b68132cf28f0a5290_s.jpg',
      like: false,
      dialogVisible: false,
      makeCollect: false,
      comments: [{
        id: 1,
        date: '06-28',
        user: '慕兮言ALEX',
        content: '朱婧汐个人特质不高，你看看人家做多么先锋的音乐？可惜她这些个性的东西可能只有阿朵黄龄这些真正懂音乐的人能欣赏。她不是个人特质不高，相反，她个人特质太高，太个性，太前卫，如果其他人的思想还是在2020年，她已经是在3020年，她的问题是人气最低咖位最低节目组不捧',
        hover: false

      },
      {
        id: 2,
        date: '06-28',
        user: '慕兮言ALEX',
        content: '朱婧汐个人特质不高，你看看人家做多么先锋的音乐？可惜她这些个性的东西可能只有阿朵黄龄这些真正懂音乐的人能欣赏。她不是个人特质不高，相反，她个人特质太高，太个性，太前卫，如果其他人的思想还是在2020年，她已经是在3020年，她的问题是人气最低咖位最低节目组不捧',
        hover: false

      },
      {
        id: 3,
        date: '06-28',
        user: '慕兮言ALEX',
        content: '朱婧汐个人特质不高，你看看人家做多么先锋的音乐？可惜她这些个性的东西可能只有阿朵黄龄这些真正懂音乐的人能欣赏。她不是个人特质不高，相反，她个人特质太高，太个性，太前卫，如果其他人的思想还是在2020年，她已经是在3020年，她的问题是人气最低咖位最低节目组不捧',
        hover: false

      }
      ]

    }
  },
  props: {
    item: {
      type: Object
    }
  },
  methods: {
    pathQuestion: function (id) {
      this.$router.push('/zhihu/question/' + id.toString())
    },
    agreeFunc: function (item) {
      console.log('agree')
      console.log(this.$refs['approveButton'])
      if (this.agree) {
        // this.$refs['approveButton'].$el.style.backgroundColor = 'rgba(0,132,255,.1)'
        this.$refs['approveButton'].$el.innerText = '赞同' + item.comment
        this.agree = false
      } else {
        // this.$refs['approveButton'].$el.style.backgroundColor = 'black'
        this.$refs['approveButton'].$el.innerText = '已赞同' + item.comment
        this.agree = true
      }
    },
    showSpan: function (comment) {
      console.log('over')
      comment.hover = true
    },
    hideSpan: function (comment) {
      console.log('hide')
      comment.hover = false
    },
    changeLike: function () {
      console.log(this.like)
      console.log(this.$refs.like)
      if (this.like) {
        this.$refs.like.$el.innerText = '喜欢'
        // this.$refs.like.$el.innerHTML=''
      } else {
        this.$refs.like.$el.innerText = '取消喜欢'
      }
    },
    collect: function () {
      this.dialogVisible = true
    },
    showMake:function () {
      this.makeCollect=true
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../../styles/mixin";
  .zhihu-item-class{
    cursor: pointer;
  }
  .button-agree{
    color: #0084ff;
    background-color: rgba(0,132,255,.1);
  }
  .button-agree:active{
    color: #fff;
    background: #0084ff;
  }
  .button-agree:visited{
    color: #fff;
    background: #0084ff;
  }
  .comment-view{
    padding: 10px;
    margin: 10px;
    border:1px solid #f4f4f5;
  }
  img{
    width: 16px;
    height: 16px;
  }
  .sub-action{
    padding: 10px;
    margin: 10px;
  }

  .collect-view{
    text-align: center;

  }
  .collection{
    border-bottom: 1px solid #f4f4f5;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .el-button{
      @include shaollowBlueButton
    }
  }
  .shallow{
    @include blueButton
  }

</style>
