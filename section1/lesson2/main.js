var minmax = angular.module('minmax',[]);


minmax.controller('MinMaxCtrl', function($scope) {
  $scope.formModel = {};

  $scope.onSubmit = function() {
      console.log("hey submitted");
      console.log($scope.formModel );
  }

});
