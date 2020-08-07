<template>
    <div class="test-page">
      <!--<div  class="progress"></div>-->
      <!--<div class="op-view">-->
        <!--<el-button @click="show">增加节点</el-button>-->
        <!--<el-button @click="remove">删除节点</el-button>-->
        <!--<el-button @click="total">算法测试</el-button>-->
      <!--</div>-->

      <!--<el-menu mode="horizontal">-->
        <!--<el-menu-item  v-for="i in 10" :key="i">{{i}}</el-menu-item>-->
      <!--</el-menu>-->
      <!--<div class="test-area" ref="area">-->
        <!--<div class="view">hello</div>-->
<!--<div class="view">test</div>-->
      <!--</div>-->
      <div class="left">

      </div>
      <div class="right">

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
    },
    total: function () {
      this.strFunc()
    },
    strFunc: function () {
      function isNumber (str) {
        if (str == undefined) {
          return false
        }
        let hasPoint = false
        let hasRexpr = false
        for (let i = 0; i < str.length; i++) {
          let target = s[i]
          if (target >= 0 && target <= 9) {
            continue
          } else if (target === 'e' || target === 'E') {
            if (hasRexpr || i === 0 || i === str.length - 1) {
              return false
            } else {
              hasRexpr = true
              continue
            }
          } else if (target === '.') {
            if (hasPoint || hasRexpr || i === 0 || i === str.length - 1) {
              return false
            } else {
              hasPoint = true
              continue
            }
          } else if (target === '+' || target === '-') {
            if (i === 0 || s[i - 1] == 'e' || s[i] == 'E') {
              continue
            } else {
              return false
            }
          } else {
            return false
          }
        }
        return true
      }
      function replace (str) {
        return str.split(' ').join('%20')
      }
      function replace1 (str) {
        return str.replace(/\s/g, '%20')
      }
      function replace2 (str) {
        return str.replace(/\s+/g, '%20')
      }
      let str1 = ' hello       world hewllo'
      console.log(replace1(str1))
      console.log(replace2(str1))
      let s = [1, 2, 4]
      console.log(s.shift())
      function match (s, pattern) {
        if (s == undefined || pattern == undefined) {
          return false
        }
        return matchStr(s, pattern, 0, 0)
      }
      function matchStr (s, pattern, sIndex, patternIndex) {
        if (s.length === sIndex && pattern.length === patternIndex) {
          return true
        }
        if (s.length !== sIndex && patternIndex !== pattern.length) {
          return false
        }
      }
      function Permutation (str) {
        let result = []
        if (str) {
          let queue = str.split('')
          PermutiaonCore(queue, result)
        }
      }
      function PermutiaonCore (queue, result, temp = '', current = '') {
        current += temp
        if (queue.length === 0) {
          result.push(current)
          return
        }
        for (let i = 0; i < queue.length; i++) {
          let temp = queue.shift()
          PermutiaonCore(queue, result, temp, current)
          queue.push(temp)
        }
      }
      function reverseStr (str) {
        return str.split(' ').reverse().join(' ')
      }
      function leftRoate (str, n) {
        if (str && n != null) {
          return (str + str).substr(n, str.length)
        }
      }
      function count () {
        let container = new Array(256).fill(-1)
        function appearOnce () {
          let minIndex = 256
          let strIndex = 0
          for (let i = 0; i < 256; i++) {
            if (container[i] >= 0 && container[i] < minIndex) {

            }
          }
        }
      }
    },
    stackFunc: function () {
      function stackf () {
        let astack = []
        let bstack = []
        function push (node) {
          astack.push(node)
          if (bstack.length === 0 || node < min()) {
            bstack.push(node)
          } else {
            bstack.push(min())
          }
        }
        function min () {
          let length = bstack.length
          return length > 0 && bstack[bstack.length - 1]
        }
        function pop () {
          bstack.pop()
          return astack.pop()
        }
        function top () {
          let length = astack.length
          return length >= 0 && astack[length - 1]
        }
      }
      function queue () {
        let s1 = []
        let s2 = []
        function push (node) {
          s1.push(node)
        }
        function pop () {
          if (s1.length > 0) {
            while (s1.length > 0) {
              s2.push(s1.pop())
            }
            return s2.pop() || null
          }
        }
      }
      function stack () {
        let q1 = []
        let q2 = []
        function push (node) {
          q1.push(node)
        }
        function pop () {

        }
      }
    },
    arrFunc: function () {
      function printMin (numbers) {
        if (numbers || numbers.length === 0) {
          return ''
        }
        return numbers.sort(compare).join('')
      }
      function compare (a, b) {
        let front = '' + a + b
        let bihind = '' + b + a
        return front - bihind
      }
      function firstAppr (str) {
        if (!str) {
          return -1
        }
        let countMap = {}
        const array = str.split('')
        const length = array.length
        for (let i = 0; i < length; i++) {
          const current = array[i]
          let count = countMap[current]
          if (count) {
            countMap[current] = count + 1
          } else {
            countMap[current] = 1
          }
        }
        for (let i = 0; i < length; i++) {
          if (countMap[array[i]] === 1) {
            return i
          }
        }
        return -1
      }
      function firstAppr1 (str) {
        for (let i = 0; i < str.length; i++) {
          if (str.indexof(str[i]) == str.lastindexof(str[i])) {
            return i
          }
        }
      }
      function adjustNums (array) {
        if (Array.isArray(array)) {
          let start = 0
          let end = array.length - 1
          while (start < end) {
            while (array[start] % 2 === 0) {
              start++
            }
            while (array[end] % 2 === 1) {
              end--
            }
            if (start < end) {
              [array[start], array[end]] = [array[end], array[start]]
            }
          }
          return array
        }
      }
      function findSequence (sum) {
        const result = []
        let child = [1, 2]
        let small = 1
        let big = 2
        let currentSum = 3
        while (big > small) {
          while (currentSum < sum && big < sum) {
            child.push(big++)
            currentSum += big
          }
          while (currentSum > sum && small < big) {
            child.shift()
            currentSum -= small++
          }
          if (currentSum === sum && child.length > 1) {
            result.push(child)
            child.push(big++)
            currentSum += big
          }
        }
      }
      function findSum (array, sum) {
        if (array && array.length > 0) {
          let left = 0
          let right = array.length - 1
          while (left < right) {
            const s = array[left] + array[right]
            if (s > sum) {
              right--
            } else if (s < sum) {
              left++
            } else {
              return [array[left], array[right]]
            }
          }
          return []
        }
      }
      function findSumArray (array) {
        if (Array.isArray(array) || array.length > 0) {
          let sum = array[0]
          let max = array[0]
          for (let i = 1; i < array.length; i++) {
            if (sum < 0) {
              sum = array[i]
            } else {
              sum = sum + array[i]
            }
            if (sum > max) {
              max = sum
            }
          }
          return max
        }
        return 0
      }
      function twoSum (nums, target) {
        const map = {}
        if (Array.isArray(nums)) {
          for (let i = 0; i < nums.length; i++) {
            if (map[target - nums[i]] !== undefined) {
              return [map[target - nums[i]], i]
            } else {
              map[nums[i]] = i
            }
          }
        }
      }
      function IsContious (numbers) {
        if (numbers && numbers.length > 0) {
          numbers.sort()
          let kingNum = 0
          let spaceNum = 0
          for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 0) {
              kingNum++
            } else {
              let space = numbers[i + 1] - numbers[i]
              if (space === 0) {
                return false
              } else {
                spaceNum += space - 1
              }
            }
          }
          return kingNum - spaceNum >= 0
        }
        return false
      }
      function threeSum (nums) {
        const result = []
        nums.sort((a, b) => a - b)
        for (let i = 0; i < nums.length; i++) {
          if (i && nums[i] === nums[i - 1]) { continue }
          let left = i + 1
          let right = nums.length - 1
          while (left < right) {
            let sum = nums[i] + nums[left] + nums[right]
            if (sum > 0) {
              right--
            } else if (sum < 0) {
              left++
            } else {
              result.push([nums[i], nums[left], nums[right]])
              while (nums[left] === nums[left + 1]) {
                left++
              }
              while (nums[right] === nums[right - 1]) {
                right--
              }
            }
          }
        }
      }
      function countZero (nums) {
        if (nums && nums.length > 0) {
          let map = {}
          for (let i = 0; i < nums.length; i++) {
            if (map['s' + nums[i]]) {
              map['s' + nums[i]]++
            } else {
              map[nums[i]] = 1
            }
            if (map['s' + nums[i]] > nums.length / 2) {
              return nums[i]
            }
          }
        }
      }
      function InversePairs (data) {
        return MeargeSort()
      }
      function MeargeSort (array, left, right, temp) {
        if (left < right) {
          const mid = parseInt(left + right / 2)
          const l = MeargeSort(array, left, mid, temp)
          const r = MeargeSort(array, mid, right, temp)
          const m = Merge(array, left, right, temp)
          return l + r + m
        } else {
          return 0
        }
      }
      function Merge (array, left, right, mid, temp) {
      }
      function MatrixPrint (matrix) {
        let start = 0
        let rows = matrix.length
        let columns = matrix[0].length
        let result = []
        if (!row || !columns) {
          return false
        }
        while (columns > start * 2) {
          printCircles(matrix, start)
        }
      }
      function binarySearch () {

      }
    },
    heapFunc: function () {
      function adjustHeap (array, index, length) {
        for (let i = 2 * index + 1; i < length; i = 2 * i + 1) {

        }
      }
      function createMaxHeap (arr, length) {
        for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
          adjustHeap(arr, i, length)
        }
        return arr
      }
      function heap (type = 'min') {
        this.value = []
        this.type = type
      }
      heap.prototype.create = function () {
        const length = this.value.length
      }
      heap.prototype.add = function (element) {
        const array = this.value
        array.push(element)
        if (array.length > 1) {
          let index = array.length - 1
          let target = Math.floor(index - 1 / 2)
          while (target >= 0) {
            if ((this.type == 'min' && array[index] < array[target]) || (this.type == 'max' && array[index] > array[target])) {
              [array[index], array[target]] = [array[target], array[index]]
              index = target
            }
          }
        }
      }
    },
    linkListFunc: function () {
      function printList (node) {
        const array = []
        while (node) {
          array.unshift(node.val)
          node = node.next
        }
        return array
      }
      var reverseList = function (node) {
        let current = null
        let head = node
        while (head && head.next) {
          current = head.next
        }
      }
      function Merge (pHead1, pHead2) {
        if (!pHead1) {
          return pHead2
        }
        if (!pHead2) {
          return pHead1
        }
        let head
        if (pHead1.value > pHead2.value) {
          head = pHead1
          head.next = Merge(pHead1.next, pHead2)
        } else {
          head = pHead2
          head.next = Merge(pHead1, pHead2.next)
        }
        return head
      }
      function findKValue (node, k) {
        if (!node || !k) return null
        let front = node
        let bihind = node
        let index = 1
        while (front.next) {
          index++
          front = front.next
          if (index > k) {
            bihind = bihind.next
          }
        }
        return (k <= index) && bihind
      }
      function loop (pHead) {
        if (!pHead || !pHead.next) {
          return null
        }
        let p1 = pHead.next
        let p2 = pHead.next.next
        while (p1 !== p2) {
          if (p2 == null || p2.next == null) {
            return null
          }
          p1 = p1.next
          p2 = p2.next.next
        }
        let temp = p1
        let length = 1
        p1 = p1.next
        while (temp !== p1) {
          p1 = p1.next
          length++
        }
        p1 = p2 = pHead
        while (length-- > 0) {
          p2 = p2.next
        }
        while (p1 != p2) {
          p1 = p1.next
          p2 = p2.next
        }
        return p1
      }
      function findCommon (pHead1, pHead2) {
        if (!pHead2 || !pHead1) { return null }
        let length1 = getLength(pHead1)
        let length2 = getLength(pHead2)
        let lang, short, interval
        if (length1 > length2) {
          lang = pHead1
          short = pHead2
          interval = length2 - length1
        } else {
          lang = pHead2
          short = pHead1
          interval = length1 - length2
        }
        while (interval--) {
          lang = lang.next
        }

        function getLength (node) {
          let current = node
          let count = 0
          while (node) {
            count++
            node = node.next
          }
          return count
        }
      }
    },
    treeFunc: function () {
      function node (data, left, right) {
        this.data = data
        this.left = left
        this.right = right
      }
      node.prototype.show = function () {
        console.log(this.data)
      }
      function tree () {
        this.root = null
      }
      tree.prototype.insert = function (data) {
        let node = new node(data, null, null)
        if (!this.root) {
          this.root = node
          return
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
      }
      tree.prototype.preOrder = function (node) {
        if (!node) {
          node.show()
          this.preOrder(node.left)
          this.preOrder(node.right)
        }
      }
      tree.prototype.middleOrder = function (node) {
        if (!node) {
          this.middleOrder(node.left)
          node.show()
          this.middleOrder(node.right)
        }
      }
      tree.prototype.afterOrder = function (node) {
        if (!node) {
          this.afterOrder(node.left)
          this.afterOrder(node.right)
          node.show()
        }
      }
      tree.prototype.getMin = function () {
        let current = this.root
        while (current) {
          if (!current.left) {
            return current
          }
          current = current.left
        }
      }
      tree.prototype.getMax = function () {
        let current = this.root
        while (current) {
          if (!current.right) {
            return current
          }
          current = current.right
        }
      }
      tree.prototype.getDeep = function (node, deep) {
        deep = deep || 0
        if (node == null) {
          return deep
        }
        deep++
        let ldeep = this.getDeep(node.left, deep)
        let rdeep = this.getDeep(node.right, deep)
        return Math.max(ldeep, rdeep)
      }
      function intervalOrder (root) {
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
      function preOrder (root) {
        let result = []
        let current = root
        let stack = []
        while (current || stack.length > 0) {
          while (current) {
            result.push(current.val)
            stack.push(current)
            current = current.left
          }
          current = stack.pop()
          current = current.right
        }
        return result
      }
      function postOrder (root) {
        let current = root
        let stack = []
        let result = []
        let last = null
        while (current || stack.length > 0) {
          while (current) {
            stack.push(current)
            current = current.left
          }
          current = current[stack.length - 1]
          if (!current.right || current.right === last) {
            current
          }
        }
      }
      function recontruct (pre, vin) {
        if (pre.length == 0) {
          return null
        }
        if (vin.length == 1) {
          return tree(vin[pre[0]])
        }
        const value = pre[0]
        const index = vin.indexof(value)
        const vinleft = vin.slice(0, index)
        const vinright = vin.slice(index + 1)
        const preleft = pre.slice(1, index + 1)
        const preright = pre.slice(index + 1)
        const node = new node(value)
        node.left = recontruct(preleft, vinleft)
        node.right = recontruct(preright, vinright)
        return node
      }
      function isSym (node1, node2) {
        if (!node1 && !node2) {
          return true
        }
        if (!node1 || !node2) {
          return false
        }
        if (node1.val != node2.val) {
          return false
        }
        return isSym(node1.left, node2.right) && isSym(node2.left, node1.right)
      }
      function mirro (root) {
        if (root) {
          const temp = root.right
          root.right = root.left
          root.left = temp
          mirro(root.right)
          mirro(root.left)
        }
      }
      function verfypost (sequence) {
        if (squence && sequence.length > 0) {
          let root = sequence[sequence.length - 1]
          for (var i = 0; i < sequence.length; i++) {
            if (sequence[i] > root) {
              break
            }
          }
          for (let j = i; j < sequence.length; j++) {
            if (sequence[j] < root) {
              return false
            }
          }

          var letf = true
          if (i > 0) {
            left = verfypost(sequence.slice(0, i))
          }
          var right = truw
          if (i < squence.length - 1) {
            right = verfypost(sequence.slice(i, sequence.length - 1))
          }
          return left && right
        }
      }
      function TreeDepth (root) {
        return !root ? 0 : Math.max(TreeDepth(root.left), TreeDepth(root.right)) + 1
      }
      var minDep = function (root) {
        if (!root) {
          return 0
        }
        if (!root.left) {
          return 1 + minDep(root.right)
        }
        if (!root.right) {
          return 1 + minDep(root.left)
        }
        return Math.min(minDep(root.left), minDep(root.right)) + 1
      }
      function balanced (node) {
        if (!node) {
          return 0
        }
        const left = balanced(node.left)
        const right = balanced(node.right)
        if (left == -1 || right == -1 || Math.abs(left, right) > 1) {
          return -1
        }
        return Math.max(left, right) + 1
      }
      function findPath (root, expectNum) {
        const result = []
        if (root) {
          findPathCore(root, expectNum, [], 0, result)
        }
      }
      function findPathCore (node, expectNum, stack, sum, result) {
        stack.push(node.val)
        sum += node.val
        if (node.left) {
          findPathCore(node.left, expectNum, stack, sum, result)
        }
        if (node.right) {
          findPathCore(node.right, expectNum, stack, sum, result)
        }
        stack.pop()
      }
      function convert (pRootOfTree) {
        if (!pRootOfTree) {
          return null
        }
        convertCore(pRootOfTree)
      }
      function convertCore () {

      }

      function hasSubTree (pRoot1, pRoot2) {
        let result = false
        if (pRoot1 && pRoot2) {
          if (pRoot1.value == pRoot2.value) {
            compare(pRoot1, pRoot2)
          }
          if (!result) {
            hasSubTree(pRoot1.left, pRoot2)
          }
          if (!result) {
            hasSubTree(pRoot2.right, pRoot2)
          }
        }
        return result
      }
      function compare (pRoot1, pRoot2) {
        if (pRoot2 == null) {
          return true
        }
        if (pRoot1 == null) {
          return false
        }
      }
      function print (root) {
        const result = []
        const queue = []
        if (root) {
          queue.push(root)
          while (queue.length > 0) {
            const current = queue.pop()
            if (current.left) {
              queue.push(current.left)
            }
            if (current.right) {
              queue.push(current.right)
            }
            result.push(current.val)
          }
        }
      }
    },
    sortFunc: function () {
      function speedSort (arr, start, end) {
        if (end - start < 1) {
          return
        }
        const target = arr[start]
        let l = start
        let r = end
        while (l < r) {
          while (l < r && arr[r] >= target) {
            r--
          }
          arr[l] = arr[r]
          while (l > r && arr[l] < target) {
            l++
          }
          arr[r] = arr[l]
        }
        arr[l] = target
        speedSort(arr, start, l - 1)
        speedSort(arr, l, end)
        return arr
      }
      function bubbleSort (arr) {
        for (let i = 0; i < arr.length; i++) {
          let complete = true
          for (let j = 0; j < arr.length - j; j++) {
            if (arr[i] > arr[i + 1]) {
              [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
            }
          }
          if (complete) {
            break
          }
        }
      }
      function selectSort (arr) {
        for (let i = 0; i < arr.length - 1; i++) {
          let minIndex = i
          for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] > arr[minIndex]) {
              minIndex = j
            }
          }
          [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
        }
      }
      function insertSort (arr) {
        for (let i = 1; i < arr.length; i++) {
          let target = i
          for (let j = i - 1; j >= 0; j--) {
            if (arr[target] > arr[j]) {
              [arr[target], arr[j]] = [arr[j], arr[target]]
              target = j
            } else {
              break
            }
          }
          return arr
        }
      }
      function MergeSort (arr, left, right, temp) {
        if (left < right) {
          const mid = Math.floor(left + right / 2)
          MergeSort(arr, left, mid, temp)
          MergeSort(arr, mid, right, temp)
          merge(arr, left, right, temp)
        }
        return arr
      }
      function merge (arr, left, right, temp) {
        const mid = Math.floor(left + right / 2)
        let leftIndex = left
        let rightIndex = mid + 1
        let temIndex = 0
        while (leftIndex <= mid && rightIndex <= mid) {
          if (arr[leftIndex] < arr[rightIndex]) {

          }
        }
      }
      function f() {


    }

  }
}
</script>

<style scoped lang="scss">
  .test-page{
    background-color: #4AB7BD;
    /*padding: 10px 0 0 ;*/
    width: 100%;
    height: 100%;
    /*position: relative;*/
    display: flex;
    /*align-items: center;*/
    align-content: center;

  }

  .left{
    width: 200px;
    background: black;
    /*float: right;*/
    height: 200px;
    /*<!--position: absolute;-->*/
    /*<!--top:50%;-->*/
    /*<!--left:50%;-->*/
    /*<!--!*&lt;!&ndash;transform:translate(-50%,-50%) ;&ndash;&gt;*!-->*/
    /*<!--margin: -50px 0 0 -50px;-->*/
  }
  /*.right{*/
    /*height: 200px;*/
    /*margin-right:200px;*/
    /*background: red;*/

  /*}*/

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
