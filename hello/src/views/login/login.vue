<template>
    <div class="login-page" style="text-align: center">
      <div class="login-header" style="height: 100px">
      <el-image></el-image>
      </div>
      <el-form inline="true" label-width="120px" >
        <el-form-item label="用户名" style="width: 100%">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="密码" style="width: 100%">
          <el-input></el-input>
        </el-form-item>
        <el-form-item style="width: 100%;padding-left: 40px">
          <el-button>登录</el-button>
          <el-button>注册</el-button>
        </el-form-item>
      </el-form>

      <div class="login-footer" style="height: 50px">
         <el-image></el-image>
      </div>

    </div>
</template>

<script>
export default {
  name: 'login'
}
</script>

<style scoped>

</style>
