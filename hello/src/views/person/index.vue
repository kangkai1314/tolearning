<template>
    <div class="person-view">
      <el-page-header>这个是测试页面的页头</el-page-header>
      <el-image src="https://i0.hdslb.com/bfs/archive/1be2fd76cc98cdc6a595c05c3134fbf937a1c126.png" fit="fill"></el-image>
      <el-divider></el-divider>
      <el-calendar></el-calendar>
      <el-divider></el-divider>

      <div class="header">
        <el-button @click="drawer=true">open</el-button>
        <el-drawer :visible.sync="drawer" direction="rtl">
          <el-card>
            <div slot="header">项目配置</div>
            <div >
              <ul>
                <li v-for="i in 10" :key="i">{{i}}</li>
              </ul>
            </div>
            <div class="footer" style="float: right">
              <el-button>确认</el-button>
              <el-button>取消</el-button>
            </div>
          </el-card>
        </el-drawer>
      </div>


      <div class="person-header">

        <el-image></el-image>
      </div>
      <div class="person-content">
        <el-tabs tab-position="left">
          <el-tab-pane v-for="pane in panes" :key="pane.id" :label="pane.label">
            <el-row  >
              <el-col :span="6"  v-for="i in 4" :key="i" >
                <div style="background-color: #7ef9ff;height: 36px">col1 info</div>
              </el-col>
            </el-row>
            <el-row :gutter="20" style="margin-top: 20px" >
              <el-col :span="6"  v-for="i in 4" :key="i" >
                <div style="background-color: #7ef9ff;min-height: 36px">col1 info</div>
              </el-col>
            </el-row>
            <el-row  style="margin-top: 20px" >
              <el-col :span="6"  v-for="i in 4" :key="i"  :offset="1">
                <div style="background-color: #7ef9ff;min-height: 36px">col1 info</div>
              </el-col>
            </el-row>

          </el-tab-pane>
        </el-tabs>

      </div>
      <div class="person-form" >
        <el-form :model="form" label-width="100" class="form-class">
          <span>{{name}}</span>
          <el-form-item label="姓名">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="性别">
            <el-switch active-text="男" inactive-text="女" v-model="form.sex"></el-switch>
          </el-form-item>
          <el-form-item label="label3">
            <el-radio v-model="form.label3"  label="2"></el-radio>
            <el-radio v-model="form.label4"  label="1"></el-radio>
            <el-radio-group v-model="form.label3">
              <el-radio label="1"></el-radio>
              <el-radio label="2"></el-radio>
              <el-radio label="3"></el-radio>
            </el-radio-group>

          </el-form-item>
          <el-form-item>

          </el-form-item>

        </el-form>
      </div>
      <div class="study-area">
        <p>symbol study</p>
        <el-button @click="studySymbol">symbol</el-button>
        <el-button @click="studySet">set</el-button>
        <el-button @click="studyWeakset">weakSet</el-button>
      </div>
      <div class="css-area">
        <div class="loading">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>

        </div>
        <div class="test-edit">
          <p class="text" @click="show">I LOVE YOU</p>
        </div>

      </div>
      <div class="snow-area">
        <div class="snow" v-for="i in 2000" :key="i"></div>

        <p style="color: white">this is my world <strong>kangkai</strong></p>
        <p style="color:white"> please into my old school</p>
        <p style="font-size: 240px;color: white">I LOVE YOU</p>
      </div>
      <div class="areas">
        <bake-menu :menus="menus"></bake-menu>
        <p>this is test area</p>
      </div>
    </div>
</template>

<script>
import ElImageViewer from 'element-ui/packages/image/src/image-viewer'
import {FormName} from "../../utils/common";
import BakeMenu from "../../components/bake/menu";

export default {
  name: 'index',
  components: {BakeMenu, ElImageViewer},
  data () {
    return {
      name:FormName,
      panes: [{id: 1, label: '个人信息'}, {id: 2, label: '邮箱'}, {id: 3, label: '手机'}, {id: 4, label: '重置密码'}],
      form:{
        name:'',
        sex:true,
        label3:false

      },
      drawer:false,
      menus:[{id:1,name:'测试'},{id:2,name:'测试2'},{id:3,name:'测试3'}]
    }
  },
  methods:{
    studySymbol:function () {
     let a=Symbol('a')
      let b=Symbol('a')
      console.log(a)
      console.log(b)
      console.log(a===b)
    },
    studySet:function () {
    let a=new Set(['a','b','c'])
      a.add('b')
      console.log(a)
      a.delete('a')
      console.log(a)
      console.log(a.has('a'))
      a.clear()
      console.log(a)
      let b=['1','2','3']
     let c= b.map(value=>a.add(value))
      console.log(b)
      console.log(c)
      let d =Array.from(a)
      console.log(d)
    },
    studyWeakset:function () {
    let a =new WeakSet()
      let b=new Set()
      a.add(b)
      console.log(a)
    },
    show:function (x='a') {
      console.log(x)
      console.log('show a  a ')
      let  landInTexts = document.querySelectorAll(".text");
      console.log(landInTexts)
      landInTexts.forEach(landInText => {
        let letters = landInText.textContent.split("");
        landInText.textContent = "";
        letters.forEach((letter, i) => {
          let span = document.createElement("span");
          span.textContent = letter;
          span.style.animationDelay = `${i * 0.05}s`;
          landInText.append(span);
        });
      });


    }
  },
  watch:{
    '$route'(to,from){
      console.log(to)
      console.log(from)
    }
  }
}
</script>

<style scoped lang="scss">
  @media screen {

  }
  .person-form{
    display: flex;
    justify-content: center;
    padding: 10px;
    margin: 10px;
  }
  .form-class{
    border: 1px solid #1f2d3d;
    border-radius: 2px;
    padding: 2em;
    &::before{
      content: 'person info';
      background: #7ef9ff;
      margin-bottom: 2em;
    }
    &::after{
      content:'form end'

    }
    :focus{
      background: #4AB7BD;
    }

  }
  .test-edit{
    margin: 0.9em;
    font-size: 2em;
    font-weight: 600;
    .text{
      display: flex;
      flex-wrap: wrap;
      line-height: 1.8;
      color: white;
      font-family: Lora, serif;
      white-space: pre;
      span {
        animation: text 0.8s ease-out both;
      }
    }

  }
  @keyframes text {
    from {
      opacity: 0;
      transform:translateY(-20%);
    }
    to{
      opacity: 1;
      transform: translateY(0);
    }

  }


  .css-area{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #222222;
    .loading {
      $colors: #7ef9ff, #89cff0, #4682b4, #0f52ba, #000080;
      display: flex;
      animation-delay: 1s;

      .dot {
        position: relative;
        width: 2em;
        height: 2em;
        margin: 0.9em;
        border-radius: 50%;

        &::before {
          position: absolute;
          content: "love";
          width: 100%;
          height: 100%;
          background: inherit;
          border-radius: inherit;
          animation: wave 2s ease-out infinite;
        }

        @for $i from 1 through 5 {
          &:nth-child(#{$i}) {
            background: nth($colors, $i);

            &::before {
              animation-delay: $i * 0.2s;
            }
          }
        }
        @keyframes wave {
          50%,
          75% {
            transform: scale(1.5);
          }

          80%,
          100% {
            opacity: 0;
          }
        }
      }
    }
  }

  @function random_range($min, $max) {
    $rand: random();
    $random_range: $min + floor($rand * (($max - $min) + 1));
    @return $random_range;
  }

  .snow-area{
    height: 100vh;
    background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
    overflow: hidden;
    filter: drop-shadow(0 0 10px white);

    .snow{
      $total:200;
      position: absolute;
      width: 10px;
      height: 10px;
      background: white;
      border-radius: 50%;
      @for $i from 1 through $total {
        $random-x: random(1000000) * 0.0001vw;
        $random-offset: random_range(-100000, 100000) * 0.0001vw;
        $random-x-end: $random-x + $random-offset;
        $random-x-end-yoyo: $random-x + ($random-offset / 2);
        $random-yoyo-time: random_range(30000, 80000) / 100000;
        $random-yoyo-y: $random-yoyo-time * 100vh;
        $random-scale: random(10000) * 0.0001;
        $fall-duration: random_range(10, 30) * 1s;
        $fall-delay: random(30) * -1s;

        &:nth-child(#{$i}) {
          opacity: random(10000) * 0.0001;
          transform: translate($random-x, -10px) scale($random-scale);
          animation: fall-#{$i} $fall-duration $fall-delay linear infinite;
        }

        @keyframes fall-#{$i} {
          #{percentage($random-yoyo-time)} {
            transform: translate($random-x-end, $random-yoyo-y) scale($random-scale);
          }

          to {
            transform: translate($random-x-end-yoyo, 100vh) scale($random-scale);
          }
        }
      }
    }
  }


</style>
