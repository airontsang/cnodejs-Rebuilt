#基于vue.js重写的Cnodejs.org社区，实现了简单的展示功能
##采用vue-cli搭建，使用vue.js 2.0，搭配对于vue-router和vuex
###安装
<br>项目地址：（`git clone`）
    
    git clone https://github.com/airontsang/tsang.github.io.git
    
<br>通过```npm```安装本地服务第三方依赖模块(需要已安装[Node.js](https://nodejs.org/en/))
    
    npm install
    
<br>启动服务器(http://localhost:8080)
    
    npm run dev
 
<br>发布代码
    
    npm run build
    
###开发
###目录结构
    .
    |--build            // 构建服务和webpack配置
    |--index.html       //项目主页，入口
    |--config           //项目环境配
    |--package.json     //项目配置文件
    |--src              //生产目录
    |  |--assets        //静态资源
    |  |--components    //项目组件
    |  |--vuex          //vuex文件夹，暂时没按照该结构组织
    |  |--store.js      //状态管理都写在这里了
    |  |--main.js       Webpack 预编译入口
    
    

