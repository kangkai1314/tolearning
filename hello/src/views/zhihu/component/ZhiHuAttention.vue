<template>
    <div class="zhihu-attention-content">
      <el-row style="margin-left: 10px;font-size: medium;font-weight: bold">
        <p style="float: left;color: #20a0ff;">xx同学回答了问题。18天前</p>
      </el-row>
      <zhihu-item></zhihu-item>
    </div>
</template>

<script>
import ZhihuItem from './zhihuItem'
export default {
  name: 'ZhiHuAttention',
  components: {ZhihuItem}
}
</script>

<style scoped>

</style>
