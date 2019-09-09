<template>
    <div class="zhihu-page" style="background-image: url(//static.zhihu.com/heifetz/assets/sign_bg.db29b0fb.png);height: 688px;
padding: 10px;text-align: center">
      <div class="zhihu-header">
        <el-image :src="url" style="width: 128px;margin-bottom: 20px"></el-image>
      </div>
      <div class="login-view" style="margin-left: 500px;margin-right: 500px">
        <div class="login-form" style="width: 400px;height: 375px;background-color: white">
          <el-tabs style="text-align: center">
            <el-tab-pane label="免密码登录">
              <el-form>
                <el-form-item>
                  <el-input placeholder="手机号"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-input placeholder="请输入六位密码"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button @click="login">注册/登录</el-button>
                </el-form-item>
              </el-form>
            </el-tab-pane>
            <el-tab-pane label="密码登录">
              <el-form>
                <el-form-item>
                  <el-input placeholder="手机号或邮箱"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-input placeholder="密码"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button>注册/登录</el-button>

                </el-form-item>
              </el-form>
            </el-tab-pane>
          </el-tabs>

          <el-row style="background-color: #f6f6f6">
            <el-col :span="14">
              <p style="font-size: 12px">未注册手机验证后自动登录
                注册即代表同意《知乎协议》《隐私保护指引》</p>
            </el-col>
            <el-col :span="10" style="padding: 10px">
              <a href="https://www.zhihu.com">注册机构号</a>
            </el-col>
          </el-row>

        </div>
        <div class="login-social" style="width: 400px;margin-top: 24px;height: 60px;background-color: white">
          <el-row >
            <el-col :span="6">          <p><span>社交登录</span></p>
            </el-col>
            <el-col :span="6"><p><i class="el-icon-guide"></i>微信</p></el-col>
            <el-col :span="6"><p><i class="el-icon-guide"></i>QQ</p></el-col>
            <el-col :span="6"><p><i class="el-icon-guide"></i>微博</p></el-col>
          </el-row>
        </div>
        <div class="login-download " style="width: 400px;margin-top: 24px;height: 60px;background-color: white;padding: 10px">
          <p>下载知乎app</p>
        </div>
      </div>

    </div>
</template>

<script>
export default {
  name: 'zhihu',
  data () {
    return {
      url: 'https://pic4.zhimg.com/80/v2-a47051e92cf74930bedd7469978e6c08_hd.png'
    }
  },
  methods: {
    login: function () {
      this.$router.push('/zhihupage')
    }
  }
}
</script>

<style scoped>

</style>
