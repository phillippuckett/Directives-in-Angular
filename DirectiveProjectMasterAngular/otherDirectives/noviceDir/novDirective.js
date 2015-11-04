angular.module('directivePractice')
.directive('novDirective', function () {
	return {
		templateUrl: '/otherDirectives/noviceDir/novTmpl.html',
		scope: {
			friend: "=",
			food: "@",
			killFriend: "&"
		},
		controller: function($scope) {

		}
	}
})