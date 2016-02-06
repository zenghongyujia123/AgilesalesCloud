/**
 * Created by zenghong on 16/1/5.
 */
angular.module('agilisales')
  .controller('DashboardMultiCtrl', ['$scope', '$rootScope', '$state', '$stateParams', 'DashboardService', 'AuthService',
    function ($scope, $rootScope, $state, $stateParams, DashboardService, AuthService) {
      $scope.type = $stateParams.type;
      $scope.sortItems = [];
      $scope.user = AuthService.getUser();
      $scope.getDashboard = function () {
        DashboardService.getRange(true, $scope.type, {}).then(function (data) {
          if (!data.err) {
            $scope.setItemText(data)
          }
          console.log(data);
        }, function (data) {
          console.log(data);
        });
      };

      $scope.getItemWidth = function (item, index) {
        if (index === 0) {
          return '100%';
        }
        return parseInt(item.sort_value / $scope.sortItems[0].sort_value * 100) + '%';
      };

      $scope.setItemText = function (items) {
        switch ($scope.type) {
          case 'dutytime':
            $scope.setDutyText(items);
            break;
        }
      };

      $scope.setDutyText = function (datas) {
        datas.forEach(function (data) {
          var hourDiff = data.duty_time / (1000 * 60 * 60);

          var hour = parseInt(hourDiff);
          var minuite = parseInt((hourDiff - hour) * 60);
          hour = hour + '小时' + minuite + '分';
          data.sort_text = (data.user_info.name || '未知姓名') + ' ' + hour;
        });
        $scope.sortItems = datas;
      };

      $scope.getDashboard();

      $scope.showFiltrate = function () {
        $rootScope.$broadcast('show.filtratePanel');
      };

      $scope.showSelectPeople = function () {
        $rootScope.$broadcast('show.peopleSelectPanel');
      };

      //$scope.goSingle = function () {
      //  $rootScope.$broadcast('show.peopleSelectPanel');
      //  //$state.go('menu.dashboard_single');
      //};

      $scope.goSingle = function (user_id) {
        $state.go('menu.dashboard_single', {type: $scope.type, user_id: user_id})
      }
    }]);
