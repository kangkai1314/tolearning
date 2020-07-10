<template>
<div class="question-view">
  <div class="headView">
    <div class="tagView">
      <div style="display: flex;justify-content: flex-start">
        <el-tag v-for="tag in question.tags" :key="tag" >{{tag}}</el-tag>

      </div>
      <div class="question" >
        <h2>{{question.title}}</h2>
        <p>{{question.desc}}</p>
        <div class="op-view" style="display: flex;justify-content: space-evenly;align-items: center">
          <el-button style="color: #fff;
    background-color: #0084ff;">关注问题</el-button>
          <el-button icon="el-icon-edit" style="color: #0084ff;
    border-color: #0084ff;">写回答</el-button>
          <el-button icon="el-icon-user">邀请回答</el-button>
          <span>好问题</span>
          <span>条评论</span>
          <span>分享</span>
          <i class="el-icon-more"></i>
        </div>

      </div>

    </div>
    <div class="view-view">
      <div style="margin: 10px">
        <p>关注者</p>
        <span style="font-weight: bold">1231313</span>
      </div>
      <div style="margin: 10px">
        <p>被浏览</p>
        <span style="font-weight: bold"> 211314214</span>
      </div>

    </div>
  </div>
  <div class=" contentView">
    <div class="answer-view" >
      <p style="margin-bottom: 10px;background-color: #ffffff;line-height: 40px;margin-top: 0">查看全部58个回答</p>
      <div class="" style="text-align: left;background-color: #ffffff;padding: 10px">
        <el-avatar shape="square" :src="answer.url"></el-avatar><span>{{answer.author}}</span>
        <p>21人赞了该回答</p>
        <span class="RichText ztext CopyrightRichText-richText" itemprop="text"><p>不讨厌。</p><p>虽然我对浣碧毫无感觉，甚至我还有点讨厌浣碧这个角色，但是我不讨厌演员本人。</p><p>我第一次看见蓝盈莹是在甄嬛传，第二次是在演员的诞生。</p><p>她演 最爱 ，和凌潇肃一起。</p><p>那个舞台上，我看见她又哭又笑，由喜转悲，最后在大婚当天一根红绫结束生命，死的生活，眼角滑落一滴泪，滴到了我心里。</p><p>演员的诞生那么多期，只有这一个片段让我泣不成声。</p><p>那个时候我开始喜欢她，我喜欢实力强的人，我发现她很乐观，很有天赋，也很努力。</p><p>第三次看见她是她的私人生活的状况。她和前男友分手，两人却没有撕X，而且非常和平友好地阐明原因，然后分开。当时被很多路人称赞。</p><p>第四次就是姐姐们这个综艺，我看见她的实力和她的自信，心里佩服且欣赏。</p><p>她是一个非典型学霸，不是那种说自己考前没复习的学霸，而是坦坦荡荡地说出 我准备的很好 的那种自信学霸。</p><p>我欣赏她，也喜欢她。</p><p>但是优秀的人总会招致别人的不满。</p><p>我常看到一些人说喜欢一个爱豆是因为他很优秀，很勇敢，活出了我想要的样子。后来我也看到这群人说看着蓝盈莹自己总是没感觉，get不到，觉得她太爱表现了，太张扬之类的。</p><p>然后我发现，有时候人们不是因为这个人身上的一些特质喜欢她的，是因为喜欢她才愿意发现她的闪光点。</p><p>在这个时代，喜欢上一个人多么容易，讨厌一个人也是多么地容易。</p><p>一篇文章，几个截图，两三句评论，轻易在你心里给她下了定位。</p><p>再看她，就是带着厚而不自知的滤镜——你心中早就定了喜恶，自然看什么都有颜色。</p><p>所以我不会因为别人说她爱表现就带着这样的印象给她下判断。</p><p>我不会因为别人说她跳舞用力过猛而无限放大这一个缺点，觉得他不适合女团。</p><p>我有自己的判断和偏好。我看了她的表演，她的综艺，她的弹唱，她展现的生活，我知道我喜欢这样的她，我喜欢自律，自信，乐观开朗，有实力的女孩子。</p><p>仅此而已。</p></span>

      </div>
    </div>

    <div class="more-view">
      <div style="display: flex;flex-direction: column;    background-color: #ffffff;margin-left: 10px;padding: 10px">
        <h3 style="text-align:left;border-bottom: 1px solid #f4f4f5;padding-bottom: 10px">相关问题</h3>
        <div style="padding: 10px" >
          <div class="question-related" v-for="i in 5" :key="i" style="text-align: left">
            <el-link style="word-break: break-word;
    display: inline;
    color: #175199;">相关问题</el-link> <span style="font-size: 14px;
    line-height: 21px;
    color: #8590a6;">n个回答</span>
          </div>
        </div>

        </div>

      <div class="author-view" style="    background-color: #ffffff;margin-top: 10px;margin-left: 10px;padding: 10px;">
        <h3 style="text-align:left;border-bottom: 1px solid #f4f4f5;padding-bottom: 10px">关于作者</h3>
        <div style="display: flex;align-items: center;padding: 10px">
          <el-avatar shape="square" :src="answer.url" :size="60" style="margin-right: 10px"></el-avatar>
          <h2>{{answer.author}}</h2>
        </div>
        <div  style="display: flex;justify-content: space-between;padding: 10px">
          <div>
            <p>回答</p>
            <span>12</span>

          </div>
          <div>
            <p>文章</p>
            <span>14</span>
          </div>
          <div>
            <p>关注者</p>
            <span>15</span>
          </div>

        </div>
        <el-button icon="el-icon-plus">关注他</el-button>
        <el-button icon="el-icon-message">私信他</el-button>
      </div>
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: 'questionItem',
  data () {
    return {
      question: {
        tags: ['人气问题', '月收入', '年收入'],
        title: '中国人的月收入过一万了嘛',
        desc: '包括灰色收入、被动收入。真的很多人不靠主动收入吗？'
      },
      answer: {
        url: 'https://pic3.zhimg.com/v2-c0ab127e66ce86ce1835529ddaec1291_xs.jpg',
        author: '康凯'
      }
    }
  }
}
</script>

<style scoped>
  .question-view{
    display: flex;
    margin: 10px 110px;
    flex-direction: column;
    width: 100%;
    padding-left: 20px;

  }
  .headView{
    display: flex;
    background-color: #ffffff;
  }
  .tagView{
    padding: 10px;
    flex:5;

  }
  /deep/
  .el-tag{
    border-radius: 100px;
    margin: 10px;
    font-size: 14px;
    line-height: 30px;
    color: #0084ff;
    background: rgba(0,132,255,.1);

  }
  .view-view{
    flex:4;
    display: flex;
    justify-content: center;

  }
  .contentView{
    display: flex;
    margin-top: 10px;
  }
  .answer-view{
    flex: 6;
    margin-bottom: 10px;

  }

  .more-view{
    flex:2;
  }
  .question{
    text-align: left;
    padding: 10px;

  }

</style>
