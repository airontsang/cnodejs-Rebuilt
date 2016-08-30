/**
 * Created by AaronTsang on 2016/8/16.
 */

var clickState = 0;
function insertAfter(newElement,targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement) {
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}

function setLocation_waiting(offsetHeight,boxId){
    var seeHeight = document.body.clientHeight; //这里需要兼容性检查
    var seeWidth = document.documentElement.clientWidth;
    var waitingLocationH = (seeHeight-offsetHeight)/2;
    var waitingLocationW  = (seeWidth-offsetHeight-50)/2;
    var waitingBox = document.getElementById(boxId);
    waitingBox.style.top = waitingLocationH + "px";
    waitingBox.style.left = waitingLocationW +"px";
    // waitingBox.style.margin = "auto";
}

//function removeUlChild(){
//	var removeTarget = document.querySelector("#wrapper ul");
//	var allLi = removeTarget.getElementsByTagName("li");
//	removeTarget.removeChild(allLi);
//}
var removeUlChild = {                                      
		removeTarget:document.querySelector("#wrapper ul"),
		allLi:document.querySelector("#wrapper ul").children,
		toRomve:function(){
			this.removeTarget.remove(this.allLi)
		}
}
function test(val){
    if(val==0){
        alert("调到广鹏");
    }else{
        alert("跳到删除");
    }
}
var moreBut = {
		wrapper_white:document.querySelector(".wrapper-white"),
        wrapper_button:document.querySelector(".wrapper-white button"),
        item_card:document.querySelectorAll(".item-card"),
		box_more:document.querySelector(".more-box"),
		bodyTarget:document.querySelector("body"),
		createWrapper:function(){
			var that = this;
			this.wrapper_white.onclick=function(){
				 toggleClass(that.wrapper_white,"gone");
                 toggleClass(that.box_more.children[3],"hamburger-gone");
				 toggleClass(that.box_more.children[0],"but-big-scale");
	        	 toggleClass(that.box_more.children[1],"but-big-scale");
	        	 toggleClass(that.box_more.children[2],"but-big-scale");
			}
		},
        showBut:function(){
        	var that = this;
        	this.box_more.children[3].onclick=function(){
                toggleClass(that.wrapper_white,"gone");
        		that.createWrapper();
                toggleClass(that.box_more.children[3],"hamburger-gone");
        		toggleClass(that.box_more.children[0],"but-big-scale");
        		toggleClass(that.box_more.children[1],"but-big-scale");
        		toggleClass(that.box_more.children[2],"but-big-scale");
        	}
        },
        pickCard:function (funTag) {
            toggleClass(this.wrapper_white,"wrapper-white-operate");
            this.wrapper_white.querySelector("span").innerText = "选择项目以操作";
            toggleClass(this.wrapper_white.querySelector("button"),"gone");

            for(var a=0;a<this.item_card.length;a++){
                toggleClass(this.item_card[a],"item-card-waiting");
            }
            clickState = 1;
            for(var i=0;i<this.box_more.childElementCount;i++){
                if(i==funTag||i==3) continue;
                toggleClass(this.box_more.children[i],"but-big-scale");
            }
        },
        cansel:function(butTag){
            console.log("nihao")
            toggleClass(this.wrapper_white,"gone");
            toggleClass(this.wrapper_white,"wrapper-white-operate");
            for(var ab=0;ab<this.item_card.length;ab++){
                toggleClass(this.item_card[ab],"item-card-waiting");
            }
            toggleClass(this.box_more.children[3],"hamburger-gone");
            toggleClass(this.box_more.children[butTag],"but-big-scale");

        },
		init:function(){
            var that = this;
			this.showBut();
            // this.box_more.children[3].onclick=this.pickCard(3);
            this.box_more.children[0].onclick=function () {
                that.pickCard(0);
                that.wrapper_button.onclick = function(){
                    that.cansel(0);
                }
            }
            /*that.wrapper_white.querySelector("button").onclick=function(){
                that.cansel();
            }*/

		}
}
function Creat_tr(item,info,spec_flag){
    var tr = document.createElement("tr");
    var td_item = document.createElement("td");
    var td_info = document.createElement("td");
    
    td_item.innerText = item;
    td_info.innerText = info;
    if(item =="是否发布" && info == 1){
        tr.className = "success";
        td_info.innerText = "是";
    };
    if(item =="是否发布" && info == 0){
        td_info.innerText = "否"
    }
    tr.appendChild(td_item);
    if(spec_flag){
    	var div_spec = document.createElement("div");
//        div_spec.className = "td-spec";
    	td_item.className = "td-spec-title";
        td_info.className = "td-spec";
        td_info.innerText = info;
//        div_spec.innerHTML = "猜测测试测试猜测测试猜测测试测试猜测测试猜测测试测试猜测测试猜测测试测试猜测测试猜测测试测试猜测测试猜测测试测试猜测测试";
//        td_info.appendChild(div_spec);
    	tr.appendChild(td_info);
    }else{
    	tr.appendChild(td_info);
    }
    return tr;
}

function Creat_card(item_json){
    var li = document.createElement("li");
    li.className = "col-lg-4 col-md-4 col-sm-6 col-xs-12 item-card-box";
    li.setAttribute("project_id",item_json.flag);
    var item_card = document.createElement("div");
    item_card.className = "item-card";

    var item_card_title_pic = document.createElement("div");
    item_card_title_pic.className = "item-card-title_pic";
    var item_card_title = document.createElement("div");
    item_card_title.className = "item-card-title";
    item_card_title.innerText = item_json.projectName;
    var item_card_title_black = document.createElement("div");
    item_card_title_black.className = "item-card-title_black";
    item_card_title_pic.appendChild(item_card_title);
    item_card_title_pic.appendChild(item_card_title_black);

    var item_card_content = document.createElement("div");
    item_card_content.className = "item-card-content";
    var card_table = document.createElement("table");
    card_table.className = "table";
    var tbody = document.createElement("tbody");
    card_table.appendChild(tbody);
    item_card_content.appendChild(card_table);
    var ChineseKey = ["余额","是否发布","项目介绍","创建人","创建时间","总额"];
    var count = 0;
    var lots_key = false;
    for(var key in item_json){
        if(key == "id" || key == "projectName"){
            continue;
        }
        if(count == 2){
        	lots_key = true;
        }else{
        	lots_key = false;
        }
        var get_tr = Creat_tr(ChineseKey[count],item_json[key],lots_key);
        tbody.appendChild(get_tr);
        count++;
    }
    
    /*li.onclick = function() {
		// window.location.href = "accountDetailes.jsp?" + "projectId="
		// 		+ item_json.id;
        alert("跳到广鹏编辑界面");
	}*/
    item_card_content.onclick = function(){
        test(clickState);
    };
    if(item_json.flag == 1){
        var qrcoder = document.createElement("div");
        qrcoder.className = "qrcoder";
        item_card_title_pic.appendChild(qrcoder);
        qrcoder.onclick = function () {
            window.location.href = "qrCore.jsp?" + "projectId=" + item_json.id;
        }
    }
     
    item_card.appendChild(item_card_title_pic);
    item_card.appendChild(item_card_content);
    li.appendChild(item_card);
    return li;
}

function render(datas){
  var target = document.querySelector("#wrapper ul");
  for(var i = 0;i<datas.length;i++){
      var get_card = Creat_card(datas[i]);
      target.appendChild(get_card);
  }
  setPullStatus(datas.length);

}

function setPullStatus(length) {
    var loadStatusUp = document.getElementsByClassName("pullUpLabel");
    var loadStatusDown = document.getElementsByClassName("pullDownLabel");
    if(length==3){
        loadStatusUp[0].innerHTML = "上拉加载更多";
        loadStatusDown[0].innerHTML = "下拉更新";
    }else {
    	 loadStatusUp[0].innerHTML = "已没有更多数据";
    }
}
function Refresh() {
        alert("刷新！");
        wrapper.refresh();/****remember to refresh after  action completed！ ---yourId.refresh(); ----| ****/
}

function Load() {
//        let target = document.querySelector("#wrapper ul");
//        for(let i =0;i<datas.length;i++){
//            let get_card = Creat_card(datas[i]);
//            target.appendChild(get_card);
//        }
//        setPullStatus(datas.length);
	    getJson(generatedCount);
        // wrapper.refresh();
}


var generatedCount = 1;

//以下为入口
$(function() {
    refresher.init({
        id: "wrapper",
        pullDownAction: Refresh,
        pullUpAction: Load
    });
    setLocation_waiting(0,"index-waiting-animition");
    Load(generatedCount);
    moreBut.init();
});
function getJson(page) {
//    var waitingBox = document.querySelector("#index-waiting-animition div");
	var waitingBox = document.getElementById("loaderStart");
    $.ajax({
    	// async:false,
         //  url : 'getProjectJson',
      url:'js/itemsList/testJson.json',
        type : 'post',
        data : {
            'pageIndex' :page,
            'pageSize' : 3,
            'actionFlag':1
        },
        dataType : 'json',
        beforeSend : function() {
                waitingBox.style.display = "block";
        },
        complete : function() {               //仅用于测试
            setTimeout(function () {
                waitingBox.style.display = "none";
            })

        },
        success : function(data) {
        	 /*var json_String = eval(data);
        	 var json_way = $.parseJSON(json_String);*/
                render(data);
                wrapper.refresh();
                generatedCount++;
        }
    });
}


//翻转卡片获取QR Coder图片
// function getQRCoder(){
//     var qrcoder = document.getElementById("qrcoder");
//     var item_card_content = document.getElementsByClassName("item-card-content");
//     qrcoder.onclick = function () {
//         alert("dianle");
//     }
// }
// window.onload=function () {
//     getQRCoder();
// }