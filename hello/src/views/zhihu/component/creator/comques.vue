<template>
    <div class="com-question">
      <el-tabs>
        <el-tab-pane label="账号帮助">
          <el-collapse>
            <ul>
              <li>
                <el-collapse-item>
                  <template slot="title">
                    为什么开启某些权益需要实名验证？
                  </template>
                  <p>在使用「创作者中心」创收类的权益（如知乎 Live、品牌任务、作者经纪等）时，根据银行的相关规定，提现时需要进行实名认证。</p>

                </el-collapse-item>
              </li>
              <li>
                <el-collapse-item>
                  <template slot="title">
                    实名验证要准备哪些材料？
                  </template>
                  <p>实名验证时所需材料包括，身份证正反面、手持身份证半身照，或者护照照片页、手持护照照片页半身照。身份证信息需清晰、无遮挡，否则无法通过审核。</p>
                </el-collapse-item>
              </li>
            </ul>

          </el-collapse>
        </el-tab-pane>
        <el-tab-pane label="创作者等级"></el-tab-pane>
        <el-tab-pane label="平台权益"></el-tab-pane>
        <el-tab-pane label="视频学院"></el-tab-pane>
      </el-tabs>

    </div>
</template>

<script>
export default {
  name: 'comques'
}
</script>

<style scoped lang="scss">
  .com-question{
    background-color: white;
    margin-top: 10px;
    padding: 10px;
  }

</style>
