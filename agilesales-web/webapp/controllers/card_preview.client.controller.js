/**
 * Created by zenghong on 16/1/15.
 */
angular.module('agilesales-web').controller('CardPreviewCtrl', ['$scope', '$rootScope', '$state', '$stateParams', 'AuthService', function ($scope, $rootScope, $state, $stateParams, AuthService) {
  $scope.location = window.location;
  $scope.card = {};
  $scope.paper = {};

  if ($stateParams.card_id) {
    $scope.card = AuthService.getCardTemplateById($stateParams.card_id);
    if ($stateParams.paper_id) {
      $scope.paper = AuthService.getPaperById($stateParams.card_id, $stateParams.paper_id);
    }
    console.log($scope.card);
  }
}]);