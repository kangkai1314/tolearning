<template>
    <div class="sub_view">
     <div class="sub" v-for="i in ob" :key="i">
       <p>{{i}}</p>
     </div>
      <!--<p>this is sub</p>-->
    </div>
</template>

<script>
export default {
  name: 'testSub',
  data () {
    return {
      // ob: {
      //   name: 'hello'
      // }
    }
  },
  props:{
    ob:{}
  }
}
</script>

<style scoped>

</style>
