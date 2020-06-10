<template>
    <div class="hot-ranks" style="padding: 10px">
     <!--<el-collapse>-->
       <!--<el-collagitpse-item>-->
         <!--<template slot="title">-->
           <!--<div class="title-view">-->
             <!--<el-button v-for=" i in 7" :key="i" style="margin: 20px">rank</el-button>-->
           <!--</div>-->
         <!--</template>-->

       <!--</el-collagitpse-item>-->
     <!--</el-collapse>-->
      <!--<el-tabs>-->
        <!--<el-tab-pane v-for="i in 10" :key="i" label="type">-->
          <!--榜单内容-->
        <!--</el-tab-pane>-->
      <!--</el-tabs>-->
      <div class="openState" v-if="close">
        <el-row>
          <el-button v-for="element in list" :key="element.order">{{element.name}}</el-button>
          <el-button style="border-radius: 20px;float: right;margin-right: 20px" size="small" @click="show">
            <i class="el-icon-arrow-down"></i>展开</el-button>
        </el-row>

      </div>
      <div class="closeState" v-else>
        <div class="col-md-3">
          <el-row>
            <el-col :span="12">
              <h3 style="text-align: left;margin: 10px">我的榜单  <sapn>拖动调整顺序</sapn></h3>
            </el-col>
            <el-col :span="12">
              <el-button style="border-radius: 20px;float: right;margin-right: 20px" size="small" @click="noShow">
                <i class="el-icon-arrow-up"></i>收起</el-button>

          </el-col>
          </el-row>

          <draggable class="list-group" tag="ul" v-model="list" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
            <transition-group type="transition" :name="'flip-list'">
              <!--<li class="list-group-item" v-for="element in list" :key="element.order">-->
              <!--<i :class="element.fixed? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'" @click=" element.fixed=! element.fixed" aria-hidden="true"></i>-->
              <!--{{element.name}}-->
              <!--<span class="badge">{{element.order}}</span>-->
              <!--</li>-->
              <el-button v-for="element in list" :key="element.order">{{element.name}}</el-button>

            </transition-group>
          </draggable>
        </div>

        <div class="col-md-3">
          <h3 style="text-align: left;margin: 10px">推荐榜单  <sapn>拖动调整顺序</sapn></h3>
          <draggable element="span" v-model="list2" v-bind="dragOptions" :move="onMove">
            <transition-group name="no" class="list-group" tag="ul">
              <el-button v-for="element in list2" :key="element.order">{{element.name}}</el-button>

            </transition-group>
          </draggable>
        </div>
        <el-row>

        </el-row>
      </div>
      <hot-zhi-hu-item></hot-zhi-hu-item>

    </div>
</template>

<script>
import draggable from 'vuedraggable'
import HotZhiHuItem from './hotZhiHuItem'
const hotRanks = [
  '全站', '体育', '校园', '视频', '汽车'
]
export default {
  name: 'hotItem',
  components: {
    HotZhiHuItem,
    draggable
  },
  data () {
    return {
      close: true,
      list: hotRanks.map((name, index) => {
        return { name, order: index + 1, fixed: false }
      }),
      list2: [],
      editable: true,
      isDragging: false,
      delayedDragging: false
    }
  },
  methods: {
    show: function () {
      this.close = false
    },
    noShow: function () {
      this.close = true
    },
    orderList () {
      this.list = this.list.sort((one, two) => {
        return one.order - two.order
      })
    },
    onMove ({ relatedContext, draggedContext }) {
      const relatedElement = relatedContext.element
      const draggedElement = draggedContext.element
      return (
        (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
      )
    },
    drag (ev) {
      console.log('move')
      this.dom = ev.currentTarget.cloneNode(true)
    },
    allowDrop (ev) {
      ev.preventDefault()
    },
    drop (ev, item) {
      ev.preventDefault()
      let treeNode = ev.target
      if (treeNode) {
        treeNode.appendChild(this.dom)
      }
    }
  },
  computed: {
    dragOptions () {
      return {
        animation: 0,
        group: 'description',
        disabled: !this.editable,
        ghostClass: 'ghost'
      }
    },
    listString () {
      return JSON.stringify(this.list, null, 2)
    },
    list2String () {
      return JSON.stringify(this.list2, null, 2)
    }
  },
  watch: {
    isDragging (newValue) {
      if (newValue) {
        this.delayedDragging = true
        return
      }
      this.$nextTick(() => {
        this.delayedDragging = false
      })
    }
  }
}
</script>

<style scoped>
  .my-rank{
    background-color: #b3d8ff;
  }
  .reco-rank{
    width: 500px;
    height: 50px;
    background-color: #b3d8ff;
  }

  .drag-div{
    width: 50px;
    height: 50px;
    background-color: black;
  }
  .drop-div{
    width: 1000px;
    height: 200px;
    background-color: #20a0ff;
  }

  .flip-list-move {
    transition: transform 0.5s;
  }

  .no-move {
    transition: transform 0s;
  }

  .ghost {
    opacity: 0.5;
    background: #c8ebfb;
  }

  .list-group {
    min-height: 20px;
  }

  .list-group-item {
    cursor: move;
  }

  .list-group-item i {
    cursor: pointer;
  }

</style>
