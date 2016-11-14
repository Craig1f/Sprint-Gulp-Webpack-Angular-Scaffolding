define(['angular'], function(angular) {
	angular.module("navbar", []).controller('textareaController',
			model);
	model.$inject = ['$scope', '$log'];
	function model($scope, $log, $window) {
		$scope.description = 'default value';
	}
});
