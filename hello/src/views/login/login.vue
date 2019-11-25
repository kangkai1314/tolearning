<template>
    <div class="login-page" style="text-align: center">
      <div class="login-header" style="height: 100px">
      <el-image></el-image>
      </div>
      <el-form :inline="true" label-width="120px" :rules="rules" :model="login" ref="login" >
        <el-form-item label="用户名" style="width: 100%" prop="username">
          <el-input v-model="login.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" style="width: 100%" prop="password">
          <el-input v-model="login.password"></el-input>
        </el-form-item>
        <el-form-item style="width: 100%;padding-left: 40px">
          <el-button @click="logined('login')">登录</el-button>
          <el-button>注册</el-button>
        </el-form-item>
      </el-form>

      <div class="login-footer" style="height: 50px">
         <el-image></el-image>
      </div>

    </div>
</template>

<script>
import {setCookie} from '../../utils/cookie'

export default {
  name: 'login',
  data () {
    return {
      rules: {
        username: [{
          required: true, message: '用户名不能为空', trigger: 'blur'
        }],
        password: [{
          required: true, message: '密码不能为空', trigger: 'blur'
        }]
      },
      login: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    logined: function (formName) {
      console.log(this.login)
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log(this.login)
          let postData = JSON.parse(JSON.stringify(this.login))
          this.$store.dispatch('login', postData).then(accessToken => {
            console.log(accessToken)
            setCookie('access_token', accessToken)
            this.$message.success('login success')
            this.$router.push({name: '首页'})
          }).catch(error => {
            console.log(error)
          })
        } else {
          this.$message.error('error')
          return false
        }
      })
    }

  }
}
</script>

<style scoped>

</style>
