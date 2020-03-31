<template>
    <div class="hot-ranks">
     <el-collapse>
       <el-collagitpse-item>
         <template slot="title">
           <div class="title-view">
             <el-button v-for=" i in 7" :key="i" style="margin: 20px">rank</el-button>
           </div>
         </template>

       </el-collagitpse-item>
     </el-collapse>
      <el-tabs>
        <el-tab-pane v-for="i in 10" :key="i" label="type">
          榜单内容
        </el-tab-pane>
      </el-tabs>
    </div>
</template>

<script>
export default {
  name: 'hotItem'
}
</script>

<style scoped>

</style>
