(function(angular) {
  'use strict';
angular.module('docsIsolateScopeDirective', [])
  .controller('Controller', ['$scope', function($scope) {
    $scope.naomi = { name: 'Naomi', address: '1600 Amphitheatre' };
    $scope.igor = { name: 'Igor', address: '123 Somewhere' };
    $scope.phalp = { name: 'Phalp', address: '3338 CHC' };
    
    $scope.onClick = function(){
      $scope.phalp.address = "a good one"
    }
  }])
  .directive('myCustomer', function() {
    return {
      restrict: 'E',
      scope: {
        customerInfo: '=pizza',
        title: '@cTitle',
        clickFn: '&treatWhatTheyGiveMeLikeAnExpression'
      },
      templateUrl: 'my-customer-iso.html',
      link: function(scope, elem, attr){
        scope.clickFn();
      }
    };
  });
})(window.angular);