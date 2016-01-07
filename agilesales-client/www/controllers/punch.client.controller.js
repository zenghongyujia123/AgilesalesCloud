/**
 * Created by zenghong on 16/1/5.
 */
angular.module('agilisales')
  .controller('PunchCtrl', ['$scope', '$state', function ($scope, $state) {
    $scope.goDetail = function () {
      $state.go('menu.punch_detail');
    };

    $scope.goSubmit = function () {
      $state.go('menu.punch_submit');
    }
  }]);
