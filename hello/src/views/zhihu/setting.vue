<template>
  <div class="setting-view" style="display: flex;">
    <el-tabs tab-position="left" type="border-card" v-model="active">
      <el-tab-pane label="账号与密码">
        <div style="text-align: left; padding: 10px;background-color: white;min-width: 500px">

            <h3>账号与密码</h3>
            <span>账号设置/个性签名</span>
            <el-divider style="width: 100%"></el-divider>
            <h3>帐号设置</h3>
            <span>绑定手机和邮箱，并设置密码，帐号更安全
            注意：为保证帐号安全，需进行二次验证。</span>
            <el-divider style="width: 100%"></el-divider>
          <div class="center">
            <div>
              <h3>密码</h3>
              <span>已设置</span>
            </div>

            <el-button style="float: right" type="text">编辑</el-button>

          </div>

            <el-divider style="width: 100%"></el-divider>
          <div class="center">
            <div>
              <h3>绑定手机</h3>
              <span>***************</span>
            </div>

            <el-button style="float: right" type="text">编辑</el-button>

          </div>
            <el-divider style="width: 100%"></el-divider>
          <div class="center">
            <div>
              <h3>绑定邮箱</h3>
              <span>***************</span>
            </div>
            <el-button style="float: right" type="text">编辑</el-button>

          </div>

            <el-divider style="width: 100%"></el-divider>
            <h3>绑定第三方账号</h3>
            <el-row>
              <el-col :span="8">

              </el-col>
              <el-col :span="8">

              </el-col> <el-col :span="8">

            </el-col>
            </el-row>
            <el-divider style="width: 100%"></el-divider>
          <div class="center">
            <div>
              <h3>个性域名</h3>
              <div class="domain">
              <span>个人主页的地址，个性域名只可更改一次
zhihu.com/people/kang-kai-51-97</span>
              </div>
            </div>
            <el-button style="float: right" type="text">编辑</el-button>

          </div>

        </div>
      </el-tab-pane>
      <el-tab-pane label="消息与邮件">
        <div style="min-width: 500px">
          <h3>消息与邮件</h3>
          <span>私信设置/邀请设置/赞同与赞赏/关注/邮件设置</span>
          <el-divider style="width: 100%"></el-divider>
          <div class="center">
            <div>
              <h3>私信设置</h3>
              <span>允许谁给我发私信</span>
            </div>
            <el-button style="float: right" type="text">编辑</el-button>

          </div>

          <el-divider style="width: 100%"></el-divider>
          <div class="center">
            <div>
              <h3>邀请/评论消息设置</h3>
              <span>有人对我发出邀请时，我会收到消息通知</span>
            </div>
            <el-button style="float: right" type="text">编辑</el-button>

          </div>

          <el-divider style="width: 100%"></el-divider>
          <div class="center">
            <div>
              <h3>赞同/赞赏消息设置</h3>
              <span>有人对我赞同或赞赏时，我会收到消息通知</span>
            </div>
            <el-button style="float: right" type="text">编辑</el-button>

          </div>

          <el-divider style="width: 100%"></el-divider>
          <div  class="center">
            <div><h3>关注消息设置</h3>
              <span>我的关注有新动态时，我会收到消息通知</span></div>
            <el-button style="float: right" type="text">编辑</el-button>

          </div>
          <el-divider style="width: 100%"></el-divider>
          <div  class="center">
            <div>
              <h3>邮件设置</h3>
              <span>重要事件发生时，我将会收到邮件提醒</span>
            </div>
            <el-button style="float: right" type="text">编辑</el-button>

          </div>

        </div>

      </el-tab-pane>
      <el-tab-pane label="屏蔽">
        <div style="background-color: #ffffff;min-width: 500px" >
            <h3>屏蔽</h3>
            <span>用户黑名单/话题黑名单/不看他动态</span>
            <el-divider style="width: 100%"></el-divider>
          <div class="center">
            <div>
              <h3>用户黑名单</h3>
              <span>查看或撤销已屏蔽用户</span>
            </div>
            <el-button style="float: right" type="text">编辑</el-button>

          </div>

            <el-divider style="width: 100%"></el-divider>
          <div class="center">
            <div>
              <h3>瓦力黑名单</h3>
              <span>查看或撤销已屏蔽用户</span>
            </div>
            <el-button style="float: right" type="text">编辑</el-button>

          </div>
          <el-divider style="width: 100%"></el-divider>
          <div class="center">
            <div>
              <h3>话题黑名单</h3>
              <span>查看或撤销已屏蔽话题</span>
            </div>
            <el-button style="float: right" type="text">编辑</el-button>

          </div>

            <el-divider style="width: 100%"></el-divider>
          <div class="center">
            <div>
              <h3>不看他动态</h3>
              <span>查看或撤销已屏蔽用户动态</span>
            </div>
            <el-button style="float: right" type="text">编辑</el-button>

          </div>
            <el-divider style="width: 100%"></el-divider>
          <div class="center">
            <div>
              <h3>邮件设置</h3>
              <span>重要事件发生时，我将会收到邮件提醒</span>
            </div>
            <el-button style="float: right" type="text">编辑</el-button>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="隐私">
        <div style="background-color: #ffffff;min-width: 500px">

            <h3>隐私</h3>
            <span>隐私保护</span>
            <el-divider style="width: 100%"></el-divider>
          <div class="center">
            <h3>隐私保护</h3>
            <el-button style="float: right" type="text">编辑</el-button>
          </div>

            <el-divider style="width: 100%"></el-divider>
          <div class="center">
            <div>
              <h3>瓦力黑名单</h3>
              <span>查看或撤销已屏蔽用户</span>
            </div>
            <el-button style="float: right" type="text">编辑</el-button>
          </div>

            <el-divider style="width: 100%"></el-divider>
          <div class="center">
            <h3>在站外隐藏个人信息</h3>
            <el-switch style="float: right">编辑</el-switch>
          </div>

            <el-divider style="width: 100%"></el-divider>
          <div class="center">
            <div>
              <h3>不看他动态</h3>
              <span>查看或撤销已屏蔽用户动态</span>
            </div>
            <el-button style="float: right" type="text">编辑</el-button>
          </div>

            <el-divider style="width: 100%"></el-divider>
          <div class="center">
            <div>
              <h3>邮件设置</h3>
              <span>重要事件发生时，我将会收到邮件提醒</span>
            </div>
            <el-button style="float: right" type="text">编辑</el-button>
          </div>

        </div>
      </el-tab-pane>
      <el-tab-pane label="偏好设置">
        <div style="background-color: #ffffff">
            <h3>偏好设置</h3>
            <span>图片水印/瓦力保镖私信保护/快捷键</span>
            <el-divider style="width: 100%"></el-divider>
          <div class="center">
            <div>
              <h3>图片水印</h3>
              <span>在我上传的图片上显示水印</span>
            </div>
            <el-button style="float: right" type="text">编辑</el-button>
          </div>

            <el-divider style="width: 100%"></el-divider>
          <div class="center">
            <div >
              <h3>瓦力保镖私信保护</h3>
              <span>开启后，系统会对你收到的私信进行检测，被识别为「不友善」的私信将会被自动隐藏，严重者将会主动帮你拉黑对方，以减少收到「不友善」私信的打扰。</span>
            </div>
            <el-switch style="float: right">编辑</el-switch>
          </div>

            <el-divider style="width: 100%"></el-divider>
          <div class="center">
            <div >
              <h3>快捷键</h3>
              <span>查看或撤销已屏蔽话题</span>
            </div>
            <el-button style="float: right" type="text">编辑</el-button>
          </div>

            <el-divider style="width: 100%"></el-divider>

        </div>

      </el-tab-pane>

    </el-tabs>
    <div  class="fixed-view" v-if="active==='0' ">
      <div class="move-view">
        <h3>常见问题</h3>
        <h4>账号与密码</h4>
        <ol>
          <li>
            <a>为什么要做二次验证</a>
          </li>
          <li>
            <a>二次验证的手机/邮箱不可用？</a>
          </li>
          <li>
            <a>忘记密码怎么办？</a>
          </li>
          <li>
            <a>手机丢失，手机号不可用怎么办？</a>
          </li>
          <li>
            <a>我要绑定的手机号提示我已经注册了，怎么办？</a>
          </li>

        </ol>
      </div>

    </div>
    <div  class="fixed-view" v-if="active==='1' ">
      <div class="move-view">
        <h3>常见问题</h3>
        <h4>账号与密码</h4>
        <ol>
          <li>
            <a>为什么要做二次验证</a>
          </li>
          <li>
            <a>二次验证的手机/邮箱不可用？</a>
          </li>
          <li>
            <a>忘记密码怎么办？</a>
          </li>
          <li>
            <a>手机丢失，手机号不可用怎么办？</a>
          </li>
          <li>
            <a>我要绑定的手机号提示我已经注册了，怎么办？</a>
          </li>

        </ol>
      </div>
    </div>
    <div  class="fixed-view" v-if="active==='2' ">
      <div  class="move-view">
        <h3>常见问题</h3>
        <h4>账号与密码</h4>
        <ol>
          <li>
            <a>为什么要做二次验证</a>
          </li>
          <li>
            <a>二次验证的手机/邮箱不可用？</a>
          </li>
          <li>
            <a>忘记密码怎么办？</a>
          </li>
          <li>
            <a>手机丢失，手机号不可用怎么办？</a>
          </li>
          <li>
            <a>我要绑定的手机号提示我已经注册了，怎么办？</a>
          </li>

        </ol>
      </div>
    </div>
    <div class="fixed-view" v-if="active==='3' ">
      <div class="move-view">
          <h3>常见问题</h3>
          <h4>账号与密码</h4>
          <ol>
            <li>
              <a>为什么要做二次验证</a>
            </li>
            <li>
              <a>二次验证的手机/邮箱不可用？</a>
            </li>
            <li>
              <a>忘记密码怎么办？</a>
            </li>
            <li>
              <a>手机丢失，手机号不可用怎么办？</a>
            </li>
            <li>
              <a>我要绑定的手机号提示我已经注册了，怎么办？</a>
            </li>

          </ol>

      </div>
    </div>
    <div class="fixed-view" v-if="active==='4' ">
      <div class="move-view">
          <h3>常见问题</h3>
          <h4>账号与密码</h4>
          <ol>
            <li>
              <a>为什么要做二次验证</a>
            </li>
            <li>
              <a>二次验证的手机/邮箱不可用？</a>
            </li>
            <li>
              <a>忘记密码怎么办？</a>
            </li>
            <li>
              <a>手机丢失，手机号不可用怎么办？</a>
            </li>
            <li>
              <a>我要绑定的手机号提示我已经注册了，怎么办？</a>
            </li>

          </ol>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'setting',
  data () {
    return {
      active: ''
    }
  }
}
</script>

<style scoped lang="scss">
  .setting-view{
    width: 80%;
    margin: auto;
    padding: 10px;
    min-height: 1000px;
    text-align: left;
  }
  /deep/
  .el-tabs--border-card>.el-tabs__content{
    background-color: #ffffff;

  }
  /deep/
  .el-tabs--left .el-tabs__nav-wrap.is-left.is-scrollable{
    padding: 0;
  }

  /deep/
  .el-tabs--left .el-tabs__item.is-left {
    text-align: center;
    height: 50px;
    padding-left: 28px;
    background-color: #ffffff;
  }
  /deep/
  .el-tabs--left.el-tabs--border-card .el-tabs__item.is-left.is-active {
    border-color: transparent;
    border-top-color: #d1dbe5;
    border-bottom-color: #d1dbe5;
    background: rgba(133,144,166,.08);
    color: #444;
  }
  a{
    font-size: 14px;
    color: #999999;
  }
  li{
    padding: 10px;
    text-align: left;
  }
  .fixed-view{
    margin-left: 10px;
    background-color: white;
    padding: 10px;
    height: 425px;
    min-width: 240px
  }
  .move-view{
    position: fixed;
    max-width:240px ;
  }
  h3{
    font-size: 19px;
    padding: 10px;
  }
  span{
    font-size: 14px;
    color: #8590A6;
    padding: 10px;
    max-width: 100px;
  }
  .center{
    display: flex;
    align-items: center;
    justify-content: space-between
  }
  /deep/
  .el-tabs--left.el-tabs--border-card .el-tabs__header.is-left {
    border-left: 1px solid #f4f4f5;
    background-color: white;
  }

</style>
