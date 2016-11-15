<template>
    <div class="list-session">
      <div class="list-tab">
        <router-link class= "topic-tab" :class="{ selected: tab.tabClick }" :to="{ name: 'tab', params: { tab:tab.hname } }" v-for="tab in tabs">{{ tab.sname }}</router-link>
      </div>
      <div class="item-cell" v-for = 'item in list'>
        <a class="user-avatar"><img class="item-portrait" v-bind:src="item.author.avatar_url" title="This is test"></a>
        <span class="reply-count"><span>{{ item.reply_count }}</span>/<span>{{ item.visit_count }}</span></span>
        <a class="final-reply">
          <img class="item-last-portrait" src="./1.jpg" title="This is test">
          <span class="last-active-time">{{ item.create_at }}</span>
        </a>
        <div class="item-info">
          <span class="info-space info-tab selected" v-if="item.good">置顶</span>
          <span class="info-space info-tab" v-else>{{ item.tab }}</span>
          <router-link class= "item-title" :to="{ name: 'article', params: { id:item.id} }">{{ item.title }}</router-link>
        </div>
      </div>
      <div class="loading" id="loadtarget">加载中......</div>
    </div>
</template>
<style>
  .clearfix:after {
    content:"\200B";
    display:block;
    height:0;
    clear:both;
  }
  .clearfix {*zoom:1;}/*IE/7/6*/
  .list-session{
    width: 80%;
  }
  .item-cell{
    position:relative;
    justify-content: space-between;
    padding:10px 10px 10px 10px;
    border-bottom: 1px #f6f6f6 solid;
    background-color: #ffffff;
    color: #333;
  }
  .item-cell:hover{
    background: #f6f6f6;
  }
  .item-info{
    white-space: nowrap;
  }
  .user-avatar{
    margin-right:5px;
    float:left;
  }
  .reply-count{
    display:inline-block;
    width: 70px;
    text-align: center;
    float:left;
  }
  .info-tab{
    background: #e5e5e5;
    color:#999;
    border-radius: 3px;
    padding:0px 3px;
    font-size: 0.7em;
  }
  .item-title{
    max-width: 70%;
    display:inline-block;
    vertical-align: middle;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    line-height: 30px;
    color: #333;
  }
  .item.title:visited {
    color: #888;
  }
  .item-portrait{
    border-radius: 70%;
    width: 25px;
    height:25px;
  }
  .final-reply{
    display:inline-block;
    float:right;
  }
  .item-last-portrait{
    border-radius: 50%;
    width:20px;
    height:20px;
  }
  .last-active-time{
    text-align: right;
    min-width: 50px;
    display: inline-block;
    white-space: nowrap;
  }
  .list-tab{
    position: relative;
    padding:10px;
    background: #f6f6f6;
    border-radius: 3px 3px 0 0;
  }
  .topic-tab{
    display: inline-block;
    padding: 2px 5px;
    color: #80bd01;
    border-radius: 5px;
    cursor: pointer;
  }
  .selected{
    background: #80bd01;
    color: #fff;
  }
  .loading{
    text-align: center;
    padding: 10px 0;
  }
  @media screen and ( max-width: 450px) {
    .list-session{
      width: 100%;
      overflow: hidden;
    }
    .item-info-end{
      position: relative;
      top:5px;
      left: 90%;
    }
    .final-reply{
      position:absolute;
      bottom:0;
      right:10px;
    }
    .reply-count{
      position:absolute;
      bottom:0;
      left:70px;
    }
    .final-reply img{
      display:none;
    }
  }
</style>
<script>
  import { getScrollTop, getScrollHeight, getWindowHeight, offsetTop } from '../../static/scroll'
  import { mapGetters } from 'vuex'
  import Vue from 'vue'
    export default{
      name: 'List',
      data () {
        return {
          tab:'',
          page: 1,
          limit: 20,
          tabs:[
            {'sname':"全部", 'hname':"all", 'tabClick': 1},
            {'sname':"精华", 'hname':"good", 'tabClick': 0},
            {'sname':"分享", 'hname':"share", 'tabClick': 0},
            {'sname':"问答", 'hname':"ask", 'tabClick': 0},
            {'sname':"招聘", 'hname':"job", 'tabClick': 0}
          ],
        }
      },
      computed: mapGetters({
        list: 'list',
        isChangeTab: 'isChangeTab'
      }),
      watch: {
        page: 'get',
        '$route': function () {
//          this.list = ''
          this.tab = this.$route.params.tab
          this.tabSelected(this.tab)
          this.$store.dispatch('clearstorelist')
          this.get()
        }
      },
      methods: {
        get: function () {
          this.$store.dispatch('requiredata',{
            tab: this.tab,
            page: this.page,
            limit: this.limit
          })
        },
        scrollShow: function () {
          let loadtarget = document.getElementById("loadtarget")
          let targetoffsetTop = offsetTop(loadtarget);
          if(Math.ceil(getScrollTop()) + getWindowHeight() == getScrollHeight()){
            this.page++
          }
        },
        tabSelected: function ( tabName ) {
          console.log(tabName)
          this.tabs.map(function(item){
            return item.tabClick = 0;
          })
          switch (tabName) {
            case 'good':
                  this.tabs[1].tabClick = 1;
                  break;
            case 'share':
              this.tabs[2].tabClick = 1;
              break;
            case 'ask':
              this.tabs[3].tabClick = 1;
              break;
            case 'job':
              this.tabs[4].tabClick = 1;
              break;
          }
        }
      },
      mounted: function () {
        console.log("mounted")
        window.addEventListener('scroll', this.scrollShow)
        if(this.$route.params.tab == 'all'){
          this.tabs[0].tabClick = 1
          this.tab = ''
        }else {
          this.tab = this.$route.params.tab
          this.tabSelected( this.tab )
        }
        if(!this.$store.state.isBackList){
          this.get()
          this.$store.dispatch('clearstorelist')
        }
      },
      destroyed: function () {
        console.log("remove")
        window.removeEventListener('scroll', this.scrollShow)
      },
      updated: function () {
//        window.onscroll = this.scrollShow
      }
    }
</script>
