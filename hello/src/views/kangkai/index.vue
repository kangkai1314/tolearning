<template>
    <div class="kangkai_page">
      <p>this is kangkai page</p>
      <fixed></fixed>
      <div class="k_container">
        <el-container>
          <el-header class="header" >
            <kmenu></kmenu>
          </el-header>
          <el-container style="position: relative;top:50px;overflow: hidden">
            <el-aside class="aside">
              <ul>
                <li v-for="i in 100">{{i}}</li>
              </ul>
            </el-aside>
            <el-main class="main" >
              <el-row>
                <el-col :span="12">
                  <el-card class="content">
                    <div class="tag_view">
                      <h2>tag list</h2>
                      <el-tag v-for="i in tags" :key="i" style="margin: 10px" :type="i.name" @click="showMess(i)">{{i.name}}</el-tag>
                    </div>

                  </el-card>

                </el-col>
                <el-col :span="12">
                  <el-collapse accordion style="margin-left: 10px">
                    <el-collapse-item>
                      <template slot="title">
                        <p>table<i class="el-icon-takeaway-box">表格</i></p>
                      </template>
                      <div class="table_class">
                        <el-table>
                          <el-table-column v-for="i in tags" :key="i.id" :prop="i.name" :label="i.name"></el-table-column>
                        </el-table>
                      </div>
                    </el-collapse-item>
                  </el-collapse>
                </el-col>
              </el-row>
              <el-row>
                <el-carousel>
                  <el-carousel-item v-for="i in 4" :key="i">
                    <h2>{{i}}</h2>
                    <el-image :src="url"> </el-image>
                  </el-carousel-item>
                </el-carousel>
              </el-row>
              <el-row>
                <kform></kform>
              </el-row>
            </el-main>
          </el-container>

          <el-footer>
            <p>this is footer</p>
          </el-footer>
        </el-container>
      </div>
    </div>
</template>

<script>
import Kmenu from './components/Kmenu'
import Fixed from './components/fixed'
import Kform from "./components/Kform";
export default {
  name: 'index',
  components: {Kform, Fixed, Kmenu},
  data () {
    return {
      tags: [{id: 1, name: 'success'}, {id: 2, name: 'info'}, {id: 3, name: 'warning'}, {id: 4, name: 'danger'}],
      url: 'https://pic4.zhimg.com/50/v2-c65966509ae1f87d3935477fb966c1e2_400x224.jpg'
    }
  },
  methods: {
    showMess: function (data) {
      console.log(data)
      this.$message.success('show tag info ' + data.name)
    }
  }
}
</script>

<style scoped lang="scss">
.header{
  position: fixed;
}
  .aside{
  }

  .main{
    flex-wrap: wrap;
    justify-content: center;

  }

  .content{

  }

</style>
