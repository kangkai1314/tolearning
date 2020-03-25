<template>
    <div class="zhihu-item-class">
      <el-row>
        <h3 style="float: left;margin-left: 20px">你什么时候对自己的业务产生怀疑</h3>

      </el-row>
      <el-row style="margin-top: 10px">
        <el-col :span="12">      <el-image :src="url"></el-image>
        </el-col>
        <el-col :span="12">
          <p><span>this is for content</span></p>

        </el-col>
      </el-row>
      <el-row >
        <el-button ><i class="el-icon-arrow-up"></i>赞同 7788</el-button>
        <el-button icon="el-icon-arrow-down"></el-button>
        <el-link><i class="el-icon-message"></i>1999条评论</el-link>
        <el-link><i class="el-icon-share"></i>分享</el-link>
        <el-link><i class="el-icon-star-on"></i>收藏</el-link>
        <el-link><i class="el-icon-heavy-rain"></i>喜欢</el-link>
        <el-dropdown>
          <i class="el-icon-question"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>没有帮助</el-dropdown-item>
            <el-dropdown-item>举报</el-dropdown-item>
            <el-dropdown-item>不感兴趣</el-dropdown-item>
          </el-dropdown-menu>

        </el-dropdown>
      </el-row>

    </div>
</template>

<script>
export default {
  name: 'zhihuItem',
  data () {
    return {
      url: 'https://pic3.zhimg.com/50/v2-fe9264fc028f1caa63236f45f3580a80_400x224.jpg'
    }
  }
}
</script>

<style scoped>

</style>
