<template>
    <div class="fixed_part" >
      <p>回到首页</p>
      <el-backtop></el-backtop>
    </div>
</template>

<script>
export default {
  name: 'fixed'
}
</script>

<style scoped lang="scss">
.fixed_part{
  position: fixed;
  bottom: 0;
  right:20px;
}
</style>
