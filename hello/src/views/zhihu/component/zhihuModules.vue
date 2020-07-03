<template>
  <div class="zhihu-modules" >
    <el-row style="padding: 0;margin: 0" >
      <el-col :span="6" style="padding: 10px">
        <i class="el-icon-document" style="color: #20a0ff" @click="goQuestion" ></i>
        <p style="padding: 0;margin: 0" @click="goQuestion">回答问题</p>

      </el-col>
      <el-col :span="6" style="padding: 10px">
        <i class="el-icon-video-camera" style="color:orange" @click="showVideo"></i>
        <p style="padding: 0;margin: 0" @click="showVideo">发视频</p>

      </el-col>
      <el-col :span="6" style="padding: 10px">
        <i class="el-icon-edit-outline" style="color:orange"></i>
        <p style="padding: 0;margin: 0">写文章</p>

      </el-col>
      <el-col :span="6" style="padding: 10px">
        <i class="el-icon-edit-outline" style="color:blue" @click="showIdea"></i>
        <p style="padding: 0;margin: 0"  @click="showIdea">写想法</p>

      </el-col>
    </el-row>
    <el-row style="padding: 10px;border-top: 1px solid #f4f4f5" >

      <el-col :span="12" style="padding: 10px">
        <el-button style="padding: 0;margin: 0;color:#999999;font-size: 16px" type="text">稍后答</el-button>

      </el-col>
      <el-col :span="12" style="padding: 10px">

        <el-button style="padding: 0;margin: 0;color:#999999;font-size: 16px" type="text" >草稿箱</el-button>

      </el-col>
    </el-row>
    <el-dialog :visible.sync="videoVisible">
      <upload-video></upload-video>
      <el-button icon="el-icon-arrow-right" @click="goUpload" type="text">批量发布视频</el-button>
    </el-dialog>
    <el-dialog :visible.sync="ideaVisible">
      <div class="idea-view">
        <h2>写想法</h2>
        <span style="margin-bottom: 10px">康凯，分享你的想法</span>
        <el-input type="textarea" :rows="5">

        </el-input>
        <p style="text-align: left"><i class="el-icon-camera"></i>上传视频或照片</p>
        <el-button>发布视频</el-button>

      </div>
    </el-dialog>
  </div>
</template>

<script>
import UploadVideo from './creator/uploadVideo'
export default {
  name: 'zhihuModules',
  components: {UploadVideo},
  data () {
    return {
      videoVisible: false,
      ideaVisible: false
    }
  },
  methods: {
    goQuestion: function () {
      this.$router.push('/zhihu/creator/invited')
    },
    showVideo: function () {
      this.videoVisible = true
    },
    showIdea: function () {
      this.ideaVisible = true
    },
    goUpload: function () {
      this.$router.push('/zhihu/creator/video')
    }
  }
}
</script>

<style scoped lang="scss">
.zhihu-modules {
  background-color: white;
}
.subview {
}
  p{
    font-size: 13px;
  }
  i{
    margin-bottom: 10px;
    font-size: 20px;
    line-height: 30px;
  }
  P:hover{
    cursor: pointer;
  }
  i:hover{
    cursor: pointer;
  }
</style>
