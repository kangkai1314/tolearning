<template>
    <div class="zhihu-item-class" @click="pathQuestion(item.id)" >
      <el-row>
        <h3 style="float: left;margin-left: 10px">{{item.title}}</h3>
      </el-row>
      <el-row style="margin-top: 10px;padding: 10px">
        <el-col :span="6">
          <el-image :src="item.url"></el-image>
        </el-col>
        <el-col :span="18">
        <folder ></folder>

        </el-col>
      </el-row>
      <el-row style="padding: 0;margin: 0">
        <el-col :span="8">
          <el-button style="color: #0084ff;background-color: rgba(0,132,255,.1);"><i class="el-icon-caret-top"></i>赞同 {{item.approve}}</el-button>
          <el-button icon="el-icon-caret-bottom" style="color: #0084ff;background-color: rgba(0,132,255,.1);" size="small"></el-button>
        </el-col>
        <el-row>
          <el-col :span="3" style="">

            <el-button type="text" style="color: #999999;"><i class="el-icon-message"></i>{{item.comment}}条评论</el-button>
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
      text: '1213131313132323'

    }
  },
  props: {
    item: {
      type: Object
    }
  },
  methods: {
    pathQuestion: function (id) {
      this.$router.push('/zhihu/question/' + id.toString())
    }
  }
}
</script>

<style scoped>
  .zhihu-item-class{
    cursor: pointer;
  }

</style>
