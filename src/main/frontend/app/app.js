var angular = require('angular');
var templateUrl = require('./app-main.html');
import './main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import 'font-awesome/css/font-awesome.min.css';

(function(){	
	angular.module('app', [])
	.component('appMain', {
		templateUrl: templateUrl,
		controller: controller
	})
	
	controller.$inject = ['$timeout'];
	function controller($timeout){
		var vm = this;
		vm.message = 'loading...';
		$timeout(()=>vm.message = 'Hello Galaxy', 500);
	}
})(); 