<template>
    <div class="video-view">
      <el-image :src="url"></el-image>
      <p>上传视频</p>
      <p>选择你要上传的视频</p>
      <el-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-remove="handleRemove"
        multiple
        :limit="3"
        >
        <el-button size="small" type="primary">选择视频</el-button>
        <div slot="tip" class="el-upload__tip">一次最多上传 20 个视频
          单个视频时长不超过 60 分钟、大小不超过 2 GB</div>
      </el-upload>

    </div>
</template>

<script>
export default {
  name: 'uploadVideo',
  data () {
    return {
      url: 'https://static.zhihu.com/heifetz/assets/VideoUploadHint.2f5c4eed.svg'
    }
  }
}
</script>

<style scoped>
  .video-view{
    margin: auto;
    background-color: white;
    padding: 60px;
    margin: 10px;
  }

</style>
