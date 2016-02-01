/**
 * Created by zenghong on 16/1/15.
 */
angular.module('agilesales-web').controller('CardPreviewCtrl', ['$scope', '$rootScope', '$state', '$stateParams', function ($scope, $rootScope, $state, $stateParams) {
  $scope.location = window.location;
  $scope.card = {};
  if ($stateParams.card) {
    $scope.card = JSON.parse($stateParams.card);
    console.log($scope.card);
  }
}]);