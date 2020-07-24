<template>
    <div class="buju-page">
      <div class="head">

      </div>
      <div class="content1">
        <div class="left">

        </div>
        <div class="content">
          <div class="item" v-for="i in 100" :key="i">
            <div class="item-up"></div>
          </div>

        </div>
      </div>

    </div>
</template>

<script>
export default {
  name: 'buju',
  methods: {
    pro: function () {
      // function Stack() {
      //   let items=[]
      //   this.push=function (item) {
      //     items.push(item)
      //   }
      //   this.pop=function () {
      //     return this.items.pop()
      //   }
      //   this.isEmpty=function () {
      //     return items.length===0
      //   }
      //   this.size=function () {
      //     return items.length
      //   }
      //   this.clear=function () {
      //     this.items=[]
      //   }
      // }
      // function list() {
      //   let Node=function (element) {
      //     this.element=element
      //     this.next=null
      //   }
      //   let head=null
      //   let length=0
      //   this.getList=function () {
      //     return head
      //   }
      //   this.append=function (element) {
      //     let node=new Node(element)
      //
      //   }
      //
      // }
      let a=[]
      let proxy=new Proxy(a,{
       get:function (target,propkey,receiver) {
         console.log(propkey)
       }
      })
      function ajustHeap(arr,index,length) {
        for(let i=2*index+1;i<length;i=2*i+1){
          if(i+1<length&&arr[i+1]《arr[i]){
            i++
          }
          if(arr[index]<arr[i])
        }
      }

    }
  }
}
</script>

<style scoped lang="scss">
  .head{
    height: 56px;
    width: 100%;
    position: fixed;
    top:0;
    background-color: #1f2d3d;
    z-index: 2000;

  }
  .left{
    width: 500px;
    height: 100%;
    background-color: #3a8ee6;
    min-height: 1000px;

  }
  .content1{
    display: flex;
    position: relative;
    top:56px;
  }
  .content{
    display: flex;
    flex-wrap: wrap;
    background-image: linear-gradient(to right top,#ffcc00 50%, #eee 50%);
    &:after{
      content: '';
      position: fixed;
      top:5px;
      left:0;
      bottom: 0;
      right: 0;
      background: #fff;
      z-index: -1;
    }

  }
  .item{
    width: 200px;
    height: 100px;
    background-color: #5daf34;
    /*background-image: linear-gradient(to right top,#ffcc00 50%, #eee 50%);*/
    margin: 20px;
    box-sizing: border-box;
    padding: 10px;
    position: relative;
    &:hover{
      box-shadow: 0 15px 20px 0 hsla(203,6%,45%,.4);
      transform: translateX(10px);
    }
    &:after{
      content:'hello';
      position: fixed;
      top:5px;left:0;right: 0;bottom:0;
    }

  }
  .item-up{
    width: 40px;
    height: 100px;
    background-color: #4AB7BD;
    position: absolute;
    top:-10px;
  }

</style>
