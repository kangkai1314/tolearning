<template>
    <el-card>
      <el-form :model="obj" style="width: 800px" label-width="200px">
        <el-form-item label="姓名" >
          <el-input v-model="obj.name" placeholder="please input your name" style="width: 400px"></el-input>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input-number v-model="obj.age"></el-input-number>
        </el-form-item>
        <el-form-item label="颜色选择">
          <el-color-picker v-model="obj.color"></el-color-picker>
        </el-form-item>
        <el-form-item label="日期选择">
          <el-date-picker v-model="obj.time"></el-date-picker>
        </el-form-item>
        <el-form-item label="选项选择">
          <el-select v-model="obj.select" placeholder=" please choose your chioce">
            <el-option  v-for="o in options" :key="o.id" :label="o.id" :value="o.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="选择你喜欢的程度">
          <el-switch v-model="obj.switch" active-text="super" inactive-color="no-super"></el-switch>
          <el-slider v-model="obj.slider"></el-slider>
        </el-form-item>
        <el-form-item label="选择你喜欢的类型">
          <el-checkbox-group v-model="checklist">
            <el-checkbox label="爱情"></el-checkbox>
            <el-checkbox label="惊悚"></el-checkbox>
            <el-checkbox label="恐怖"></el-checkbox>
            <el-checkbox label="动作"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="评价一下">
          <el-rate v-model="obj.rate">
          </el-rate>

        </el-form-item>
        <el-form-item label="关注">
          <el-radio-group v-model="obj.follow">
            <el-radio label="follow">关注</el-radio>
            <el-radio label="no-follow">不关注</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item>
          <el-button>提交</el-button>
        </el-form-item>
      </el-form>
    </el-card>
</template>

<script>
export default {
  name: 'Kform',
  data () {
    return {
      obj: {
        name: '',
        age: '',
        sex: '',
        color: '',
        time: '',
        select: '',
        switch: '',
        slider: '',
        rate: '',
        follow: ''
      },
      options: [{id: 1}, {id: 2}, {id: 3}, {id: 4}],
      checklist: ['恐怖', '惊悚', '爱情', '动作']
    }
  }
}
</script>

<style scoped>

</style>
