<!DOCTYPE html>

<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>

<html ng-app='app'>
<head>
<meta charset="utf-8">
<!-- <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
<link href="https://cdn.datatables.net/1.10.10/css/jquery.dataTables.min.css" rel="stylesheet">
<link href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.1/animate.min.css' rel='stylesheet'>
<link href='resources/css/main.css' rel='stylesheet'> -->
<!-- <title ng-controller='titleModel as title' ng-bind='title.getTitle()'>loading...</title> -->
</head>
<body>	
	<app-main></app-main>
	<div ui-view='navbar'></div>
	<div style='position: relative'>
		<div ui-view='main'></div>
	</div>
</body>

<script src='resources/build/common.bundle.js'></script>
<script src='resources/build/app.bundle.js'></script>
</html>
