<template>
    <div class="find_view" style="margin: auto">
      <div class="page_view" >
        <h1 style="text-align: left;width: 100%"><i class="el-icon-document" style="width:36px;height: 36px;color: #20a0ff"></i>最新专题 </h1>
            <el-image :src="url" style="width:520px;height: 200px;margin-right: 10px"></el-image>
            <el-image :src="url1" style="width: 520px;height: 200px" ></el-image>
        <el-row :gutter="10">
          <el-col :span="12">
            <el-card>
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

                    <el-tag style="flex-shrink: 0;
    padding: 0 8px;
    height: 24px;
    line-height: 24px;
    font-size: 12px;
    color: #8590a6;
    background-color: #f6f6f6;
    border-radius: 5px;">选个学习本</el-tag>
                    <span style="font-size: 15px">海南全岛封关，执行零关税政策，按香港模式打造自由港</span>
                </el-row>

              </div>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card>
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
        <el-image :src="url3" style="width:520px;height: 200px;margin-right: 10px"></el-image>
        <el-image :src="url4" style="width: 520px;height: 200px" ></el-image>
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

                  <el-tag style="flex-shrink: 0;
    padding: 0 8px;
    height: 24px;
    line-height: 24px;
    font-size: 12px;
    color: #8590a6;
    background-color: #f6f6f6;
    border-radius: 5px;">选个学习本</el-tag>
                  <span style="font-size: 15px">海南全岛封关，执行零关税政策，按香港模式打造自由港</span>
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
      url4: 'https://pic1.zhimg.com/100/v2-3f365aae54304e2e426e8f4a822482bc_hd.png'
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

</style>
