/*Usage:
 * is-scrolled: binds to true when the scroll point is reached. Otherwise false
 * scroll-edge: default: top. Set to bottom if you want to bind to the bottom of the element.
 * scroll-offset: default: 0. attribute to set an offset for the scroll point. Negative to move up the page, positive down. Can work with scroll-edge: bottom if desired.
 */

require('angular').module('craigScroll', []).directive('craigScrollSpy', scrollSpy);
module.exports = 'craigScroll';
scrollSpy.$inject = [ '$log', '$timeout', '$window'];
function scrollSpy($log, $timeout, $window) {
	return {
		restrict : "A",
		scope : {
			"isScrolled" : '='
		},
		link : function(scope, el, att) {
			return;
			var edge = "bottom";
			var offset = parseInt(att.scrollOffset || 0);
			if (att.scrollEdge == "top"){
				edge = "top";
			}
											
			angular.element($window).bind("scroll", function() {
				var rect = el[0].getBoundingClientRect();
				//$log.debug(rect[edge] + " + " + offset);
				if (rect[edge] + offset < 0) {
					$timeout(function(){
						scope.isScrolled = true
					})
				} else {
					$timeout(function(){
						scope.isScrolled = false
						
					})
				}
			});
		}
	}
}