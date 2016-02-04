/**
 * Created by zenghong on 16/1/5.
 */
angular.module('agilisales')
  .controller('PunchCtrl', ['$scope', '$rootScope', '$state', 'PunchService', function ($scope, $rootScope, $state, PunchService) {
    $scope.todayPunch = {};
    $scope.getTodayPunch = function () {
      PunchService.getTodayPunch().then(function (data) {
        console.log(data);
        if (data.err) {
          return;
        }
        $scope.todayPunch = data;

      }, function (data) {
        console.log(data);
      });
    };

    $scope.getTodayPunch();

    $scope.goDetail = function () {
      $state.go('menu.punch_detail');
    };

    $scope.goDashboard = function () {
      $state.go('menu.dashboard_multi');
    };

    $scope.showPhotoPanel = function () {
      $rootScope.$broadcast('show.photoPanel');
    };

  }]);
