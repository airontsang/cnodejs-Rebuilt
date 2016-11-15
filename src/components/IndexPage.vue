<template>
  <div class="content">
    <router-view></router-view>
  </div>
</template>
<style>
  .content{
    width: 90%;
    margin: 10px auto;
  }
  @media screen and ( max-width: 450px ){
    .content{
      width: 98%;
      margin: 10px auto;
    }
  }
</style>
<script>
    export default{
      name: 'IndexPage',
      data () {
        return {
          msg: 'hell'
        }
      },
    }
</script>
