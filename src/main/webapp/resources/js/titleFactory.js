require('angular-ui-router');
require('angular').module('titleFactory', ['ui.router'])
.factory('titleFactory', factory);

factory.$inject = ['$state'];
function factory($state){
	var DEFAULT_TITLE = 'Test App';
	var currentTitle = DEFAULT_TITLE;
	var currentState = $state.$current.name;

	return {
		getTitle: getTitle,
		setTitle: setTitle	
	}
	
	function getTitle(){
		if (currentState != $state.$current.name){
			setTitle(DEFAULT_TITLE);
		}
		
		return currentTitle;		
	}
	
	function setTitle(newTitle){
		currentTitle = newTitle;
		currentState = $state.$current.name;
	} 
}

module.exports = 'titleFactory';