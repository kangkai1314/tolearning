<template>
  <div class="test_page_view">
    <el-container>
      <el-header style="display: flex" >
        <p>this is top menu</p>
        <p>WWF 的目标是：<q>构建人与自然和谐共存的世界。</q></p>
        <p>以下内容引用自 WWF 的网站：</p>
        <blockquote cite="http://www.worldwildlife.org/who/index.html">
          五十年来，WWF 一直致力于保护自然界的未来。
          世界领先的环保组织，WWF 工作于 100 个国家，
          并得到美国一百二十万会员及全球近五百万会员的支持。
        </blockquote>
      <hr/>
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
        <el-form-item label="颜色" >
          <el-switch v-model="color" >
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
            <el-input v-model="obj.value1" readonly></el-input>
            <el-input v-model="obj.value2"></el-input>
          </el-form-item>
          <el-form-item label="合计">
            <el-input v-model="obj.values"></el-input>
          </el-form-item>
        </el-form>
        <p><abbr title="World Health Organization">WHO</abbr> 成立于 1948 年。</p>
        <p><dfn title="World Health Organization">WHO</dfn> 成立于 1948 年。</p>
        <p>To open a file, select:</p>

        <p><kbd>File | Open...</kbd></p>
        <samp>
          demo.example.com login: Apr 12 09:10:17
          Linux 2.6.10-grsec+gg3+e+fhs6b+nfs+gr0501+++p3+c4a+gr2b-reslog-v6.189
        </samp>
        <code>
          var person = { firstName:"Bill", lastName:"Gates", age:50, eyeColor:"blue" }
        </code>
        <p>Coding Example:</p>
        <el-button @click="hui">绘制图案</el-button>
        <canvas id="myCanvas" width="200" height="100"></canvas>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="190">
          <polygon points="100,10 40,180 190,60 10,60 160,180"
                   style="fill:lime;stroke:purple;stroke-width:5;fill-rule:evenodd;" />
        </svg>
        <div style="width: 50px;height: 50px;background-color: #20a0ff"
             draggable="true" @dragstart="start($event)" id="drag1"></div>
        <div class="view" @drop="drop($event)" @dragover.prevent="over($event)">

        </div>
        <div class="view" @drop="drop($event)" @dragover.prevent="over($event)">

        </div>

        <article>
          <section> this is forst section</section>
          <section>this is asda section</section>this is a long aritivlr</article>
        <nav>
          <a href="/html/">HTML</a> |
          <a href="/css/">CSS</a> |
          <a href="/js/">JavaScript</a> |
          <a href="/jquery/">jQuery</a>
        </nav>

        <code>

<pre>
var person = {
    firstName:"Bill",
    lastName:"Gates",
    age:50,
    eyeColor:"blue"
}
</pre>
        </code>
        <a href="zhihu/alo">test</a>
        <a href="index.vue" target="_blank">test3</a>
        <a href="#test"> jump</a>
        <img src="boat.gif" alt="Big Boat">
        <p>
          <img  src="boat.gif" alt="Big Boat" align="right"/>
          asdadadadasdasdhaudhaidakhdiidakhdiaudybdhiah
        </p>
        <ul>
          <li v-for="i in 100" :key="i">
            info {{i}}
          </li>
        </ul>
        <div >
          <p><a name="test">this is test</a></p>
        </div>
        <el-button @click="fun">Test</el-button>
        <div class="test_view">
          12312312
          <p>this is test info </p>
        </div>
        <p>this is para<br/>
        this is para1<br/></p>
        <pre>
&lt;html&gt;

&lt;head&gt;
  &lt;script type=&quot;text/javascript&quot; src=&quot;loadxmldoc.js&quot;&gt;
&lt;/script&gt;
&lt;/head&gt;

&lt;body&gt;

  &lt;script type=&quot;text/javascript&quot;&gt;
    xmlDoc=<a href="dom_loadxmldoc.asp">loadXMLDoc</a>(&quot;books.xml&quot;);
    document.write(&quot;xmlDoc is loaded, ready for use&quot;);
  &lt;/script&gt;

&lt;/body&gt;

&lt;/html&gt;
</pre>
        <p><pre>
&lt;html&gt;

&lt;head&gt;
  &lt;script type=&quot;text/javascript&quot; src=&quot;loadxmldoc.js&quot;&gt;
&lt;/script&gt;
&lt;/head&gt;

&lt;body&gt;

  &lt;script type=&quot;text/javascript&quot;&gt;
    xmlDoc=<a href="dom_loadxmldoc.asp">loadXMLDoc</a>(&quot;books.xml&quot;);
    document.write(&quot;xmlDoc is loaded, ready for use&quot;);
  &lt;/script&gt;

&lt;/body&gt;

&lt;/html&gt;
</pre></p>
        <p>一打有 <del>二十</del> <ins>十二</ins> 件。</p>
        <div class="hello">
          <div class="hello1">
            <p>在下面的段落中，图像会浮动到右侧，并且添加了点状的边框。我们还为图像添加了边距，这样就可以把文本推离图像：上和右外边距是 0px，下外边距是 15px，而图像左侧的外边距是 20px。</p>
             <img src="index.vue" alt="lllllalalla" style="float: right;"/>
          </div>
          <p>this is text
          asdad  sdad  asda d</p>
          <el-button type="text" class="buttonView">aaaa</el-button>
          <el-button type="text" class="buttonView">bbbbbb</el-button>
          <el-button>ccccccccc</el-button>
          <div class="hello1">
            <h1>this is title <em>hello</em> <i class="el-icon-question"><span>this is color</span></i></h1>
            <p>this is para</p>
          </div>
          <div class="hello1">
            <ul>
              <li v-for="i in 5" :key="i"><a>link</a></li>
            </ul>
          </div>
        </div>
        <div class="newspaper">
          人民网北京2月24日电 (记者 刘阳)国家发展改革委近日发出通知，决定自2月25日零时起将汽、柴油价格每吨分别提高300元和290元，折算到90号汽油和0号柴油（全国平均）每升零售价格分别提高0.22元和0.25元。

          此次国内成品油价格调整幅度，是按照现行国内成品油价格形成机制，根据国际市场油价变化情况确定的。去年11月16日国内成品油价格调整以来，受市场预期欧美经济复苏前景向好以及中东局势持续动荡等因素影响，国际市场原油价格先抑后扬，2月上旬WTI和布伦特原油期货价格再次回升至每桶95美元和115美元以上。虽然近两日价格有所回落，但国内油价挂钩的国际市场三种原油连续22个工作日移动平均价格上涨幅度已超过4%，达到国内成品油价格调整的边界条件。

          通知指出，这次成品油调价后，国家将按照已建立的补贴机制，继续对种粮农民、渔业（含远洋渔业）、林业、城市公交、农村道路客运（含岛际和农村水路客运）等给予补贴。同时，为保证市场物价基本稳定，防止连锁涨价，对与居民生活密切相关的铁路客运、城市公交、农村道路客运（含岛际和农村水路客运）价格不作调整。

          通知要求，中石油、中石化、中海油三大公司要组织好成品油生产和调运，保持合理库存，加强综合协调和应急调度，保障成品油供应。各级价格主管部门要加大市场监督检查力度，依法查处不执行国家价格政策，以及囤积居奇、造谣惑众、合谋涨价、搭车涨价等违法行为，维护正常市场秩序。
        </div>
        <div class="borderView">
          <div  class="subView" v-for="i in 5" :key="i" >
            <p style="float: left">this is pppgod</p>
            <span > hello</span>
          </div>
        </div>
        <div class="flex-view">
          <div class="view3"></div>
          <div class="view4"></div>

        </div>
        <div class="imgView">
  <p>this is test</p>
        </div>
        <div  class="card">
          <div class="item" v-for=" i in 100" :key="i"></div>
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
    hui: function () {
      // let c = document.getElementById('myCanvas')
      // let cxt = c.getContext('2d')
      // cxt.moveTo(10, 10)
      // cxt.lineTo(150, 50)
      // cxt.lineTo(10, 50)
      // cxt.stroke()
      let a = {b: 'hello', [Symbol('c')]: 'c'}
      console.log(Object.getOwnPropertyDescriptor(a, 'b'))
      for (let i in a) {
        console.log(i)
        console.log(a[i])
      }
      let h = [[1, 2, 4], [1, 2, 3], 5]
      console.log(Object.keys(a))
      console.log(Object.getOwnPropertyNames(a))
      console.log(Object.getOwnPropertySymbols(a))
      console.log(Reflect.ownKeys(a))
      console.log(Object.values(a))
      console.log(Object.entries(a))
      console.log(Object.is(Symbol('c'), Symbol('c')))
      console.log(Object.is(Symbol.for('a'), Symbol.for('a')))
      console.log(h.flat(2))
      let m = new Map()
      m.set(['123'], '123')
      console.log(m)
      let proxy = new Proxy({}, {
        get: function (target, propKey) {
          console.log(target)
          console.log(propKey)
          return 3
        }
      })
      console.log(proxy.a)
    },
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
    },
    start: function (event) {
      event.dataTransfer.setData('Text', event.target.id)
      let windowFunction = function (str) {
        let n = str.length
        let left = 0
        let right = -1
        let freqMao = {}
        let max = 0
        while (left < n) {
          let next = str[right + 1]
          if (!freqMao[next] && next !== undefined) {
            freqMao[next] = 1
            right++
          } else {
            freqMao[left] = 1
            left++
          }
          max = Math.max(max, right - left + 1)
        }
      }
    },
    drop: function (event) {
      event.preventDefault()
      let data = event.dataTransfer.getData('Text')
      event.target.appendChild(document.getElementById(data))
    },
    over: function (event) {
    },
    fun: function () {
      // function* generator () {
      //   yield 'hello'
      //   yield 'test'
      //   return 'ending'
      // }
      // let gen = generator()
      // gen.next()
      class Person {
        constructor (name, age) {
          this.name = name
          this.age = age
        }
        print () {
          console.log(this.name)
        }
      }
      class Stu extends Person {
        constructor (x, y, grade) {
          super(x, y)
          this.grade = grade
        }
      }
      let p = new Person('kangkai', 13)
      p.print()
      console.log(Person.prototype)
      console.log(p.__proto__)
      Object.getPrototypeOf(Stu) === Person
      async function f1 () {
        return new Promise((resolve => {
          console.log(resolve)
        }, reject => {
          console.log(reject)
        }
        ))
      }
      const testFunc = async function () {
        const f1 = await f1()
      }
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
  .view{
    float:left; width:198px; height:66px; margin:10px;padding:10px;border:1px solid #aaaaaa;
  }

  .hello p{
    text-align: left;
    color: #20a0ff;
  }
  .hello .hello1{
    background-color: #d0f5e0;
    z-index: 1000;
    width: 200px;
    /*float: right;*/
    /*clear: both;*/
    transition: width 2s;
    transition-timing-function: linear;
  }

  .hello{
    background-color: black;
    padding: 10px;
    margin: 10px 20px;
    border: 10px solid red;
    position: relative;
    left:20px;
    vertical-align: center;
    /*overflow: scroll;*/
    /*height: 50px;*/
    p{
      /*position: absolute;*/
      /*top:20px;*/
      /*left:40px;*/
      word-spacing: 2em;
      letter-spacing: 1em;
      /*text-transform: uppercase;*/
      text-decoration: blink;
      white-space: normal;
      font-family: "Times New Roman";
      font-style: italic;
      font-variant:small-caps;
      color: #20a0ff;
      z-index: 1000;
      width: 20px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .buttonView{
      /*position: absolute;*/
      /*bottom: 0;*/
      /*right: 10px;*/
      float: left;
    }

  }
  [type='text']{
    background-color: black;
    color: white;
  }
  /*h1 i{*/
    /*font-size: 100px;*/
  /*}*/
  h1 >i{
    font-size: 22px;
  }
  h1 +p:first-letter{
color: #b3d8ff;
  font-size: 20px}
  h1 span{
    background-color: yellow;
  }
  h1:first-child{
    border: 1px solid #f4f4f5;
  }
  ul{
list-style-type: none;
    margin: 0;
    padding: 0;
  }
  li{
    display: inline-block;
    padding: 10px;
  }
  li a{
    display: block;
    width: 60px;
  }
  @media screen {

  }

  .hello1:hover{
    width: 400px;
  }
  .newspaper
  {
    -moz-column-count:3; /* Firefox */
    -webkit-column-count:3; /* Safari and Chrome */
    column-count:3;
    column-gap:100px;
  }
  .borderView{
    display: flex;
    flex-wrap: wrap;
  }
  .subView{
    width: 200px;
    height: 100px;
    background-color: #b3d8ff;
    margin: 5px;
    border: 1px solid #20a0ff;
    box-sizing: border-box;
    padding: 10px;
    display: block;
  }

  .flex-view{
    display: flex;

  }

  .view3{
    background-color: #20a0ff;
    height: 200px;
    width: 500px;
    margin: 10px;
    flex-basis: 400px;
    order: 2;
  }

  .view4{
    background-color: black;
    width: 500px;
    height: 200px;
    align-self: center;
    flex-grow: 1;
    order:1;
  }
  .imgView {
    background: url(../../assets/agree.png) no-repeat top right;
    height: 400px;
    width: 400px;
    background-position: right 10px top 10px;
    box-shadow: 0 0 0 10px #655,
    0 0 0 15px deeppink,
    0 2px 5px 15px rgba(0, 0, 0, .6);
    padding: 10px;
  }
  .item{
    border: solid 5px #F29338;
    border-radius: 50%;
    &:nth-child(3n){
      width: 40px;
      flex-basis: 40px;
    }
  }
  .card{
    display: flex;
    flex-wrap: wrap;
    width: 400px;
    margin: 10px;
    padding: 10px;
  }

</style>
