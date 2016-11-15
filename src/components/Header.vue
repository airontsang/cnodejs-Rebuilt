<template>
    <div class="navbar">
        <div class="navbar-inner">
          <div class="navbar-container clearfix">
            <a class="brand" href="/">
              <img src="https://o4j806krb.qnssl.com/public/images/cnodejs_light.svg">
            </a>
            <ul class="nav float-right">
              <li>
                <a href="/">首页</a>
              </li>
              <li>
                <a href="/">新手入门</a>
              </li>
              <li>
                <a href="/">API</a>
              </li>
              <li>
                <a href="/">关于</a>
              </li>
              <li>
                <a href="/">注册</a>
              </li>
              <li>
                <a href="/">登录</a>
              </li>
            </ul>
          </div>
        </div>
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
  .navbar{
    position:relative;
    width: 100%;
    background: #444;
  }
  .navbar-inner{
    width: 80%;
    margin: auto;
    padding:5px;
  }
  .nav{
    position:relative;
    display: block;
    margin:0 10px 0 0;
    list-style: none;
  }
  .nav>li{
    float: left;
    margin-right: 10px;
    line-height: 35px;
  }
  .nav>li>a{
    color: #fff;
  }
  .float-right{
    float: right;
  }
  .brand{
    display: block;
    float: left;
    width: 120px;
    padding: 3px 20px;
    height: 28px;
  }
  @media screen and ( max-width: 450px){
    .brand{
      float:none;
      margin: auto;
    }
  }
</style>
<script>
</script>
