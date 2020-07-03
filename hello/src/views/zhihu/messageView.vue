<template>
    <div class="message-view">
      <div class="all-view">
        <div v-for="j in 5" :key="j">
          <h3>2020-07-03</h3>
          <div class="one-message" v-for="i in 4" :key="i">
            <div style="display: flex;align-items: center">
              <el-avatar :src="url" style="margin-right: 10px"></el-avatar>
              <div>
                <p style="text-align: left">吴月半的问题等你回答 10.54</p>
                <p>如何看待图书馆闭馆之后，读者以下雨为由要求保安不得下班，必须无偿加班直到雨停为止？</p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
</template>

<script>
export default {
  name: 'messageView',
  props: {
    type: {
      type: String
    }
  },
  data () {
    return {
      url: 'https://pic1.zhimg.com/v2-0bdcd6c43a2ecfe0dfbe72cc3cc3e83e_60w.png'
    }
  }

}
</script>

<style scoped>
.one-message{
  padding:20px 32px;
  border-bottom: 1px solid #f4f4f5;
}
</style>
