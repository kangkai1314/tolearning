<template>
<div class="rent-view">
  <p>this i s</p>
  <el-button @click="open">click</el-button>

</div>
</template>

<script>
export default {
  name: 'rent',
  data () {
    return {
      ratingVisible: false,
      design: 'item',
      ratingButtons: [
        { id: 1, label: '事件匹配', value: 'item' },
        { id: 2, label: '产品匹配', value: 'product' },
        { id: 3, label: '自定义', value: 'diy' }
      ],
      item: {
        userNumber: '',
        ratingItem: '',
        testProcess: '',
        userPoints: []
      },
      product: {
        userNumber: '',
        ratingItem: '',
        testProcess: '',
        userPoints: []
      },
      diy: {
        userNumber: '',
        testProcess: '',
        userPoints: [],
        desc: '',
        ele1: '',
        ele2: '',
        ele3: '',
        ele4: '',
        ele5: '',
        ele6: ''
      },
      offerOptions: [{offerId: 1, offerName: '测试产品1'}, {offerId: 2, offerName: '测试产品2'}]

    }
  },
  methods: {
    open: function () {
      this.ratingVisible = true
    }
  }
}
</script>

<style scoped>

</style>
