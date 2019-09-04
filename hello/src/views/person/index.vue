<template>
    <div class="person-view">
      <div class="person-header">
        <el-image></el-image>
      </div>
      <div class="person-content">
        <el-tabs tab-position="left">
          <el-tab-pane v-for="pane in panes" :key="pane.id" :label="pane.label">

          </el-tab-pane>
        </el-tabs>

      </div>
    </div>
</template>

<script>
import ElImageViewer from 'element-ui/packages/image/src/image-viewer'
export default {
  name: 'index',
  components: {ElImageViewer},
  data () {
    return {
      panes: [{id: 1, label: '个人信息'}, {id: 2, label: '邮箱'}, {id: 3, label: '手机'}, {id: 4, label: '重置密码'}]
    }
  }
}
</script>

<style scoped>

</style>
