<template>
    <div class="find_view" style="margin: auto">
      <div class="page_view" v-for="i in 4" :key="i">
        <h1 style="float: left;width: 100%"><i class="el-icon-document" style="width:36px;height: 36px"></i>最新专题 </h1>
        <el-row >
          <el-col :span="12" >
            <el-image :src="url" style="width: 490px;height: 200px"></el-image>
          </el-col>
          <el-col :span="11" >
            <el-image :src="url1"  style="width: 490px;height: 200px"></el-image>

          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-card>
              <div slot="header" class="clearfix">
                <h2>选个新电脑助攻云学习</h2>
                <span>100,00 浏览</span>
                <el-button style="float: right;padding: 10px 0">关注专题</el-button>
              </div>
              <div class="text item">
                <el-row v-for="i in 3" :key="i">
                  <el-col :span="12">
                    <el-tag>选个学习本</el-tag>
                  </el-col>
                  <el-col :span="12">
                    <span>2020学生学习电脑</span>
                  </el-col>
                </el-row>

              </div>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card>
              <div slot="header" class="clearfix">
                <h2>选个新电脑助攻云学习</h2>
                <span>100,00 浏览</span>
                <el-button style="float: right;padding: 10px 0">关注专题</el-button>
              </div>
              <div class="text item">
                <el-row v-for="i in 3" :key="i">
                  <el-col :span="12">
                    <el-tag>选个学习本</el-tag>
                  </el-col>
                  <el-col :span="12">
                    <span>2020学生学习电脑</span>
                  </el-col>
                </el-row>

              </div>
            </el-card>        </el-col>
        </el-row>
      </div>


    </div>
</template>

<script>
export default {
  name: 'find',
  data () {
    return {
      url: 'https://pic2.zhimg.com/100/v2-9d2e47fb42725f69e11093b92beeea7d_hd.png',
      url1: 'https://pic4.zhimg.com/100/v2-0c40996ceafa04e9f4576f3e8ad4ac8b_hd.png'
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

</style>
