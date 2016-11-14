var angular = require('angular');

define(['angular', 'angularDatatables', 'libs/chance', 'jquery', 'js/title-factory', 'ui-bootstrap'], function(angular, $) {
	angular.module("datatable-view", [ 'datatables', 'title-factory', 'ui.bootstrap']).controller('datatable-view',
			BindAngularDirectiveCtrl);
	BindAngularDirectiveCtrl.$inject = [ '$scope', '$compile', '$log', '$uibModal', '$timeout', 'DTOptionsBuilder', 'DTColumnBuilder', 'titleFactory' ];
	function BindAngularDirectiveCtrl($scope, $compile, $log, $modal, $timeout, DTOptionsBuilder, DTColumnBuilder, titleFactory) {
		titleFactory.setTitle("Datatables!");
		
		var vm = this;
		var generatedData = [];
		vm.addColumn = addColumn;
		vm.dtInstance = {};
		vm.data = [];
		vm.edit = edit;
		vm.getRow = getRow;
		vm.showTable = true;
		vm.message = '';
		vm.remove = deleteRow;
		vm.dtOptions = DTOptionsBuilder.fromFnPromise(getData)
				.withPaginationType('full_numbers').withOption('createdRow',
						createdRow) // Key step ... must compile for Angular to
				// see these rows
				.withOption('deferRender', true)
				.withDisplayLength(10);
		// compiling rows that are
		// not yet rendered
		vm.dtColumns = [
				DTColumnBuilder.newColumn('id').withTitle('ID'),
				DTColumnBuilder.newColumn('firstName').withTitle('First name'),
				DTColumnBuilder.newColumn('lastName').withTitle('Last name'),
				DTColumnBuilder.newColumn(null).withTitle('Actions')
						.notSortable().renderWith(actionsHtml) ];

		init();
		
		function edit(person) {			
			return $modal.open({
		      animation: true,
		      template: 'You are trying to edit the row: <pre>{{modal.person|json}}</pre>',
		      controller: ['person', function(person){
		    	  this.person = person;
		      }],
		      controllerAs: 'modal',
		      resolve: {
		        person: function () {
		          return person;
		        }
		      }
		    });
		}
		function deleteRow(person) {
			return $modal.open({
			      animation: true,
			      template: 'You are trying to remove the row:<pre>{{modal.person|json}}</pre>',
			      controller: ['person', function(person){
			    	  this.person = person;
			      }],
			      controllerAs: 'modal',
			      resolve: {
			        person: function () {
			          return person;
			        }
			      }
			    });
		}
		function createdRow(row, data, dataIndex) {
			$timeout(function() {
				//$log.debug('Row ' + dataIndex + ' loaded');
				vm.data[dataIndex] = data; //Only adding data to the model as needed
				// Recompiling so we can bind Angular directive to the DT
				$compile(angular.element(row).contents())($scope);
			});
		}
		function actionsHtml(data, type, full, meta) {
			var row = meta.row;
			return '<button class="btn btn-warning" ng-click="showCase.edit(showCase.data['
					+ row
					+ '])">'
					+ '   <i class="fa fa-edit"></i>'
					+ '</button>&nbsp;'
					+ '<button class="btn btn-danger" ng-click="showCase.remove(showCase.data['
					+ row
					+ '])" )"="">'
					+ '   <i class="fa fa-trash-o"></i>' + '</button>';
		}
		
		function getRow(row){
			$log.debug("row " + row + " checked");
			return row;
		}
		
		function addColumn(){
			vm.showTable = false;
			$timeout(function(){				
				vm.dtColumns.splice(3, 0, DTColumnBuilder.newColumn('age').withTitle('Age'));
				vm.showTable = true;
			});
		}

		function getData() {
			return $timeout(function() {
				return generatedData;
			}, 1000);
		}
		
		function init(){
			for (var index = 0; index < 50000; index++) {
				generatedData.push({
					id : index + 1,
					firstName : chance.first(),
					lastName : chance.last(),
					age: chance.age()
				});
			}			
		}
	}
});
