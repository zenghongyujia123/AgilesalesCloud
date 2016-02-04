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

    $scope.clickOnduty = function () {
      var info = {
        callback: function (info) {
          console.log(info);
        }
      };
      if ($scope.todayPunch.onduty.is_done) {
        info.title = '查看';
        info.sub_title = '上班打卡信息';
        info.is_browser = true;
      }
      else {
        info.title = '上班打卡拍照';
        info.sub_title = '上班打卡照片';
        info.is_browser = false;
      }

      $rootScope.$broadcast('show.photoPanel', info);
    };

    $scope.clickOffduty = function () {
      if ($scope.todayPunch.offduty.is_done) {

      }
      else {
      }
      $rootScope.$broadcast('show.photoPanel');
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
