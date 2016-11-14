require('angular-ui-router');

module.exports = 'app-router';

require('angular').module("app-router", [require('./views/blog/machine'), 'ui.router'])
		.config(config);

config.$inject = ['$stateProvider',
		'$urlRouterProvider' ];


function config($stateProvider, $urlRouterProvider) {
	var navbar = {
			templateUrl: "resources/views/navbar.html",
			controller: "navbar",
			controllerAs: "navbar"
	}

	$urlRouterProvider.otherwise("/machine");

	//require('./views/datatables/datatable-view');
	$stateProvider.state('datatables', {
		url : "/datatables",
		views: {
			"navbar": navbar,
			"main": {
				templateUrl : "resources/views/datatables/datatable-view.html",
				controller : "datatable-view",
				controllerAs : "showCase",
			}
		}
	});
	
	$stateProvider.state('machineLogo', {
		url: "/machine",
		views: {
			"navbar": navbar,
			"main": {
				templateUrl: "resources/views/blog/machine.html",
				controller: 'machine',
				controllerAs: 'machine'
			}
		}
	});
	
	//require('./views/promise-test');
	$stateProvider.state('promise-test', {
		url: "/promise-test",
		views: {
			"navbar": navbar,
			"main": {
				templateUrl: "resources/views/promise-test.html",
				controller: 'promise-test',
				controllerAs: 'promiseTest'
			}
		}
	});
	
	//require('./views/textarea/textarea');
	$stateProvider.state('textarea', {
		url: "/textarea",
		views: {
			"navbar": navbar,
			"main": {
				templateUrl: "resources/views/textarea/textarea.html",
				controller: 'textareaController'
			}
		}
	});
}


