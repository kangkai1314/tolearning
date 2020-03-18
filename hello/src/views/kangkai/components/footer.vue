<template>
    <div class="footer_area">
      <el-button @click="sets">测试sets</el-button>
      <el-button @click="showMap">测试map</el-button>
      <el-button @click="showArray">测试数组</el-button>
      <el-button @click="showStr">测试字符串</el-button>
      <el-button @click="showObj">测试对象</el-button>
      <el-button @click="showPromise">测试异步操作</el-button>

      <div class="link_area" :class="{backgroundColor:color}">
          <el-link v-for="i in 10" :key="i" style="margin: 10px">测试</el-link>

      </div>
      <div class="banner" >
        <el-tooltip content="众志成城，万众一心，抗击肺炎">
          <el-image :src="url"></el-image>
        </el-tooltip>
      </div>

    </div>
</template>

<script>
export default {
  name: 'footerArea',
  data () {
    return {
      url: 'https://pic2.zhimg.com/v2-6e8fccc8a30e8cf15a90e7a894011579_r.jpg',
      color: 'red'

    }
  },
  methods: {
    sets: function () {
      let a = new Set()
      console.log(a)
      let c = {
        b: 'hello',
        h: 123,
        ab: undefined
      }
      for (let cKey in c) {
        a.add(c[cKey])
      }
      console.log(a)
      console.log(a.keys())
      console.log(a.values())
      console.log(a.entries())
      console.log([...a])
      for (let i in a.entries()) {
        console.log(i)
      }
      for (let i in a.keys()) {
        console.log(i)
      }
      for (let i in a.values()) {
        console.log(i)
      }
      for (let i of a) {
        console.log(i)
      }
      a.forEach((value, key) => {
        console.log(value)
      })
    },
    showMap: function () {
      console.log('show map use funtion')
      let m = new Map()
      console.log('map add')
      m.set('hello', 'test')
      console.log(m)
      console.log(m.get('hello'))
      m.has('hello')
      m.delete('hello')
      let items = [['a', 'b'], ['c', 'd']]
      let s = new Map(items)
      console.log(s)
    },
    showArray: function () {
      let a = ['a', 1, 2]
      console.log(a)
      a.forEach(value => {
        console.log(value)
      })
      for (let i of [...a]) {
        console.log(i)
      }
      console.log([3, 15, 8, 29, 102, 22].sort())
      let name = 'Tom';
      (function () {
        if (typeof name === 'undefined') {
          var name = 'Jack'
          console.log('Goodbye ' + name)
        } else {
          console.log('Hello ' + name)
        }
      })()
    },
    showStr: function () {
      let a = 'hello'
      for (let i of a) {
        console.log(i)
      }
    },
    showObj: function () {
      let a = {}
      let b = {}
      console.log(Object.is(a, b))
      console.log(a === b)
    },
    showPromise:function () {


    }

  }
}
</script>

<style scoped lang="scss">
  .link_area{
    display: flex;
    flex-wrap: wrap;
  }

</style>
