<template>
    <div class="css-page">
      <div class="card">
        <div class="item" v-for="i in 100">

        </div>
      </div>
      <div class="card">
        <div class="node" v-for="item in 100"></div>
      </div>
      <div class="card">
        <div class="node2" v-for="item in 100"></div>
      </div>
      <div class="card">
        <div class="node3" v-for="item in 100"></div>
      </div>
      <div class="view">
        <el-button @click="test">测试</el-button>

      </div>
      <video id="mse" autoplay=true playsinline controls="controls">
        <source src="https://h5player.bytedance.com/video/mp4/xgplayer-demo-720p.mp4" type="video/mp4">
        你的浏览器不支持Video标签
      </video>

    </div>
</template>

<script>
export default {
  name: 'css',
  data () {
    return {

    }
  },
  methods: {
    test: function () {
      // let [arr1, arr2] = [[1, 2, 3, 4], [4, 5, 6, 8]]
      // let b = arr1.filter(val => arr2.indexOf(val) > -1)
      // console.log(b)
      // let c = arr1.concat(arr2.filter(v => !arr1.includes(v)))
      // console.log(c)
      const arr1 = [1, 2, 3, 4, 5, 8, 9]
      const arr2 = [5, 6, 7, 8, 9]
      const result = arr1.concat(arr2.filter(v => !arr1.includes(v)))
      console.log(result) // [1, 2, 3, 4,5, 8, 9]
      let obj = {

      }
      if (typeof Object.assign2 !== 'function') {
        Object.defineProperty(Object, 'assign2', {
          value: function (target) {
            if (target === null) {
              throw new TypeError('connot connvert undefinede or null object')
            }
            let to = Object(target)
            for (let index = 1; index < arguments.length; index++) {
              let nextsource = arguments[index]
              if (nextsource !== null) {
                for (let nextkey in nextsource) {
                  if (Object.prototype.hasOwnProperty.call(nextsource, nextkey)) {
                    to[nextkey] = nextsource[nextkey]
                  }
                }
              }
            }
            return to
          },
          writable: true,
          configurable: true

        }
        )
      }
      let deepColne = function (obj) {
        let target = {}
        for (let i in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, i)) {
            if (typeof i === 'object') {
              target[i] = deepColne(obj[i])
            } else {
              target[i] = onj[i]
            }
          }
        }
      }
      function create () {
        let obj = new Object()
        Con = [].shift.call(arguments)
        obj.__proto__ = Con.prototype
        Con.apply(obj, arguments)
        return obj
      }
      Function.prototype.call2 = function (context) {
        context.fn = this
        context.fn()
        delete context.fn
      }
      Function.prototype.bind2 = function (context) {
        let self = this
        let args = Array.prototype.slice.call(arguments, 1)
        return function () {
          let bindArgs = Array.prototype.slice.call(arguments)
          self.apply(context, args.concat(bindArgs))
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .css-page{
    width: 100%;
    height: 100%;
    background-color: black;
    display: flex;
    flex-wrap: wrap;
  }
  .card{
    width: 200px;
    height: 200px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: white;
    padding: 10px;
    margin: 10px;
    .item{
      border-radius: 50%;
      border: 5px solid #20a0ff;

      &:nth-child(3n){
        width: 40px;
        flex-basis: 40px;
        background: black;
        animation: change 2s ease alternate infinite;
      }
    }
    .node{
      border: solid 5px #F29338;
      border-radius: 50%;

      &:nth-child(3n) {
        width: 40px;
        flex-basis: 40px;
        background: #F8C798;
        animation: change-circle-width 2s ease alternate infinite;
      }
    }
    &:hover {
      .node2 {
        &:nth-child(2n)::after {
          visibility: unset;
        }
      }
    }

    .node2{
      background: #71A2DB;
      outline: solid 1px white;
      width: 20px;
      height: 20px;
      &:nth-child(3n-1),&:nth-child(3n+1){
        background: #C2D7F0;
      }
      &:nth-child(10n)::after,&:nth-child(-n+10)::after{
       display: none;
      }
      &::after {
        left: 75%;
        top: 75%;
        width: 50%;
        height: 50%;
        border-radius: 50%;
        background: white;
        animation: card-4-circle-move 1s linear alternate infinite;
      }
      &:nth-child(2n)::after {
        animation: card-4-circle-move-delay 1s linear alternate infinite;
        animation-delay: .3s;
        visibility: hidden;
      }
    }

    .node3 {
      background: #A45963;
      border-radius: 90%;
      animation: card-1 .4s ease alternate infinite;
      height: 20px;
      width:10px;

      // 格子动画延迟处理
      &:nth-child(2n) {
        animation-delay: .2s;
      }
      &:nth-child(3n) {
        animation-delay: .3s;
      }
      &:nth-child(4n) {
        animation-delay: .3s;
      }

      // 山的颜色处理
      &:nth-child(2n)::before {
        border-bottom-color: #F5CB6C;
      }
      &:nth-child(3n)::before {
        border-bottom-color: #F5856C;
      }
      &:nth-child(4n)::before,
      &:nth-child(5n)::before,
      &:nth-child(6n)::before,
      &:nth-child(7n)::before,
      &:nth-child(8n)::before,
      &:nth-child(9n)::before,
      &:nth-child(10n)::before {
        border-bottom-color: #D2F3BF;
      }

      // 山的构成
      &::before {
        left: 0;
        top: -5px;
        border: solid 10px transparent;
        border-bottom-color: #D2F3BF;
        z-index: 2;
      }

      // 白色遮罩
      &::after {
        left: 1px;
        top: 1px;
        width: 19px;
        height: 18px;
        background: white;
      }

      // 这是一个特殊处理，为了让白色遮罩长度减少1像素以显示每行格子的背景颜色的最后一列像素
      &:nth-child(10n)::after {
        width: 18px;
      }
    }
  }
  .view{
    width: 100px;
    height: 100px;
    background-color: #3a8ee6;
    border-radius: 100%;
    padding: 10px;
    margin: 10px;

  }
  @keyframes change {
    from{
      width: 40px;
      flex-basis: 40px;
    }
    60%{
      width: 20px;
      flex-basis: 20px;
      background: transparent;

    }
    to{
      flex-basis: 20px;
      width: 20px;
      background: transparent;
    }

  }
  @keyframes change-circle-width {
    from {
      width: 40px;
      flex-basis: 40px;
      background: #F8C798;
    }
    60% {
      width: 20px;
      flex-basis: 20px;
      background: transparent;
    }
    // 动画 60% - 100% 这段时间，属性没有变动，所以图案看起来像是静止的。
    to {
      width: 20px;
      flex-basis: 20px;
      background: transparent;
    }
  }
  @keyframes card-4-circle-move {
    from {
      left: 45%;
      top: 45%;
      opacity: 1;
      background: white;
    }
    to {
      left: 130%;
      top: 130%;
      opacity: 0;
      background: #F2C07D;
    }
  }
  @keyframes card-4-circle-move-delay {
    from {
      left: 45%;
      top: 45%;
      opacity: 1;
      background: #F2C07D;
      z-index: 2;
    }
    to {
      left: 130%;
      top: 130%;
      opacity: 0;
      background: white;
    }
  }
  @keyframes card-1 {
    from {
      height: 19px;
    }
    to {
      height: 8px;
    }
  }

</style>
