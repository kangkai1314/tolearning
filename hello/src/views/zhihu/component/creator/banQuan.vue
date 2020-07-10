<template>
    <div class="banquan-view">
      <div class="head">
      <h3>微信侵权投诉</h3>
        <p>常见问题<i class="el-icon-question"></i></p>
      </div>
      <div class="content">
        <p>我们和微信公众平台建立了自动对接与处理投诉的绿色通道，当您在知乎的原创内容被微信公众号侵权使用时，可在本页面提交投诉，知乎以平台方的身份协助用户维权。符合侵权条件的内容会在 24 小时内被删除，累积多次侵权的公众号会被封禁。感谢您对知乎版权工作的支持。如有任何问题，欢迎随时私信 @知乎版权。

          ​</p>
        <p>微信号已绑定  <span style="color: #999999">投诉结果发至该微信号</span></p>
      </div>
      <div class="form-class">
        <el-form :inline="true">
          <el-form-item label="原创内容">
            <el-input placeholder="请填写被侵权的知乎连接"></el-input>
          </el-form-item>
          <el-form-item label="侵权内容">
           <el-input placeholder="请填写侵权的公众号内容链接"></el-input>
            <el-button icon="el-icon-plus">添加更多侵权链接</el-button>
          </el-form-item>
          <el-form-item label="投诉说明">
          <el-input type="textarea" placeholder="请填写侵权原因(500字以内)"></el-input>
          </el-form-item>
          <el-form-item label="责任声明">
            <ul>
              <li>我确认「原创内容」是本人原创，本人是该内容的合法权利人。</li>
              <li>我确认提交的「侵权内容」侵犯了本人相应的合法权益。</li>
              <li>我确认授权知乎联系「侵权内容」作者或者所在平台处理侵权事宜，要求删除该内容。</li>
              <li>如果以上信息不完全属实，本人将承担由此产生的一切法律责任。</li>
            </ul>
            <el-checkbox>我已阅读并同意该责任声明</el-checkbox>
          </el-form-item>
          <el-form-item>
            <el-button>提交申诉</el-button>
          </el-form-item>
        </el-form>

      </div>

    </div>
</template>

<script>
export default {
  name: 'banQuan'
}
</script>

<style scoped lang="scss">
  @import "../../../../styles/mixin";
.banquan-view{
  padding: 10px;
  background-color: #fff;
  text-align: left;
}
  .head{
    border-bottom: 1px solid #f4f4f5;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .content{
    border-bottom: 1px solid #f4f4f5;
    padding: 10px;
  }
  .form-class {
    .el-form-item {
      width: 100%;
    }
    .el-form-item__label {
      padding: 10px;
    }
    .el-button {
      @include blueButton;
      margin-left: 60px;
    }
  }

</style>
