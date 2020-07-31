<template>
    <div class="test-page">
      <div  class="progress"></div>
      <div class="op-view">
        <el-button @click="show">增加节点</el-button>
        <el-button @click="remove">删除节点</el-button>
      </div>

      <el-menu mode="horizontal">
        <el-menu-item  v-for="i in 10" :key="i">{{i}}</el-menu-item>
      </el-menu>
      <div class="test-area" ref="area">
        <div class="view">hello</div>
<div class="view">test</div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'test',
  created () {
    this.initProgress()
  },
  methods: {
    initProgress: function () {
      let pageHeight = document.body.scrollHeight || document.documentElement.scrollHeight// 页面总高度
      let windowHeight = document.body.clientHeight || document.documentElement.clientHeight
      let val = pageHeight + windowHeight
      window.onscroll = function () {
        let scrollTop = document.body.scrollTop || document.documentElement.scrollTop
        document.getElementsByClassName('progress').style.width = (scrollTop / val) * 100 + '%'
      }
    },
    show: function () {
      let node = document.getElementsByClassName('test-page')
      console.log(node)
      let newNode = document.createElement('h1')
      let textNode = document.createTextNode('test')
      newNode.innerText = 'this is build by create'
      newNode.append(textNode)
      node.appendChild(newNode)
    },
    remove: function () {
      let node = this.$refs['area']
      let words = ['hello', 'test', 'appdan']
      for (let i of [...words]) {
        let newNode = document.createElement('p')
        let tesxt = document.createTextNode(i)
        newNode.append(tesxt)
        node.appendChild(newNode)
        // this.function1()
        // this.func2()
        // this.func3()
        // this.func4()
        // this.func5()
        // this.func6()
        // this.func7()
        // this.func8()
        this.func9()
      }
    },
    function1: function () {
      let obj = {}
      obj.hello = 'hello'
      obj['test'] = 'test'
      for (let i in obj) {
        console.log(i)
      }

      class obj2 {
        constructor (x) {
          this.x = x
        }

        test () {
          console.log(this.x)
        }
      }

      let testObj = new obj2('hello')
      testObj.test()
    },
    func2: function () {
      let a = 'hello hello test '
      console.log(a.indexOf('h'))
      console.log(a.lastIndexOf('l'))
      let s = a.replace(/l/g, 'd')
      console.log(a)
      console.log(s)
      console.log(a.substring(0, 5))
      console.log(a.slice(0, 5))
      console.log(a.charAt(0))
      console.log(a.charCodeAt(0))
      let h = a.concat('lallalla')
      console.log(h)
      console.log(a.split(' '))
      console.log(a.split(' ').join(','))
    },
    func3: function () {
      let a = 1.9
      console.log(Math.floor(a))
      console.log(Math.round(a))
      console.log(Math.max(a, 2))
      console.log(Math.min(a, 1))
      console.log(Math.pow(4, 2))
      console.log(Math.sqrt(4))
      console.log(Math.random())
    },
    func4: function () {
      let a = []
      let b = [1, 2, 4]
      a.push(1)
      console.log(a)
      console.log(a.shift())
      console.log(a)
      console.log(a.unshift(...b))
      console.log(a.reverse())
      console.log(a.slice(0, 1))
      console.log(a.sort((a, b) => a - b))
      a.forEach(item => {
        console.log(item)
      })
      let s = a.map(item => item + 1)
      console.log(s)
    },
    func5: function () {
      let a = [1, 2, 3, 5, 6, 1, 2]
      let b = new Set([...a])
      console.log(b)
      console.log(b.add('tets'))
      console.log(b.has('1'))
      console.log(b.delete('1'))
      console.log(b.entries())
      console.log(b.keys())
      console.log(b.values())
      console.log()
    },
    func6: function () {
      let a = new Promise((resolve, reject) => {
        setTimeout(function () {
          resolve('success')
        }, 2000)
      }).then(response => {
        console.log(response)
        return 'after'
      }).catch(err => {
        console.log(err)
      }).then(response => {
        console.log(response)
      })
      let b = new Promise((resolve, reject) => {
        resolve('success')
      }).then(response => {
        console.log(response)
      })
      Promise.all(a, b).then(response => {
        console.log(response)
      }).catch(error => [
        console.log(error)
      ])

      async function getMom () {
        const a = await setTimeout(() => {
          console.log('test')
        }, 2000)
        const b = await 'test'
        return a + b
      }

      getMom().then(response => {
        console.log(response)
      })
    },
    func7: function () {
      for (let i = 0; i < 10; i++) {
        console.log(i)
      }
      for (var _i = 0; _i < 10; _i++) {
        console.log(_i)
      }
      (function () {
        for (let i = 0; i < 10; i++) {
          console.log(i)
        }
      })()

      function _const (key, value) {
        const desc = {
          value,
          writable: false
        }
        Object.defineProperty(window, key, desc)
      }

      _const('obj', {a: 1})
      obj.b = 2
      obj = {}
      console.log(obj)

      var __const = function (data, value) {
        window.data = value
        Object.defineProperty(window, data, {

        })
      }
    },
    func8: function () {
      let s = 'hello world'
      let left = 0
      Function.prototype.myCall = function (thisArg, ...args) {
        const fn = Symbol('fn')
        thisArg = thisArg || window
        thisArg[fn] = this
        const result = thisArg.fn(...args)
        delete thisArg[fn]
        return result
      }
    },
    func9: function () {
      function Node (data, left, right) {
        this.data = date
        this.left = left
        this.right = right
      }
      Node.prototype = {
        show: function () {
          console.log(this.data)
        }
      }
      function Tree () {
        this.root = null
      }
      Tree.prototype = {
        insert: function (data) {
          let node = new Node(data, null, null)
          if (!this.root) {
            this.root = node
          }
          let current = this.root
          let parent = null
          while (current) {
            parent = current
            if (data < parent.data) {
              current = current.left
              if (!current) {
                parent.left = node
                return
              }
            } else {
              current = current.right
              if (!current) {
                parent.right = node
                return
              }
            }
          }
        },
        preOrder: function (node) {
          if (node) {
            node.show()
            this.preOrder(node.left)
            this.preOrder(node.right)
          }
        },
        middleOeder: function (node) {
          if (node) {
            this.middleOeder(node.left)
            node.show()
            this.middleOeder(node.right)
          }
        },
        lastOrder: function (node) {
          if (node) {
            this.lastOrder(node.left)
            this.lastOrder(node.right)
            node.show()
          }
        },
        getMin: function () {
          let current = this.root
          while (current) {
            if (!current.left) {
              return current
            }
            current = current.left
          }
        },
        getMax: function () {
          let current = this.root
          while (current) {
            if (!current.right) {
              return current
            }
            current = current.right
          }
        },
        getDeep: function (node, deep) {
          deep = deep || 0
          if (node == null) {
            return deep
          }
          deep++
          let dleft = this.getDeep(node.left, deep)
          let dright = this.getDeep(node.right, deep)
          return Math.max(dleft, dright)
        }
      }
      function BinarySearch (data, arr, start, end) {
        if (start > end) {
          return -1
        }
        let mid = Math.floor((end + start) / 2)
        if (data == arr[mid]) {
          return mid
        } else if (data < arr[mid]) {
          return BinarySearch(data, arr, start, mid - 1)
        } else {
          return BinarySearch(data, arr, mid + 1, end)
        }
      }
      let travel = function (root) {
        const result = []
        const stack = []
        let current = root
        while (current || stack.length > 0) {
          while (current) {
            stack.push(current)
            current = current.left
          }
          current = stack.pop()
          result.push(current.val)
          current = current.right
        }
        return result
      }
      let rebuildTree = function () {

      }
    }
  }
}
</script>

<style scoped lang="scss">
  .test-page{
    background-color: #4AB7BD;
    padding: 10px 0 0 ;
    width: 100%;
    height: 100%;
  }
  .test-area{
    /*float: left;*/
  }
  .view{
    padding: 10px;
    margin: 10px;
    border:1px solid black;
    float: right;
  }
  .progress{
    position: fixed;
    top:0;
    height: 5px;
    background: red;
  }

</style>
