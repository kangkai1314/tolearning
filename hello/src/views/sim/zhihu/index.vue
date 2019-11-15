<template>
    <div class="zhihu-page">
      <div class="zhihu-nav">
        <el-menu mode="horizontal" class="nav-list">
          <el-menu-item><el-image :src="urlLogo"></el-image></el-menu-item>
          <el-menu-item index="/">首页</el-menu-item>
          <el-menu-item index="/find">发现</el-menu-item>
          <el-menu-item index="/wait">等你来答</el-menu-item>
          <el-menu-item> <el-input prefix-icon="el-icon-search"></el-input></el-menu-item>
          <el-menu-item><el-button>提问</el-button></el-menu-item>
          <el-menu-item><i class="el-icon-phone"></i></el-menu-item>
          <el-menu-item><i class="el-icon-alarm-clock"></i></el-menu-item>
          <el-menu-item><el-avatar :src="urlAvatar"></el-avatar></el-menu-item>
        </el-menu>
      </div>
      <div class="zhihu-content" style="background-color: #f4f4f5">
        <el-row style="margin-left: 158.5px;margin-right: 158.5px">
          <el-col :span="16">
            <div class="zhihu-container" style="margin: 10px;background-color: white" >
              <el-tabs>
                <el-tab-pane label="推荐">
                  <div class="el-card" v-for="rec in recs" :key="rec.id" style="padding: 10px">

                      <h2>{{rec.title}}</h2>
                    <el-row>
                      <el-col :span="12">
                        <el-image :src="imageUrl"></el-image>
                      </el-col>
                      <el-col :span="12">
                       <p>绑了磁的ge： 百看不厌的英文电影还是有不少的，接下来我就推荐一下
                       <b>已经刷过三遍以上，高赞回答没有盘点的一些英文电影。（肖申克、阿甘这种太过经典的就不谈了） （PS:感动得快哭了，收藏数和赞数几乎3:1了，…</b></p>
                       <el-button>阅读全文</el-button>
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col  :span="5">
                        <el-button style="background-color: #f4f4f5">赞同27K</el-button>
                      </el-col>
                      <el-col :span="2">
                        <el-button icon="el-icon-caret-bottom"></el-button>
                      </el-col>
                      <el-col :span="6">
                        <el-button icon="el-icon-chat-dot-round">687条评论</el-button>
                      </el-col>
                      <el-col :span="3">
                        <el-button icon="el-icon-collection-tag" style="width: 80px">分享</el-button>
                      </el-col>
                      <el-col :span="3">
                        <el-button icon="el-icon-collection-tag">收藏</el-button>
                      </el-col>
                      <el-col :span="3">
                        <el-button icon="el-icon-collection-tag">感谢</el-button>
                      </el-col>

                    </el-row>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="关注">
                  <div class="el-card" v-for="rec in recs" :key="rec.id" style="padding: 10px">
                    <el-row>                   <p style="float: left">xxxxx回答了问题</p>
                    </el-row>
                    <h2>{{rec.title}}</h2>
                    <el-row>
                      <el-col :span="12">
                        <el-image :src="imageUrl"></el-image>
                      </el-col>
                      <el-col :span="12">
                        <p>绑了磁的ge： 百看不厌的英文电影还是有不少的，接下来我就推荐一下
                          <b>已经刷过三遍以上，高赞回答没有盘点的一些英文电影。（肖申克、阿甘这种太过经典的就不谈了） （PS:感动得快哭了，收藏数和赞数几乎3:1了，…</b></p>
                        <el-button>阅读全文</el-button>
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col  :span="5">
                        <el-button style="background-color: #f4f4f5">赞同27K</el-button>
                      </el-col>
                      <el-col :span="2">
                        <el-button icon="el-icon-caret-bottom"></el-button>
                      </el-col>
                      <el-col :span="6">
                        <el-button icon="el-icon-chat-dot-round">687条评论</el-button>
                      </el-col>
                      <el-col :span="3">
                        <el-button icon="el-icon-collection-tag" style="width: 80px">分享</el-button>
                      </el-col>
                      <el-col :span="3">
                        <el-button icon="el-icon-collection-tag">收藏</el-button>
                      </el-col>
                      <el-col :span="3">
                        <el-button icon="el-icon-collection-tag">感谢</el-button>
                      </el-col>

                    </el-row>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="热榜">
                  <el-row v-if="open">
                    <el-tag v-for="tag in tags" :key="tag.id">{{tag.name}}</el-tag>
                    <el-button>展开</el-button>
                  </el-row>
                  <el-row v-else>
                    <el-row>
                      <h3 style="float: left;">我的榜单</h3>
                      <p>拖动排列顺序</p>
                      <el-button>收起</el-button>

                    </el-row>
                    <el-row>
                      <el-tag v-for="tag in tags" :key="tag.id">{{tag.name}}</el-tag>
                    </el-row>
                    <el-row>
                      <h3 style="float: left;">推荐榜单</h3>
                      <p>拖动添加至我的榜单</p>
                    </el-row>
                    <el-row>
                      <el-tag>校园</el-tag>
                    </el-row>
                    <el-row>
                      <el-button>确认</el-button>
                      <el-button>取消</el-button>
                    </el-row>
                  </el-row>
                  <div class="hot-list">
                    <section v-for="list in lists" :key="list.id">
                      <el-row >
                        <el-col :span="12">
                          <p>{{list.desc}}</p>
                          <el-row>
                            <el-col :span="12">                        <p><i class="el-icon-headset">{{list.hot}}热度</i></p>
                            </el-col>
                            <el-col :span="12">                        <p><i class="el-icon-share">分享</i></p>
                            </el-col>
                          </el-row>
                        </el-col>
                        <el-col :span="12">
                          <el-image :src="imageUrl"></el-image>
                        </el-col>
                      </el-row>
                      <h1>{{list.id}} {{list.content}}</h1>

                      <el-divider></el-divider>
                    </section>

                  </div>

                </el-tab-pane>
              </el-tabs>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="zhihu-right"  >
              <div class="first-block" style="padding: 10px;display: block;background-color: white;margin: 10px">
              <el-row>
                <el-col :span="8">                <i class="el-icon-box"></i><p>写文章</p>
                </el-col>
                <el-col :span="8">             <i class="el-icon-box"></i>   <p>写想法</p>
                </el-col>
                <el-col :span="8">               <i class="el-icon-box"></i> <p>写回答</p>
                </el-col>
              </el-row>
              <el-row>
              <p><i class="el-icon-s-claim">我的稍后答</i></p>
            </el-row>
              <el-row>
                <p><i class="el-icon-s-claim">我的草稿箱</i></p>
              </el-row>
              </div>
              <div class="second-block" style="padding: 10px;display: block;background-color: white;margin: 10px">
                <el-row>
                  <el-col :span="8">                <i class="el-icon-box"></i><p>写文章</p>
                  </el-col>
                  <el-col :span="8">             <i class="el-icon-box"></i>   <p>写想法</p>
                  </el-col>
                  <el-col :span="8">               <i class="el-icon-box"></i> <p>写回答</p>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="8">                <i class="el-icon-box"></i><p>写文章</p>
                  </el-col>
                  <el-col :span="8">             <i class="el-icon-box"></i>   <p>写想法</p>
                  </el-col>
                  <el-col :span="8">               <i class="el-icon-box"></i> <p>写回答</p>
                  </el-col>
                </el-row>
              </div>
              <div class="third-block" style="padding: 10px;display: block;background-color: white;margin: 10px">
                <el-image></el-image>
              </div>
              <div class="fourth-block" style="padding: 10px;display: block;background-color: white;margin: 10px">
                <p><i class="el-icon-s-claim">我的收藏</i> <el-tag>111</el-tag></p>
                <p><i class="el-icon-s-claim">我关注的问题</i><el-tag>111</el-tag></p>
                <p><i class="el-icon-s-claim">我的邀请</i><el-tag>111</el-tag></p>
                <p><i class="el-icon-s-cooperation">站务中心</i></p>
                <p><i class="el-icon-s-cooperation">版权服务中心</i></p>

              </div>
              <div class="add-block" v-if="seen">
                <el-image><i class="el-icon-close"></i></el-image>
              </div>
            </div>
          </el-col>
        </el-row>

      </div>

    </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      imageUrl: 'https://pic4.zhimg.com/50/v2-dba6245c85d3778d36f2bd981777bb57_400x224.gif',
      seen: false,
      urlLogo: '',
      urlAvatar: '',
      tags: [{id: 1, name: '全站'}, {id: 2, name: '科学'}, {id: 3, name: '数学'}, {id: 4, name: '自然'}, {id: 5, name: 'nba'}],
      lists: [
        {id: 1, content: '2019 男篮世界杯中国 73:86 惜败尼日利亚，无缘直通东京奥运会，你有什么想说的？', desc: ' 中国男篮需要通过资格赛争夺最后的 4 个奥运入场券。', hot: '7333万'},
        {id: 2, content: '2019 男篮世界杯中国 73:86 惜败尼日利亚，无缘直通东京奥运会，你有什么想说的？', desc: ' 中国男篮需要通过资格赛争夺最后的 4 个奥运入场券。', hot: '7333万'},
        {id: 3, content: '2019 男篮世界杯中国 73:86 惜败尼日利亚，无缘直通东京奥运会，你有什么想说的？', desc: ' 中国男篮需要通过资格赛争夺最后的 4 个奥运入场券。', hot: '7333万'},
        {id: 4, content: '2019 男篮世界杯中国 73:86 惜败尼日利亚，无缘直通东京奥运会，你有什么想说的？', desc: ' 中国男篮需要通过资格赛争夺最后的 4 个奥运入场券。', hot: '7333万'},
        {id: 5, content: '2019 男篮世界杯中国 73:86 惜败尼日利亚，无缘直通东京奥运会，你有什么想说的？', desc: ' 中国男篮需要通过资格赛争夺最后的 4 个奥运入场券。', hot: '7333万'},
        {id: 6, content: '2019 男篮世界杯中国 73:86 惜败尼日利亚，无缘直通东京奥运会，你有什么想说的？', desc: ' 中国男篮需要通过资格赛争夺最后的 4 个奥运入场券。', hot: '7333万'}

      ],
      recs: [
        {id: 1, title: '有哪些值得看一百遍的英文电影和英文原著书籍？'},
        {id: 2, title: '有哪些值得看一百遍的英文电影和英文原著书籍？'},
        {id: 3, title: '有哪些值得看一百遍的英文电影和英文原著书籍？'},
        {id: 4, title: '有哪些值得看一百遍的英文电影和英文原著书籍？'},
        {id: 5, title: '有哪些值得看一百遍的英文电影和英文原著书籍？'}

      ]
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../../styles/btn";
  .nav-list{
    margin-left: 20px;
    margin-right: 20px;
  }
  .zhihu-container{
    @include colorBtn('blue')
  }
  .el-tag{
    margin: 10px;
    background-color: #f4f4f5;
  }

</style>
