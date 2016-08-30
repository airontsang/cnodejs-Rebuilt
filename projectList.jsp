<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
    <title>itemsList</title>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/bootstrap/css/bootstrap.min.css" media="screen">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/itemsList/itemsList.css" media="screen">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/itemsList/font/itemsList-Font.css" media="screen">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/itemsList/reset.css" media="screen">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/itemsList/pullToRefresh.css" media="screen">
    <style type="text/css" media="all">
        li {
            /*border-bottom: 1px #CCC solid;*/
            text-align: center;
            
            line-height: 80px;
        }
    </style>
<title>Insert title here</title>
</head>
<body>
   <div class="index-waiting-animition" style="display: block; line-height: 40px;" id="index-waiting-animition">
    <div class="loader" style="display: none;" id="loaderStart">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
</div>
<div class="whole" id="wrapper">
    <ul class="clearfix">
    </ul>
</div>
<div class="header"></div>
<div class="more-box">
    <button class="button-all heighter-3">
       <span class="glyphicon glyphicon-trash"></span>
    </button>
    <button class="button-all heighter-2">
       <span class="glyphicon glyphicon-pencil"></span>
    </button>
    <button class="button-all heighter-1">
       <span class="glyphicon glyphicon-plus"></span>
    </button>
    <button class="button-all">
       <span class="glyphicon glyphicon-menu-hamburger"></span>
    </button>
</div>
<script src="${pageContext.request.contextPath}/js/itemsList/iscroll.js"></script>
<script src="${pageContext.request.contextPath}/js/itemsList/pullToRefresh_Aaron.js"></script>
<script src="http://libs.baidu.com/jquery/2.0.0/jquery.min.js"></script>
<script src="${pageContext.request.contextPath}/js/itemsList/toggleDomClass.js"></script>
<script src="${pageContext.request.contextPath}/js/itemsList/renderList.js"></script>
<script src="${pageContext.request.contextPath}/bootstrap/js/bootstrap.js"></script>
</body>
</html>