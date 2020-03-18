<template>
    <ul>
      <li>
        <el-card>
          <div slot="header">
            {{title}}
          </div>
          <div class="content">
            {{content}}
          </div>
        </el-card>
      </li>
    </ul>
</template>

<script>
    export default {
        name: "list",
      data(){
          return {
            title:''
          }
      },
      props:{
          title:{
            type:String,
            default:'列表标题'
          },
        content:{
            type:String,
          default: '列表内容'
        }
      }
    }
</script>

<style scoped lang="scss">


</style>
