define(['angular'], function(angular) {
	angular.module("promise-test", []).controller('promise-test',
			model);
	model.$inject = ['$log', '$q', '$timeout'];
	function model($log, $q, $timeout) {
		var vm = this;
		vm.begin = begin;
		
		function begin(){
			return setState(0)
			.then(function(){
				vm.step1 = vm.step1 || 'resolve';
				switch(vm.step1){
				case 'resolve':
					return 'resolve';
				case 'reject':
					return $q.reject('reject');
				case 'throw': 
					throw 'throw';
				}
			}).then(function(value){
				$log.debug('resolve: ' + value)
			}, function(err){
				$log.debug('reject: ' + err)
				return $q.reject(err);
			})
			.then(function(){
				$log.debug('half-second wait')
				return $timeout(function(){
				}, 500);
			});
		}
		
		function reset(){
			setState(-1);	
			delete vm.btn2;
			delete vm.btn3;
		}
		
		function setState(newState){
			return $q(function(resolve){
				vm.state = newState;
				resolve();
			});
		}
		
	}
});
