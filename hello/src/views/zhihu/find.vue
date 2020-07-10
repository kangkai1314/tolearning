<template>
    <div class="find_view" >
      <div class="page_view" >
        <h1 style="text-align: left;width: 100%"><i class="el-icon-document" style="width:36px;height: 36px;color: #20a0ff"></i>最新专题 </h1>
        <el-row :gutter="10">
          <el-col :span="12">
            <el-image :src="url" style="height: 200px"></el-image>
          </el-col>
          <el-col :span="12">
            <el-image :src="url1" style="height: 200px" ></el-image>
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :span="12">
            <el-card style="height: 100%">
              <div slot="header" class="clearfix">
                <el-row>
                  <el-col :span="12">
                    <h2 style="text-align: left;margin-top: 5px;font-size: 20px">财经热点</h2>
                    <span style="float: left;font-size: 11px;color: #999999" >15.小时更新100,00 浏览</span>
                  </el-col>
                  <el-col :span="12">
                    <el-button style="float: right;padding: 10px;color: #0084ff;background-color: rgba(0,132,255,.08);">关注专题</el-button>
                  </el-col>
                </el-row>

              </div>
              <div  >
                <el-row v-for="i in 3" :key="i">
                  <el-col :span="6">
                    <el-tag style="flex-shrink: 0;
    padding: 0 8px;
    height: 24px;
    line-height: 24px;
    font-size: 12px;
    color: #8590a6;
    background-color: #f6f6f6;
    border-radius: 5px;">选个学习本</el-tag>

                  </el-col>
                  <el-col :span="18">
                    <div  class="view"  >海南全岛封关，执行零关税政策，按香港模式打造自由港</div>

                  </el-col>

                </el-row>

              </div>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card style="height: 100%">
              <div slot="header" class="clearfix">
                <el-row>
                  <el-col :span="16">
                    <h2 style="text-align: left;margin-top: 5px;font-size: 20px">一部短片的诞生，需要经历哪些过程？</h2>
                    <span style="float: left;font-size: 11px;color: #999999">100,00 浏览</span>
                  </el-col>
                  <el-col :span="8">
                    <el-button style="float: right;padding: 10px;color: #0084ff;background-color: rgba(0,132,255,.08);">关注专题</el-button>
                  </el-col>
                </el-row>

              </div>
              <div class="text item">
                <el-row v-for="i in 3" :key="i" style="text-align: left">
                    <el-tag style="flex-shrink: 0;
    padding: 0 8px;
    height: 24px;
    line-height: 24px;
    font-size: 12px;
    color: #8590a6;
    background-color: #f6f6f6;
    border-radius: 5px;">2020，好久不见</el-tag>
                    <span style="font-size: 15px">好久不见，电影和你。</span>
                </el-row>

              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
      <div class="view" style="margin-top: 10px">
        <div style="margin-top: 10px;display: flex">
          <el-image :src="url3" style="width:520px;height: 200px;margin-right: 10px;flex: 1"></el-image>
          <el-image :src="url4" style="width: 520px;height: 200px;flex: 1" ></el-image>
        </div>

        <el-row :gutter="10">
          <el-col :span="12">
            <el-card>
              <div slot="header" class="clearfix">
                <el-row>
                  <el-col :span="12">
                    <h2 style="text-align: left;margin-top: 5px;font-size: 20px">你领到消费券了么，怎么用最划算</h2>
                    <span style="float: left;font-size: 11px;color: #999999" >15.小时更新100,00 浏览</span>
                  </el-col>
                  <el-col :span="12">
                    <el-button style="float: right;padding: 10px;color: #0084ff;background-color: rgba(0,132,255,.08);">关注专题</el-button>
                  </el-col>
                </el-row>

              </div>
              <div  >
                <el-row v-for="i in 3" :key="i">
                  <el-col :span="6">
                    <el-tag style="flex-shrink: 0;
    padding: 0 8px;
    height: 24px;
    line-height: 24px;
    font-size: 12px;
    color: #8590a6;
    background-color: #f6f6f6;
    border-radius: 5px;">选个学习本</el-tag>

                  </el-col>
                  <el-col :span="18">
                    <div style="font-size: 15px" class="view">海南全岛封关，执行零关税政策，按香港模式打造自由港</div>

                  </el-col>

                </el-row>

              </div>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card>
              <div slot="header" class="clearfix">
                <el-row>
                  <el-col :span="16">
                    <h2 style="text-align: left;margin-top: 5px;font-size: 20px">世界人工智能大会前瞻</h2>
                    <span style="float: left;font-size: 11px;color: #999999">100,00 浏览</span>
                  </el-col>
                  <el-col :span="8">
                    <el-button style="float: right;padding: 10px;color: #0084ff;background-color: rgba(0,132,255,.08);">关注专题</el-button>
                  </el-col>
                </el-row>

              </div>
              <div class="text item">
                <el-row v-for="i in 3" :key="i" style="text-align: left">
                  <el-tag style="flex-shrink: 0;
    padding: 0 8px;
    height: 24px;
    line-height: 24px;
    font-size: 12px;
    color: #8590a6;
    background-color: #f6f6f6;
    border-radius: 5px;">2020，好久不见</el-tag>
                  <span style="font-size: 15px">好久不见，电影和你。</span>
                </el-row>

              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
      <div style="margin-top: 10px">      <el-button style="background-color: white;border-radius: 10px;font-weight: bold;color: #999999">查看更多专题<i class="el-icon-arrow-right"></i></el-button>
      </div>
      <div>
        <h2>圆周讨论</h2>
        <div style="display: flex">
          <div style="flex: 1;background-image: url('https://pic1.zhimg.com/50/v2-ae999d25df04ac81f5e39a8f7c4012e3_hd.jpg')" >

          </div>
          <div style="flex: 1">

          </div>
        </div>
      </div>

      <div class="test-view">
        <div class="ani-view">

        </div>
        <el-tabs>
          <el-tab-pane label="hello">
            <div class="cricle-view" @mouseover="show" @mouseleave="notShow">
              <span>this is hello</span>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>

    </div>
</template>

<script>
export default {
  name: 'find',
  data () {
    return {
      url: 'https://pic4.zhimg.com/100/v2-94bd85f9a3c4eea4df1f71dbd230d4f3_hd.png',
      url1: 'https://pic2.zhimg.com/100/v2-4b82362f446fa6bc7207b5cae694676d_hd.png',
      url3: 'https://pic1.zhimg.com/100/v2-fa496e12aa1f50638367ca8aa089726c_hd.png',
      url4: 'https://pic1.zhimg.com/100/v2-3f365aae54304e2e426e8f4a822482bc_hd.png',
      url5: 'https://pic1.zhimg.com/50/v2-ae999d25df04ac81f5e39a8f7c4012e3_hd.jpg'
    }
  },
  methods: {
    show: function () {
      console.log('show')
    },
    notShow: function () {
      console.log('notshow')
    }
  }
}
</script>

<style scoped lang="scss">
  h1{
    font-size: 25px;
    margin: 10px;
    text-align: center;
  }
  .el-row{
    padding: 0;
    margin: 0;
  }
  .find_view{
    padding-top: 10px;
  }
  span{

  }
  .test{
    white-space:nowrap;
    width:12em;
    overflow:hidden;
    border:1px solid #000000;
    text-overflow:ellipsis
  }
  .view{
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis

  }
  .test-view{
    width: 1000px;
    height: 500px;
    background-color: #20a0ff;
    position: relative;

  }
  .ani-view{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: black;
    animation: roll 5s linear 1 alternate  ;
    position: absolute;
    top:200px;
  }

  @keyframes roll {
    0%{
      transform: translate(0,0);
    }
    25%{
      transform: translateX(100px);
    }
    50%{
      transform: translate(100px,200px);
    }

    /*25%{*/
      /*transform: translateX(200px);*/
    /*}*/
    /*30%{*/
      /*transform: translateY(100px);*/
    /*}*/
    /*75%{*/
     /*transform: translateX(100px);*/
  /*}*/

    100%{
      transform: translate(200px,200px);
    }
  }

  @keyframes turn {
    0%{
      transform: rotate(20deg);
    }

    100%{
      transform: rotate(80deg);
    }
  }

  .cricle-view{
    width: 0;
    height: 0;
    border: solid 100px red;
    border-color: red transparent transparent transparent;
    border-radius: 100px;
  }
  /deep/
  .el-card__header{
    min-height: 110px;
  }

</style>
