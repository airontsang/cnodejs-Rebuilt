/**
 * Created by Tsang on 2016-10-12.
 */
export function getScrollTop (){
  var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
  if(document.body){
    bodyScrollTop = document.body.scrollTop;
  }
  if(document.documentElement){
    documentScrollTop = document.documentElement.scrollTop;
  }
  scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
  return scrollTop;
}
//文档的总高度
export function getScrollHeight(){
  var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
  if(document.body){
    bodyScrollHeight = document.body.scrollHeight;
  }
  if(document.documentElement){
    documentScrollHeight = document.documentElement.scrollHeight;
  }
  scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
  return scrollHeight;
}
//浏览器视口的高度
export function getWindowHeight(){
  var windowHeight = 0;
  if(document.compatMode == "CSS1Compat"){
    windowHeight = document.documentElement.clientHeight;
  }else{
    windowHeight = document.body.clientHeight;
  }
  return windowHeight;
}
export function offsetTop( elements ){
  var top = elements.offsetTop;
  var parent = elements.offsetParent;
  while( parent != null ){
    top += parent.offsetTop;
    parent = parent.offsetParent;
  };
  return top;
};
/*export default {
 ListenScroll(){
    window.onscroll = function(){
      /!*console.log("滚条距顶高度 "+getScrollTop())
      console.log("窗口 "+getWindowHeight())
      console.log("滚动高度 "+getScrollHeight())*!/
      if(getScrollTop() + getWindowHeight() == getScrollHeight()){
        alert("you are in the bottom!");
      }
    };
  }
}*/
