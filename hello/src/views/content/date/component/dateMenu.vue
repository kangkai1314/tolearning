<template>
  <div class="date-view">
    <div class="header">
      <el-col :span="4" class="content">
        <el-image :src="url" ></el-image>

      </el-col>
      <el-col :span="1"  class="content">
        <el-divider direction="vertical" ></el-divider>
      </el-col>

      <el-col :span="4"  class="content">
        <h3>婚恋网站</h3>
      </el-col>
      <el-col :span="12"  class="content">
        <el-form :inline="true">
          <el-form-item><el-input ></el-input></el-form-item>
          <el-form-item><el-input ></el-input></el-form-item>
          <el-form-item><el-button>登录</el-button></el-form-item>
          <el-form-item><a >忘记密码</a></el-form-item>
        </el-form>

      </el-col>
    </div>
  <div class="content_bg">
 <el-form class="register-form">
   <el-form-item><h3>{{slogan}}</h3></el-form-item>
   <el-form-item label="性别"> <el-radio-group><el-radio label="男"></el-radio>
   <el-radio label="女"></el-radio></el-radio-group></el-form-item>
   <el-form-item label="出生年月"> <el-date-picker></el-date-picker></el-form-item>
   <el-form-item label="所在地区"><el-select></el-select></el-form-item>
   <el-form-item label="婚姻状况">
     <el-radio-group>
       <el-radio label="未婚"></el-radio>
       <el-radio label="li婚"></el-radio>
       <el-radio label="丧偶"></el-radio>
     </el-radio-group>
   </el-form-item>
   <el-form-item>
     <el-button>注册</el-button>
   </el-form-item>
 </el-form>
  </div>
    <div class="public-list"></div>
    <div class="new-user"></div>
    <div class="new-user-succeed">
    </div>
    <div class="blueservice"></div>

  </div>
</template>

<script>
export default {
  name: 'dateMenu',
  data () {
    return {
      url: 'http://images2.jyimg.com/msn/index_pic/jy_common_1560408756.jpeg'
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../../../styles/variables";
.header{
  padding: $paddingBottom $paddingHeader $paddingBottom  $paddingHeader;
  display: block;
  height: 70px;
  .content{
    height: 70px;

  }
  /deep/
  .el-input__inner{
    height: 25px;
    width: 136px;
  }

}
 .content_bg{
   height: 450px;
   background: #edebe7 url(//images2.jyimg.com/w4/index_new/i/big_bg4.jpg) no-repeat center top;
   position: relative;
   .register-form{
     padding: 10px 10px 10px 10px;
   }
 }

  .public-list{
    height: 70px;
    background-color: #edf2fc;
  }

  .new-user{
    height: 450px;
    background-color: black;
  }
  .new-user-succeed{
    height: 450px;
    background-color: black;
  }
  .blueservice {
    background-color: #52c9eb;
    height:70px;
  }

</style>
