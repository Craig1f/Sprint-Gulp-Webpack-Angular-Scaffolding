var angular = require('angular');
require('./app-router');
require('./views/navbar');
require('./js/titleFactory');
//window.$ = window.jQuery = require('jquery')
require('bootstrap');

angular.module('app', ['app-router', 'navbar', 'titleFactory'])
.controller('titleModel', titleController);

titleController.$inject = ['titleFactory'];
function titleController(titleFactory){
	this.getTitle = titleFactory.getTitle;
}