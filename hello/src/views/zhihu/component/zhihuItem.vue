<template>
    <div class="zhihu-item-class">
      <el-row>
        <h3 style="float: left;margin-left: 10px">你什么时候对自己的业务产生怀疑</h3>
      </el-row>
      <el-row style="margin-top: 10px;padding: 10px">
        <el-col :span="6">      <el-image :src="url"></el-image>
        </el-col>
        <el-col :span="18">
        <folder ></folder>

        </el-col>
      </el-row>
      <el-row style="padding: 0;margin: 0">
        <el-col :span="6">
          <el-button style="color: #0084ff;background-color: rgba(0,132,255,.1);"><i class="el-icon-caret-top"></i>赞同 7788</el-button>
          <el-button icon="el-icon-caret-bottom" style="color: #0084ff;background-color: rgba(0,132,255,.1);"></el-button>
        </el-col>
        <el-row>
          <el-col :span="3" style="">

            <el-button type="text" style="color: #999999;"><i class="el-icon-message"></i>1999条评论</el-button>
          </el-col>
          <el-col :span="2" style="">          <el-button type="text" style="color: #999999;"><i class="el-icon-share"></i>分享</el-button>
          </el-col>
          <el-col :span="2" style="">
            <el-button type="text" style="color: #999999;"><i class="el-icon-star-on"></i>收藏</el-button>
          </el-col>
          <el-col :span="2" style="">
            <el-button type="text" style="color: #999999;"><i class="el-icon-heavy-rain"></i>喜欢</el-button>
          </el-col>
          <el-col :span="2">
            <el-dropdown  style="padding: 10px">
              <i class="el-icon-more"></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>没有帮助</el-dropdown-item>
                <el-dropdown-item>举报</el-dropdown-item>
                <el-dropdown-item>不感兴趣</el-dropdown-item>
              </el-dropdown-menu>

            </el-dropdown>

          </el-col>
          <el-col :span="3" style="">
            <el-button type="text"> <i class="el-icon-arrow-up"></i>收起</el-button>
          </el-col>
        </el-row>

      </el-row>

    </div>
</template>

<script>
import Folder from '../../../components/folder'
export default {
  name: 'zhihuItem',
  components: {Folder},
  data () {
    return {
      url: 'https://pic1.zhimg.com/50/v2-fda58ce57149d037f67baffa97f37075_400x224.jpg',
      text: '1213131313132323'

    }
  }
}
</script>

<style scoped>

</style>
