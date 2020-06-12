<template>
  <div class="setting-view">
    <el-tabs tab-position="left" type="border-card">
      <el-tab-pane label="账号与密码">
        <el-row style="background-color: #f4f4f5">
          <el-col :span="16" style="text-align: left; padding: 10px;background-color: white" >
            <h3>账号与密码</h3>
            <span>账号设置/个性签名</span>
            <el-divider style="width: 100%"></el-divider>
            <h3>帐号设置</h3>
            <span>绑定手机和邮箱，并设置密码，帐号更安全
            注意：为保证帐号安全，需进行二次验证。</span>
            <el-divider style="width: 100%"></el-divider>
            <h3>密码</h3>
            <span>已设置</span>
            <el-button style="float: right">编辑</el-button>
            <el-divider style="width: 100%"></el-divider>
            <h3>绑定手机</h3>
            <span>***************</span>
            <el-button style="float: right">编辑</el-button>
            <el-divider style="width: 100%"></el-divider>
            <el-divider style="width: 100%"></el-divider>
            <h3>绑定邮箱</h3>
            <span>***************</span>
            <el-button style="float: right">编辑</el-button>
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
            <h3>个性域名</h3>
            <div class="domain">
              <span>个人主页的地址，个性域名只可更改一次
zhihu.com/people/kang-kai-51-97</span>
              <el-button style="float: right">编辑</el-button>
            </div>

          </el-col>
          <el-col :span="7" style="margin-left: 5px;background-color: white; padding: 10px">
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

          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="消息与邮件">
        <el-row style="background-color: #f4f4f5">
          <el-col :span="16" style="text-align: left; padding: 10px;background-color: white" >
            <h3>消息与邮件</h3>
            <span>私信设置/邀请设置/赞同与赞赏/关注/邮件设置</span>
            <el-divider style="width: 100%"></el-divider>

            <h3>私信设置</h3>
            <span>允许谁给我发私信</span>
            <el-button style="float: right">编辑</el-button>
            <el-divider style="width: 100%"></el-divider>
            <h3>邀请/评论消息设置</h3>
            <span>有人对我发出邀请时，我会收到消息通知</span>
            <el-button style="float: right">编辑</el-button>
            <el-divider style="width: 100%"></el-divider>
            <el-divider style="width: 100%"></el-divider>
            <h3>赞同/赞赏消息设置</h3>
            <span>有人对我赞同或赞赏时，我会收到消息通知</span>
            <el-button style="float: right">编辑</el-button>
            <el-divider style="width: 100%"></el-divider>
            <h3>关注消息设置</h3>
            <span>我的关注有新动态时，我会收到消息通知</span>
            <el-button style="float: right">编辑</el-button>
            <el-divider style="width: 100%"></el-divider>
            <h3>邮件设置</h3>
            <span>重要事件发生时，我将会收到邮件提醒</span>
            <el-button style="float: right">编辑</el-button>

          </el-col>
          <el-col :span="7" style="margin-left: 5px;background-color: white; padding: 10px">
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

          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="屏蔽">
        <el-row style="background-color: #f4f4f5">
          <el-col :span="16" style="text-align: left; padding: 10px;background-color: white" >
            <h3>屏蔽</h3>
            <span>用户黑名单/话题黑名单/不看他动态</span>
            <el-divider style="width: 100%"></el-divider>

            <h3>用户黑名单</h3>
            <span>查看或撤销已屏蔽用户</span>
            <el-button style="float: right">编辑</el-button>
            <el-divider style="width: 100%"></el-divider>
            <h3>瓦力黑名单</h3>
            <span>查看或撤销已屏蔽用户</span>
            <el-button style="float: right">编辑</el-button>
            <el-divider style="width: 100%"></el-divider>
            <h3>话题黑名单</h3>
            <span>查看或撤销已屏蔽话题</span>
            <el-button style="float: right">编辑</el-button>
            <el-divider style="width: 100%"></el-divider>
            <h3>不看他动态</h3>
            <span>查看或撤销已屏蔽用户动态</span>
            <el-button style="float: right">编辑</el-button>
            <el-divider style="width: 100%"></el-divider>
            <h3>邮件设置</h3>
            <span>重要事件发生时，我将会收到邮件提醒</span>
            <el-button style="float: right">编辑</el-button>

          </el-col>
          <el-col :span="7" style="margin-left: 5px;background-color: white; padding: 10px">
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

          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="隐私">
        <el-row style="background-color: #f4f4f5">
          <el-col :span="16" style="text-align: left; padding: 10px;background-color: white" >
            <h3>隐私</h3>
            <span>隐私保护</span>
            <el-divider style="width: 100%"></el-divider>

            <h3>隐私保护</h3>
            <el-button style="float: right">编辑</el-button>
            <el-divider style="width: 100%"></el-divider>
            <h3>瓦力黑名单</h3>
            <span>查看或撤销已屏蔽用户</span>
            <el-button style="float: right">编辑</el-button>
            <el-divider style="width: 100%"></el-divider>
            <h3>在站外隐藏个人信息</h3>
            <el-switch style="float: right">编辑</el-switch>
            <el-divider style="width: 100%"></el-divider>
            <h3>不看他动态</h3>
            <span>查看或撤销已屏蔽用户动态</span>
            <el-button style="float: right">编辑</el-button>
            <el-divider style="width: 100%"></el-divider>
            <h3>邮件设置</h3>
            <span>重要事件发生时，我将会收到邮件提醒</span>
            <el-button style="float: right">编辑</el-button>

          </el-col>
          <el-col :span="7" style="margin-left: 5px;background-color: white; padding: 10px">
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

          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="偏好设置">
        <el-row style="background-color: #f4f4f5">
          <el-col :span="16" style="text-align: left; padding: 10px;background-color: white" >
            <h3>偏好设置</h3>
            <span>图片水印/瓦力保镖私信保护/快捷键</span>
            <el-divider style="width: 100%"></el-divider>

            <h3>图片水印</h3>
            <span>在我上传的图片上显示水印</span>
            <el-button style="float: right">编辑</el-button>
            <el-divider style="width: 100%"></el-divider>
            <h3>瓦力保镖私信保护</h3>
            <span>开启后，系统会对你收到的私信进行检测，被识别为「不友善」的私信将会被自动隐藏，严重者将会主动帮你拉黑对方，以减少收到「不友善」私信的打扰。</span>
            <el-switch style="float: right">编辑</el-switch>
            <el-divider style="width: 100%"></el-divider>
            <h3>快捷键</h3>
            <span>查看或撤销已屏蔽话题</span>
            <el-button style="float: right">编辑</el-button>
            <el-divider style="width: 100%"></el-divider>

          </el-col>
          <el-col :span="7" style="margin-left: 5px;background-color: white; padding: 10px">
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

          </el-col>
        </el-row>

      </el-tab-pane>

    </el-tabs>

  </div>
</template>

<script>
export default {
  name: 'setting'
}
</script>

<style scoped>
  .setting-view{
    width: 80%;
    margin: auto;
  }
  /deep/
  .el-tabs--border-card>.el-tabs__content{
    background-color: #f4f4f5;
  }
  a{
    font-size: 14px;
    color: #999999;
  }
  li{
    padding: 10px;
    text-align: left;
  }

</style>
