<template>
    <div class="bili-page">
      <head-nav></head-nav>
      <router-view></router-view>
    </div>
</template>

<script>
import HeadNav from './component/headNav'
export default {
  name: 'biliPage',
  components: {HeadNav},
  data () {
    return {
      url: ''
    }
  }
}
</script>

<style scoped lang="scss">
  .bill-page{
  }

</style>
