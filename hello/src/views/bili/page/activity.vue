<template>
    <div class="activity-page">
      <div class="activity-content">
        <div class="activity-pane">
          <el-card>
            <div slot="header">
              <span>热门动态</span>
            </div>
          <p>this is header</p>
          </el-card>
        </div>
        <div class="login-page">
          <div class="image" ></div>
          <p>属于你的新世界</p>
          <span>赶快探索登录吧!</span>
          <el-button>登录</el-button>
          <el-button>注册</el-button>
        </div>

      </div>
    </div>
</template>

<script>
export default {
  name: 'activity'
}
</script>

<style scoped lang="scss">
  .activity-page{
    background: url('https://s2.hdslb.com/bfs/static/blive/blfe-dynamic-web/static/img/background.bc725153.png') no-repeat;
    min-height: 55vw;
    display: flex;
  }
  .activity-content{
    width: 1000px;
    display: flex;
    margin: 0 auto;
    padding-top: 10px;
  }

  .activity-pane{
    width: 80%;
  }
  .image{
    width: 141px;
    height: 98px;
    background: url('//s2.hdslb.com/bfs/static/blive/blfe-dynamic-web/static/img/no-login.9be609c5.png') center/contain no-repeat;
    margin: 40px 0 25px;
  }
  .login-page{
    background-color: white;
    margin-left: 10px;
  }


</style>
