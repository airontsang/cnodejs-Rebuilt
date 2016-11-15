<template>
  <div class="art-box">
    <div class="art-session">
      <div class="article-head">
        <div class="article-title">
          <span v-if="article.good" class="is-good">置顶</span>
          <span v-else>{{ article.tab }}</span>
          <span>{{ article.title }}</span>
        </div>
        <div class="article-info">
          <span>·发布与1个月前</span>
          <!--<span>·作者 {{ article.author.loginname }}</span>-->
          <span>·{{ article.visit_count }}次浏览</span>
          <span>·来自 {{ article.tab }}</span>
        </div>
      </div>
      <div v-html="this.article.content" class="article-content"></div>
    </div>
    <div class="art-reply">
      <div class="reply-num">3 回复</div>
      <div class="reply-all">
        <div class="reply-item" v-for="reply in article.replies">
          <a class="user-avatar"><img class="avatar-img" v-bind:src="reply.author.avatar_url"></a>
          <div class="reply-info">
            <a class="reply-user">{{ reply.author.loginname }}</a>
            <span>{{ reply.create_at }}</span>
          </div>
          <div class="reply-content" v-html="reply.content"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
  .art-box{
    flex: 0 0 80%;
  }
  .art-session{
    padding:16px;
    background-color: #ffffff;
    border-radius: 3px;
  }
  .article-head{
    border-bottom:1px solid #c9c9c9;
    margin-bottom: 30px;
  }
  .article-title>span:nth-child(1){
    background-color: #c9c9c9;
    color: #fff;
    border-radius: 3px;
    padding:0 4px;
    margin-right: 5px;
    position: relative;
    top:-4px;
    font-size: 0.9em;
    display: inline-block;
  }
  .is-good{
    background-color: #0bb20c;
  }
  .article-title>span:nth-child(2){
    font-size: 1.6em;
    font-weight: 600;
  }
  .article-info{
    font-size: 0.8em;
    color:#333333;
    margin-bottom: 10px;
  }
  .reply-user {
    display: inline-block;
    margin-left: 5px;
  }
  .article-content h1, .article-content h2,
  .article-content h3, .article-content h4,
  .article-content h5, .article-content h6 {
    font-size: 1.7em;
    font-weight: 500;
    margin:30px 0 15px;
    border-bottom: 1px solid #eee;
  }
  .article-content ol, .article-content ul {
    padding: 0;
    margin: 0 0 10px 25px;
  }
  .article-content li {
    font-size: 0.9em;
    list-style: initial;
  }
  .markdown-text p{
    line-height: 30px;
    overflow: auto;
  }
  .markdown-text h3{
    margin-top: 30px;
    margin-bottom: 10px;
    padding-bottom: 5px;
    border-bottom: 1px solid #c9c9c9;
  }
  .art-reply{
    margin-top: 20px;
    border-radius: 5px;
    background-color: #ffffff;
  }
  .reply-item{
    padding: 16px;
    border-bottom:1px solid #d9d9d9;
  }
  .reply-num{
    padding:10px;
    background-color: #c9c9c9;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
  }
  .user_avatar{
    display:inline-block;
    float:left;
  }
  .avatar-img{
    width: 25px;
    height:25px;
    border-radius: 2px;
  }
  .reply-content{
    margin-left: 50px;
  }
  pre.prettyprint{
    padding: 0 15px;
    margin: 20px -10px;
    border-width:1px 0;
    background:#f7f7f7;
  }
  pre code{
    white-space: pre-wrap;
    background-color: transparent;
  }
  @media screen and (max-width: 450px){
    .art-box{
      flex: 0 0 100%;
    }
  }
</style>
<script>
  export default{
    name: 'Article',
    data(){
      return{
        id: '',
        article:''
      }
    },
    computed:{
      id: function () {
      return this.$route.params.id
    }
    },
    methods:{
      getarticle:function(){
        var that = this;
        this.$http.get(
          'https://cnodejs.org/api/v1/topic/'+this.id
        ).then(
          (response)=>{
          response.body.data.replies.forEach(( reply ) => {
          var minutes = 1000 * 60
          var hours = minutes * 60
          var days = hours * 24
          const d = Date.parse(reply.create_at)
          const dNow = Date.parse(new Date())
          if((dNow-d)/days >= 1){
          reply.create_at = parseInt((dNow-d)/days)+"天"
        }else if((dNow-d)/hours >= 1){
          reply.create_at = parseInt((dNow-d)/hours)+"小时"
        }else if((dNow-d)/minutes >= 1){
          reply.create_at = parseInt((dNow-d)/minutes)+"分钟"
        }
        })
          this.article = response.body.data
        switch (this.article.tab){
          case 'ask':
            this.article.tab = "问答"
            break;
          case 'share':
            this.article.tab = "分享"
            break;
          case 'job':
            this.article.tab = "招聘"
            break;
          case 'good':
            this.article.tab = "精华"
            break;
        }
        }
        )
      }
    },
    mounted:function(){
      this.$store.dispatch('backlist')
      this.getarticle()
    }
  }
</script>
