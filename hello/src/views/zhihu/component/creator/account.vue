<template>
<div class="account-view">
  <h3>账号信息</h3>
  <div class="content">
    <div class="head">
      <div>
        <h3>实名注册信息</h3>
        <div>
          <span>部分权限权益的开通和创收体现必须完成实名认证</span> <el-link>了解详情</el-link>
        </div>

      </div>
      <el-button type="text">立即认证</el-button>

    </div>
    <div>
      <div style="font-weight: bold">
      <el-form>
        <el-form-item label="姓名">
          <p>--</p>
        </el-form-item>
        <el-form-item label="证件号码">
          <p>--</p>
        </el-form-item> <el-form-item label="证件资料">
        <p>--</p>
      </el-form-item>
      </el-form>
      </div>
    </div>

  </div>
  <div class="content">
    <div class="head">
      <h3>联系信息</h3>
      <el-button type="text">修改</el-button>

    </div>
    <div>
      <el-form>
        <el-form-item label="电子邮箱">
          <p>***********@qq.com</p>
        </el-form-item>
        <el-form-item>
          <p>**************</p>
        </el-form-item>
      </el-form>
    </div>
    <div class="content">
      <div class="head">
        <h3>擅长领域</h3>
        <p>使用内容自荐权益先填擅长领域</p>
        <el-link>了解详情</el-link>
        <el-button type="text">马上填写</el-button>
      </div>
      <div>
        <el-form>
          <el-form-item label="专业领域"> <p>-----</p></el-form-item>
          <el-form-item label="专业背景"><p>-------</p></el-form-item>
        </el-form>
      </div>
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: 'account',
  data () {
    return {

    }
  }
}
</script>

<style scoped lang="scss">
.account-view{
  margin-top: 10px;
  background-color: white;
}
  h3{
    padding: 10px;
    border-bottom: 1px solid #f4f4f5;
  }
  .content{
    margin: 10px;
    border: 1px solid #f4f4f5;
  }
  .head{
    justify-content: space-between;
    align-items: center;
    display: flex;
    border-bottom: 1px solid #f4f4f5;
    padding: 10px;
  }
</style>
