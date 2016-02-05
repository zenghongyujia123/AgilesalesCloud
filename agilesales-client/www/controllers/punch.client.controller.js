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

    $scope.punch = function (type, photo) {
      PunchService.punch(type, photo).then(function (data) {
        if (!data.err) {
          $scope.todayPunch = data;
        }
        console.log(data);
      }, function (data) {
        console.log(data);
      });
    };

    $scope.clickOnduty = function () {
      var info = {};
      if ($scope.todayPunch.onduty.is_done) {
        info.title = '查看';
        info.sub_title = '上班打卡:' + $scope.todayPunch.offduty.done_time_format;
        info.is_browser = true;
        info.submit_text = '确认';
        info.photos = [{value: $scope.todayPunch.onduty.photo}]
      }
      else {
        info.title = '上班打卡拍照';
        info.sub_title = '上班打卡照片';
        info.is_browser = false;
        info.submit_text = '提交';
        info.number = 1;
        info.photos = [];
        info.callback = function (info) {
          $scope.punch('onduty', info.photos[0].value);
        }
      }
      $rootScope.$broadcast('show.photoPanel', info);
    };

    $scope.clickOffduty = function () {
      var info = {};
      if ($scope.todayPunch.offduty.is_done) {
        info.title = '查看';
        info.sub_title = '下班打卡:' + $scope.todayPunch.offduty.done_time_format;
        info.submit_text = '确认';
        info.is_browser = true;
        info.photos = [{value: $scope.todayPunch.offduty.photo}]
      }
      else {
        info.title = '下班打卡拍照';
        info.sub_title = '下班打卡';
        info.submit_text = '提交';
        info.is_browser = false;
        info.number = 1;
        info.photos = [];
        info.callback = function (info) {
          $scope.punch('offduty', info.photos[0].value);
        }
      }
      $rootScope.$broadcast('show.photoPanel', info);
    };

    $scope.getTodayPunch();

    $scope.goDetail = function () {
      $state.go('menu.punch_detail');
    };

    $scope.goDashboard = function () {
      $state.go('menu.dashboard_multi', {type: 'multi_dutytime'});
    };

    $scope.showPhotoPanel = function () {
      $rootScope.$broadcast('show.photoPanel');
    };

  }]);
