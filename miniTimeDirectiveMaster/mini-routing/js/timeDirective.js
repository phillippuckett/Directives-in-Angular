angular.module('timeApp').directive('showTime', function() {
	return {
		restrict: 'E',
		template: '<div> The current time is {{time}}</div>',
		link: function (theScope, theElem, theAtts) {
			//"link" always has those three properties (tri-force), spelling doesn't matter, just remember scope, elem, atts.
			theScope.time = new Date ().toString();
		}
	};
	
})