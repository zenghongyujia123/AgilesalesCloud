/**
 * Created by zenghong on 16/1/6.
 */
angular.module('agilisales')
  .controller('DailyListCtrl', ['$scope', '$state', function ($scope, $state) {
    $scope.info = {
      curIndex: 0
    };
    $scope.slideHasChanged = function (index) {
      $scope.info.curIndex = index;
    };

    $scope.showPage = function (index) {
      $scope.info.curIndex = index;
    };
  }]);
