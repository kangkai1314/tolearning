<template>
    <el-breadcrumb class="breadcrumb-appwrapper" separator="/">
      <transition-group name="breadcrumb">
        <el-breadcrumb-item v-for="(item,index) in levelList " :key="item.path" v-if="item.meta.title">
          <span v-if="item.redirect==='noredirect' ||index==levelList.length-1" class="no-redirect">
            {{item.meta.title}}
          </span>
          <a v-else @click.prevent="handleLink(item)">{{item.meta.title}}</a>
        </el-breadcrumb-item>
      </transition-group>
    </el-breadcrumb>
</template>

<script>
export default {
  name: 'breadcrumb',
  data () {
    return {
      levelList: null
    }
  },
  created () {
    this.getBreadcrumb()
  },
  methods: {
    getBreadcrumb: function () {
      this.levelList = this.$route.matched
    },
    handleLink (item) {
      const { redirect, path } = item
      if (redirect) {
        this.$router.push(redirect)
        return
      }
      // this.$router.push(this.pathCompile(path))
      this.$router.push(path)
    }
  },
  watch: {
    $route () {
      this.getBreadcrumb()
    }
  }
}
</script>

<style scoped >
  .breadcrumb-appwrapper{
    display: inline-block;
    font-size: 14px;
    line-height: 50px;
    margin-left: 8px;
  }
</style>
