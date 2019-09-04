<template>
    <div class="bilibili-page">
      <div class="bilibili-header" style="height: 170px;background-image:url(//i0.hdslb.com/bfs/archive/3329c9f0abfb925ae30441f24d924ad3c19775df.png);">
        <div style="background-color: hsla(0,0%,100%,.4)"><bilibili-nav></bilibili-nav></div>
        <el-form>
          <el-form-item>
            <el-input style="width: 70px"></el-input>
          </el-form-item>
        </el-form>
        <div style="background-color: white"></div>
      </div>
      <div class="header-nav">
         <bilibili-header-nav></bilibili-header-nav>
      </div>
      <div class="content">
        <div class="recommend" style="margin-left: 184.5px;margin-right: 184.5px ">
         <recommend></recommend>
          <sub-model v-for="i in 4" :key="i"></sub-model>

        </div>
      </div>
      <div class="footer" style="padding: 20px 0;background-color: #f6f9fa;margin-top: 20px;">
        <div class="link-footer" style="margin-left: 184.5px;margin-right: 184.5px">
          <ul>
            <li v-for="i in 6" :key="i">{{i}}</li>
          </ul>
        </div>
        <div class="parter-footer" style="margin-left: 184.5px;margin-right: 184.5px">
          <ul>
            <li v-for="i in 6" :key="i">{{i}}</li>
          </ul>
        </div>
      </div>

    </div>

</template>

<script>
import TopNav from '../../components/topNav'
import BilibiliNav from './bilibili/children/bilibiliNav'
import BilibiliHeaderNav from './bilibili/children/bilibiliHeaderNav'
import Recommend from './bilibili/children/recommend'
import SubModel from './bilibili/children/subModel'
export default {
  name: 'bilibili',
  components: {SubModel, Recommend, BilibiliHeaderNav, BilibiliNav, TopNav}
}
</script>

<style scoped>

</style>
