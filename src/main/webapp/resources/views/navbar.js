require('../js/craigScroll');
require('angular-ui-router');

require('angular').module("navbar", [ 'craigScroll', 'ui.router']).controller('navbar',
		model);
model.$inject = ['$scope', '$log', '$window'];

function model($scope, $log, $window) {
	var vm = this;
	vm.scrollValue = false;
}

module.exports = 'navbar';
