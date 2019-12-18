<template>
  <div class="test_page_view">
    <el-container>
      <el-header style="position: fixed;text-align: center">
        <el-dropdown style="padding: 20px">
  <span class="el-dropdown-link">
    设置<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-setting" >主题</el-dropdown-item>
            <el-dropdown-item icon="el-icon-time" >个性化</el-dropdown-item>
            <el-dropdown-item icon="el-icon-exit">退出</el-dropdown-item>

          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-form :inline="true">
        <el-form-item label="颜色">
          <el-switch v-model="color">
          </el-switch>
        </el-form-item>
        <el-form-item label="button">
          <el-button @click="showMessage" :style="styleObj">测试</el-button>
        </el-form-item>
      </el-form>
      <el-main>
        <p  :class="classObj">this is test view</p>
        <el-form v-model="obj" :inline="true">
          <el-form-item >
            <el-input v-model="obj.value1"></el-input>
            <el-input v-model="obj.value2"></el-input>
          </el-form-item>
          <el-form-item label="合计">
           <el-input v-model="obj.values"></el-input>
          </el-form-item>
        </el-form>
        <ul>
          <li v-for="i in 100" :key="i">
            info {{i}}
          </li>
        </ul>

      </el-main>

    </el-container>

  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      color: true,
      styleObj: {
        color: 'blue',
        backgroundColor: 'black'
      },
      obj: {
        value1: '',
        value2: '',
        values: ''
      }
    }
  },
  methods: {
    showMessage: function () {
      setTimeout(this.show, 3000)
      let a = document.getElementById('p')
      console.log(a)
      this.newPro().then(data => {

        console.log(data)
      }, err => {
        console.log(error)
      })
    },
    show: function () {
      this.$alert('show message')
    },
    functionA: function () {
      let a = 'a'
      console.log(a)
      console.log(this.funcitonB())
    },
    funcitonB: function () {
      let b = 'b'
      console.log(b)
      console.log(this)
      function functionC () {
        console.log('c')
        console.log(b)
        b = 'hello'
        console.log(b)
        console.log(this)
        return b
      }
      return functionC()
    },
    newPro: function () {
      return new Promise((resolve, reject) => {
        console.log('new promise')
        reslove()
      })
    }
  },
  computed: {
    classObj: function () {
      if (this.color === true) {
        return 'red'
      } else {
        return 'blue'
      }
    }
  },
  watch: {
    obj: {
      handler: function (oldVal, newVal) {
        this.obj.values = this.obj.value1 + this.obj.value2
        let a = []
        a.push(this.obj.value1)
        console.log(a)
        let b = []
        b.push(this.obj.value2)
        Array.prototype.push.apply(a, b)
        console.log(a)
      },
      deep: true
    }
  }
}
</script>

<style scoped lang="scss">
  .red{
    color: red;
  }
  .blue{
    color: cyan;
  }

</style>
