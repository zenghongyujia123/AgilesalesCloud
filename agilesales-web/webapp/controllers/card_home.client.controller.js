/**
 * Created by zenghong on 16/1/15.
 */
angular.module('agilesales-web').controller('CardHomeCtrl', ['$scope', '$state', function ($scope, $state) {
  $scope.cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  $scope.goEdit = function () {
    $state.go('card_edit');
  }
}]);