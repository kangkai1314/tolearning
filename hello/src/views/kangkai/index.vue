<template>
    <div class="kangkai_page">
      <fixed></fixed>
      <div class="k_container">
        <el-container>
          <el-header class="header" >
            <kmenu></kmenu>
          </el-header>
          <el-container >
            <el-aside class="aside" style="position: fixed;top:60px;height:700px;overflow: scroll;z-index: 2;background-color: #999999">
              <ul>
                <h3>小说篇章</h3>
                <li v-for="i in 100" :key="i">
                  <el-card class="contegy">第{{i}}章</el-card>
                </li>
              </ul>
            </el-aside>
            <el-main class="main"  style="position: relative;left: 250px;top:50px">
              <h1> 测试内容</h1>
              <el-row>
                <el-col :span="12" >
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
              <el-row>
                <el-card>
                  <p>知识卡片 set</p>
                  <h1>基本操作</h1>
                </el-card>
              </el-row>
            </el-main>
          </el-container>
          <div class="buju">
            <div class="content2" v-for="i in 2" :key="i">
              <p class="main-content">content</p>

            </div>
            <!--<div class="spec-info" style="border: 1px solid black ;width: 200px;height: 200px;order:0">-->
              <!--<p>this is space</p>-->
            <!--</div>-->

          </div>

          <el-footer>
            <p>this is footer</p>
            <footer-area></footer-area>
          </el-footer>
        </el-container>
      </div>
    </div>
</template>

<script>
import Kmenu from './components/Kmenu'
import Fixed from './components/fixed'
import Kform from './components/Kform'
import FooterArea from './components/footer'
import {fetchJobs} from '../../api/job'

export default {
  name: 'index',
  components: {FooterArea, Kform, Fixed, Kmenu},
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
    },
    getUsers: function () {
      return new Promise((resolve, reject) => {
        fetchJobs().then(response => {
          console.log(response)
          resolve('success')
        }).catch(error => {
          reject(error)
        })
      }).then(response => {
        console.log(response)
      })
    }
  },
  created () {
    this.getUsers()
  }

}
</script>

<style scoped lang="scss">
  @media screen and (max-width: 1080px){
p{
  background-color: black;
}
  }
.header{
  position: fixed;
  width: 100%;
  z-index: 1000;
  padding: 0;
}

  .aside{
  }

  .main{
    flex-wrap: wrap;
    justify-content: center;

  }

  .content{

  }
  .buju{
    width:100%;
    height: 700px;
    background-color: #409EFF;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

  }
  .content2{
    background-color: #e65d6e;
    margin:10px;
    order:2;
    flex-grow: 1;
  }
  .content2:hover{
    color: white;
    background-color: black;
    border-radius: 2px;
  }
  .content2:active{
    color: black;
    background-color: #409EFF;
  }
  p:first-line{
    color: green;
  }
  p.main-content:before{
    content: url(https://pic4.zhimg.com/50/v2-043d3c1608240895beb4d6c12f88b82a_400x224.jpg) ;
  }
  h1{
    text-align: center;
    margin-bottom: 10px;
  }
  ul{
    list-style-type: none;
    padding: 0;
  }
  li{
    margin-bottom: 5px;
  }
  .contegy:hover{
    color: #13ce66;
  }
  .contegy:active{
    color: #5daf34;
  }

</style>
