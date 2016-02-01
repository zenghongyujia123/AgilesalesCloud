/**
 * Created by zenghong on 16/1/15.
 */
angular.module('agilesales-web').controller('CardConfigCtrl', ['$scope', '$rootScope', '$state', '$stateParams', 'AuthService',function ($scope, $rootScope, $state, $stateParams,AuthService) {
  $scope.location = window.location;
  $scope.card = {};
  if ($stateParams.card_id) {
    $scope.card = AuthService.getCardTemplateById($stateParams.card_id);
    console.log($scope.card);
  }

}]);