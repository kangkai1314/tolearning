<template>
    <div class="zhihu-page">
      <!--//<top-menu style="margin: auto" class="top-fixed"></top-menu>-->

          <!--<transition name="fade">-->
        <component :is="com" class="top-fixed" ></component>
          <!--</transition>-->

      <div class="zhihu-content" >
       <router-view></router-view>
      </div>
      <div class="zhihu-fixed">
        <i class="el-icon-camera"></i>
      </div>
    </div>
</template>

<script>
import TopMenu from './component/topMenu'
import ScrollMenu from './component/scrollMenu'
export default {
  name: 'index',
  components: {ScrollMenu, TopMenu},
  data () {
    return {
    }
  },
  created () {
    window.addEventListener('scroll', this.scroll1)
  },
  methods: {
    scroll1: function () {
      // console.log(document.documentElement.scrollTop || document.body.scrollTop)
      if (document.documentElement.scrollTop > 70) {
        this.$store.commit('SCROLL_MENU')
      }
      if (document.documentElement.scrollTop < 70) {
        this.$store.commit('INIT_MENU')
      }
    }
  },
  computed: {
    com: function () {
      if (this.$store.state.app.topmenu.scrolled) {
        return 'scroll-menu'
      } else {
        return 'top-menu'
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .header{
    height: 52px;
    padding: 0;
    width: 800px;
  }
  .zhihu-content{
    background-color: #f4f4f5;
    display: flex;
    position: relative;
    top:60px;

  }
  .banner{
    width: 700px;
    height: 200px;
    background-color: #b3d8ff;

  }
  .modules{
    width: 200px;
    height: 300px;
    background-color: #999999;

  }
  .content{
    width: 700px;
    height: 700px;
    background-color: #20a0ff;

  }
  .top-fixed{
    position: fixed;
    top:0;
    z-index: 2;
    width: 100%;

  }
  .zhihu-fixed{
    position: fixed;
    bottom: 0;
    right: 10px;
    margin: 10px;
    background-color: white;
    width: 36px;
    height: 36px;
  }
  .zhihu-fixed:hover{
    background-color: #999999;
  }

  .fade-enter-active .fade-leave-active{
    transition: opacity 2s;
  }

</style>
