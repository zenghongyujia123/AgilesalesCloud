/**
 * Created by zenghong on 16/1/6.
 */
angular.module('agilisales')
  .controller('DailyListCtrl', ['$scope', '$rootScope', '$state', function ($scope, $rootScope, $state) {
    $scope.info = {
      curIndex: 0
    };
    $scope.slideHasChanged = function (index) {
      $scope.info.curIndex = index;
    };

    $scope.showPage = function (index) {
      $scope.info.curIndex = index;
    };

    $scope.showDailyCreate = function () {
      $rootScope.$broadcast('show.dailyCreatePanel');
    };

    $scope.showPeopleSelectPanel = function () {
      $rootScope.$broadcast('show.peopleSelectPanel');
    };
  }]);
