<template>
    <div class="soul-chat-view" style="text-align: center ;width: 100%;background-color:#b3d8ff" >
      <div class="soul-chat-content" style="margin-left: 120px;margin-right:120px;height: 100%">
        <el-container>
          <el-aside style="background-color: #f4f7fa">
            <div class="person-view" style="padding: 10px">
              <el-row>
                <el-col :span="6"><el-avatar :src="url"></el-avatar></el-col>
                <el-col :span="6"> <p>nickname</p></el-col>
                <el-col :span="6">

                  <el-popover placement="top-start" trigger="click" width="200">
                    <ul>
                      <li ><i class="el-icon-setting"></i>关闭桌面图标</li>
                      <li><i class="el-icon-setting"></i>关闭声音</li>
                      <li><i class="el-icon-setting"></i>退出登录</li>
                    </ul>
                    <i class="el-icon-setting" slot="reference"></i>
                  </el-popover>
                </el-col>
              </el-row>

            </div>
            <div  class="chat-view" style="text-align: center">
              <el-tabs style="width: 100%;text-align: center">
                <el-tab-pane label="聊天">
                  <ul>
                    <li v-for="i in 4" :key="i">好友{{i}}</li>
                  </ul>
                </el-tab-pane>
                <el-tab-pane label="密友">
                  <ul style="padding: 0;margin:0">
                    <li v-for="user in users" :key="user.id" :style="user.styleObj"  @click="changeColor(user)">
                      <el-row >
                        <el-col :span="4" style="margin-left: 10px;margin-right: 10px"> <el-avatar :src="user.url"></el-avatar></el-col>
                        <el-col :span="4" style="margin-left: 10px;margin-right: 10px">                        <p>{{user.nickname}}</p>
                        </el-col>
                        <el-col :span="4" style="margin-left: 10px;margin-right: 10px">                        <p>{{user.date}}</p>
                        </el-col>
                      </el-row>

                    </li>
                  </ul>
                </el-tab-pane>

              </el-tabs>
            </div>
          </el-aside>
          <el-main style="background-color:white;padding: 0"> <div class="message-view">

            <div class="no-login-view" v-if="show">
              <p>{{current.nickname}}</p>
              <el-avatar :src="current.url"></el-avatar>
              <el-divider></el-divider>
              <div class="chat-content" style="background-color: white;height:350px ">
                <div class="list-view" v-for="m in messages" :key="m.id" style="height: 20px;background-color: #13ce66;width: auto;border-radius: 4px">
                  <p>{{m.info}}</p>
                </div>
              </div>
              <el-divider></el-divider>
              <div class="send-view" style="background-color: white;height: 180px">

                <div class="too-bar" style="padding: 10px">
                  <el-popover placement="top-start" width="500" trigger="click" style="height: 200px">
                    <el-image v-for="i in 10" :key="i" :src="url"></el-image>
                    <el-button icon="el-icon-setting" circle style="float: left" slot="reference"></el-button>

                  </el-popover>
                </div>
                <el-input v-model="sendWord"></el-input>
                <p><span>alter enter 换行</span></p><el-button @click="send">发送</el-button>

              </div>

            </div>
            <div class="login-view" v-else>
              <div class="header" style="height: 60px">

              </div>
              <el-divider></el-divider>
              <div class="no-messgae" style="text-align: center">
                <el-image :src="url3"></el-image>
                <p style="font-size: 12px;color: #999999">未选择聊天</p>
              </div>

            </div>

          </div></el-main>
        </el-container>

      </div>

    </div>
</template>

<script>
export default {
  name: 'soul',
  data () {
    return {
      url: 'http://img.soulapp.cn/heads/1565235532075.png?imageView2/0/w/132',
      users: [{id: 1, nickname: '娜娜', url: 'http://img.soulapp.cn/heads/avatar_girl_default.png?imageView2/0/w/132', date: '13:31'},
        {id: 2, nickname: '婷婷', url: 'http://img.soulapp.cn/heads/avatar_girl_default.png?imageView2/0/w/132', date: '20190906 12:00:00'}],
      current: {
        nickname: '',
        url: ''
      },
      show: false,
      url3: 'https://s1-cdn.soulapp.cn/webim/img/im_message_empty@3x.25d19da5b1.png',
      styleObj: {

      },
      sendWord: '',
      messages: [{id: 1, info: '嘿嘿'}],
      websock: null
    }
  },
  created () {
    this.getUsers()
    this.initWebSocket()
  },
  methods: {
    getUsers: function () {
      // this.users = []
    },
    changeColor: function (value) {
      console.log(value)
      this.current = value
      this.show = true
      value.styleObj = {
        backgroundColor: 'white',
        border: '2px solid #f4f7fa'
      }
    },
    send: function () {
      console.log(this.sendWord)
      this.websocketonmessage(this.sendWord)
    },
    initWebSocket: function () {
      const wsurl = 'ws://localhost:8000/chat'
      this.websock = new WebSocket(wsurl)
      this.websock.onmessage = this.websocketonmessage
      this.websock.onopen = this.websocketonopen
      this.websock.onerror = this.websocketonerror
      this.websock.onclose = this.websocketclose
    },
    websocketonmessage: function (message) {
      this.websocketsend(message)
    },
    websocketonopen: function () {

    },
    websocketonerror: function () {

    },
    websocketclose: function () {
      this.websock.close()
    },
    websocketsend: function (message) {
      this.websock.send(message)
    }
  },
  destroyed: function () {

  }
}
</script>

<style scoped>
  li{
    list-style: none;
  }
  .el-popover{
    padding: 0;
  }
  .el-tabs__item{
    width: 70px;
  }

</style>
