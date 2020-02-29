<template>
  <div class="test_page_view">
    <el-container>
      <el-header style="position: fixed;text-align: center">
        <el-dropdown style="padding: 20px" @command="jump">
  <span class="el-dropdown-link">
    设置<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-setting" >主题</el-dropdown-item>
            <el-dropdown-item icon="el-icon-time" command="/person">个性化</el-dropdown-item>
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
        <el-button @click="funcTest">Test</el-button>
        <div class="test_view">
          12312312
          <p>this is test info </p>
        </div>

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
  created () {
    console.log(this)
    console.log(window)
    this.testFunc()
  },
  methods: {
    testFunc: function () {
      let a = {
        c: '12',
        d: 1,
        b: undefined,
        f: {
          h: 1,
          name: 'addd'
        },
        h: new Date()
      }
      console.log(a)
      let b = JSON.parse(JSON.stringify(a))
      console.log(b)
      let d = Object.assign({}, a)
      console.log(d)
      d.c = 13
      console.log(a)
      console.log(d)
      console.log(b)
      function Parent () {

      }
      let p = new Parent()
      console.log(p)
      console.log(Parent.constructor)
      console.log(Parent.prototype)
    },
    showMessage: function () {
      setTimeout(this.show, 3000)
      let a = document.getElementById('p')
      console.log(a)
      this.newPro().then(data => {
        console.log(data)
      }, err => {
        console.log(err)
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

      })
    },
    funcTest: function () {
      let str = 'annnannaxcz'
      for (let s of str) {
        console.log(s)
      }
      let s = [...str]

      console.log(s)
      let func1 = i => { console.log(i) }
      let func2 = () => ({id: '1', a: '2'})
      func1('jiantou')
      console.log(func2())
      (function () {
        console.log('niminghanshu ')
      }())
    },
    jump:function (command) {
      console.log('this is jumop')

     this.$router.push(command)
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
  ul{
    overflow: hidden;
    z-index: 0;
  }

  .test_view{
    font-size: 12px;
  }
  *{
    font-size: 18px;
  }

</style>
