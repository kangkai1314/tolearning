<template>
  <div class="alo-page" >
    <h2 >算法知识页面</h2>
    <div class="string_view" style="margin: 10px;display: flex">
      <el-card style="width: 700px">
        <div slot="header">
          <span>String</span>
          <el-button style="float: right " @click="showStr">查看</el-button>
        </div>
        <div class="card-content">
          <p>基础知识</p>
          <el-form :inline="true">
            <el-form-item>
              <el-input placeholder="请输入你的字符串" v-model="str"></el-input>
            </el-form-item>
          </el-form>
          <ol><li>字符串长度:str.length <span>{{obj.length}}</span></li>
            <li>字符出现的第一次的位置：str.indexof <span>{{obj.index1}}</span></li>
            <li>字符出现的最后一次的位置：str.lastindexof <span>{{obj.index2}}</span></li>
            <li>字符串分割数组：str.split('') <span>{{obj.array}}</span></li>
          <li> 字符串去除两边的空白：str.trim <span>{{obj.trim}}</span></li>
          <li>字符串的大小写:str.upperCase ,str.lowerCase() <span>{{obj.upper}} {{obj.lower}}</span></li>
          <li>取子字符串:substring 取索引的字符串<span> {{obj.substring}}</span>  substr从0开始到索引位置取若干个<span> {{obj.substr}}</span></li>
          提取字符串片段slice<span> {{obj.slice}}</span>
            <li>fromCharCode数字转字符<span>{{obj.charCode}}</span></li>
            <li>CharCodeat 字符转数字<span>{{obj.charCode1}}</span></li>

          </ol>
          <h3>知识考点</h3>
          <ol>
            <li>字符出现的次数</li>
            <li>反转字符串</li>
            <li>字符串分割</li>
            <li>删除字符串中最小的次数</li>
            <li>字符串排序</li>
            <li>字符串正则匹配(加解密)</li>
          </ol>
        </div>
      </el-card>
      <el-card style="width: 700px">
        <div slot="header">
          <span>数组</span>
          <el-button style="float: right " @click="showArr">查看</el-button>
        </div>
        <div class="card-content">
          <p>基础知识</p>
          <el-form :inline="true">
            <el-form-item> <el-input v-model="array" placeholder="请输入你的数组"></el-input></el-form-item>
          </el-form>
          <ol><li>数组长度:arr.length <span>{{arr.len}}</span></li>
            <li>下标访问：arr[index] <span>{{arr.index}}</span></li>
            <li>查找元素：arr.indexof   arr.lastindexof <span>{{arr.indexof}} {{arr.lastindexof}}</span></li>
            <li>数组联合：arr.contact [1,2,3] <span>{{arr.contact}}</span> </li>
            <li>删除第一个元素并返回：arr.shift <span>{{arr.shift}}</span></li>
            <li>删除最后一个元素并返回:arr.pop <span>{{arr.pop}}</span></li>
            <li>末尾增加元素：arr.push <span>{{arr.push}}</span></li>
            <li>向开头添加若干元素：arr.unshift <span>{{arr.unshift}}</span></li>
            <li>splice 增加或者删除若干元素  参数:index :开始删除或者插入的位置 howmany：个数 item1,item2,添加的元素</li>
            <li>数组反转：reverse <span>{{arr.reverse}}</span></li>
            <li>数组组成字符串：join <span>{{arr.join}}</span></li>
          </ol>
        </div>
      </el-card>
    </div>
    <div class="s-view" style="margin: 10px;display: flex">
      <el-card style="width: 700px">
        <div slot="header">
          <span>正则表达式</span>
          <el-button @click="showRe">查看</el-button>
        </div>
        <div class="view">
          <el-form :inline="true">
            <el-form-item label="正则字符串"> <el-input placeholder="请输入字符串" v-model="restr"></el-input></el-form-item>
            <el-form-item label="正则表达式"> <el-input placeholder="请输入表达式" v-model="relambar"></el-input></el-form-item>
          </el-form>
          <h3>基础知识</h3>
          <ol>
            <li>正则表达式 /表达式/修饰符 <span>i不区分大小写</span>
            <span>g全局匹配</span>  <span>m多行匹配</span></li>
            <li>[abc] [0-9] \d \s</li>
            <li><span>{{result}}</span></li>
            <li>字符串方法</li>
            <li>test方法：是否匹配某个模式 返回ture或者false  re.test()</li>
            <li>
              /*是否带有小数*/
              function    isDecimal(strValue )  {
              var  objRegExp= /^\d+\.\d+$/;
              return  objRegExp.test(strValue);
              }</li>
            <li>

              /*校验是否中文名称组成 */
              function ischina(str) {
              var reg=/^[\u4E00-\u9FA5]{2,4}$/;   /*定义验证表达式*/
              return reg.test(str);     /*进行验证*/
              }
            </li>
<li>
              /*校验是否全由8位数字组成 */
              function isStudentNo(str) {
              var reg=/^[0-9]{8}$/;   /*定义验证表达式*/
              return reg.test(str);     /*进行验证*/
              }
</li>
            <li>
              /*校验电话码格式 */
              function isTelCode(str) {
              var reg= /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/;
              return reg.test(str);
              }
            </li>
            <li>

              /*校验邮件地址是否合法 */
              function IsEmail(str) {
              var reg=/^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/;
              return reg.test(str);
              }
            </li>
          </ol>
        </div>
      </el-card>
      <el-card style="width: 700px">
        <div slot="header">
          <span>对象</span>
          <el-button @click="showObj">查看</el-button>
        </div>
        <div class="card-content">
          <el-form :inline="true"><el-form-item label="对象">
            <el-input placeholder="请输入你的对象" v-model="obj1" ></el-input>
          </el-form-item></el-form>
          <ol><li>对象长度 obj.length  <span>{{obj1.length}}</span></li>
          <li>对象</li></ol>
        </div>

      </el-card>
    </div>
    <el-card style="width: 700px">
      <div slot="header">
        <span>队列</span>
        <el-button @click="showQueue">查看</el-button>
      </div>
      <div class="card-content">
        <el-form :inline="true"><el-form-item label="对象">
          <el-input placeholder="请输入你的对象" v-model="obj1" ></el-input>
        </el-form-item></el-form>
        <ol><li>对象长度 obj.length  <span>{{obj1.length}}</span></li>
          <li>对象</li></ol>
      </div>

    </el-card>
    <el-card style="width: 700px">
      <div slot="header">
        <span>栈</span>
        <el-button @click="showStack">查看</el-button>
      </div>
      <div class="card-content">
        <el-form :inline="true"><el-form-item label="对象">
          <el-input placeholder="请输入你的对象" v-model="obj1" ></el-input>
        </el-form-item></el-form>
        <ol><li>对象长度 obj.length  <span>{{obj1.length}}</span></li>
          <li>对象</li></ol>
      </div>

    </el-card>
    <el-card style="width: 700px">
      <div slot="header">
        <span>栈</span>
        <el-button @click="showTree">查看</el-button>
      </div>
      <div class="card-content">
        <el-form :inline="true"><el-form-item label="对象">
          <el-input placeholder="请输入你的对象" v-model="obj1" ></el-input>
        </el-form-item></el-form>
        <ol><li>对象长度 obj.length  <span>{{obj1.length}}</span></li>
          <li>对象</li></ol>
      </div>

    </el-card>

  </div>
</template>

<script>
export default {
  name: 'alo',
  data () {
    return {
      str: '',
      obj: {
        length: 0,
        index1: -1,
        index2: -1,
        array: [],
        trim: '',
        upper: '',
        lower: '',
        substr: '',
        substring: '',
        slice: '',
        charCode: '',
        charCode1: ''
      },
      arr: {
        len: 0,
        index: 0,
        contact: [],
        shift: '',
        unshift: '',
        reverse: '',
        indexof: '',
        lastindexof: '',
        pop: '',
        join: '',
        push: ''
      },
      array: '',
      restr: '',
      relambar: '',
      result: '',
      obj1: {
      }
    }
  },
  methods: {
    showStr: function () {
      this.obj.length = this.str.length
      this.obj.index1 = this.str.indexOf('A')
      this.obj.index2 = this.str.lastIndexOf('A')
      this.obj.array = this.str.split(' ')
      this.obj.trim = this.str.trim()
      this.obj.upper = this.str.toUpperCase()
      this.obj.lower = this.str.toLowerCase()
      this.obj.substr = this.str.substr(2, 3)
      this.obj.substring = this.str.substring(2, 3)
      this.obj.slice = this.str.slice(0, 1)
      this.obj.charCode1 = this.str.charAt(0)
      this.obj.charCode = String.fromCharCode(this.obj.charCode1)
    },
    showArr: function () {
      console.log(typeof this.array)
      let a = this.array.split(',')
      this.arr.len = a.length
      this.arr.index = a[-1]
      this.arr.indexof = a.indexOf('1')
      this.arr.lastindexof = a.lastIndexOf('1')
      let b = [1, 2, 3]
      this.arr.contact = b.concat(a)
      this.arr.shift = a.shift()
      this.arr.unshift = a.unshift(...b)
      console.log(a)
      let c = a.splice(0, 1)
      console.log(c)
      console.log(a)
      a.splice(1, 2, 'hello', 'nihao')
      console.log(a)
      this.arr.reverse = a.reverse()
      this.arr.pop = a.pop()
      this.arr.join = a.join('')
      this.arr.push = a.push([...b])
      console.log(a)
    },
    showRe: function () {
      this.result = this.restr.search(/i/i)
    },
    showObj: function () {

    },
    showQueue: function () {
      function Queue () {
        let items = []
        this.enqueue = function (item) {
          items.push(item)
        }
        this.dequeue = function () {
          items.shift()
        }
        this.size = function () {
          return items.length
        }
        this.clear = function () {
          items = []
        }
        this.front = function () {
          return items[0]
        }
      }
      let q = new Queue()
      q.enqueue(1)
      console.log(q.size())
      q.dequeue()
      console.log(q.size())
      for (let i = 0; i < 10; i++) {
        q.enqueue(i)
      }
      console.log(q.size())
      q.clear()
      console.log(q.size())
    },
    showStack: function () {
      function Stack () {
        let items = []
        this.push = function (item) {
          items.push(item)
        }
        this.pop = function () {
          items.pop()
        }
        this.isEmpty = function () {
          return items.length === 0
        }
        this.size = function () {
          return items.length
        }
        this.clear = function () {
          items = []
        }
      }
      let s = new Stack()
      s.push(1)
      let b = [1, 2, 3, 4, 56, 7]
      for (let i of b) {
        s.push(i)
      }
      console.log(s.size())
    },
    showTree: function () {
      function Node (data, left, right) {
        this.data = data
        this.left = left
        this.right = right
        this.show = function () {
          return this.data
        }
      }
      function insert (data) {
        let n = new Node(data, null, null)
        if (!this.root) {
          this.root=n
        }else{
          let current=this.root,parent
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
