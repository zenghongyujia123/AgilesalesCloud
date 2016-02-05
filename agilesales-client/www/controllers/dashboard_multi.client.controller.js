/**
 * Created by zenghong on 16/1/5.
 */
angular.module('agilisales')
  .controller('DashboardMultiCtrl', ['$scope', '$rootScope', '$state', '$stateParams', 'DashboardService',
    function ($scope, $rootScope, $state, $stateParams, DashboardService) {
      var type = $stateParams.type;
      $scope.sortItems = [];
      $scope.getDashboard = function (type) {
        DashboardService.getRange(type, {}).then(function (data) {
          if (!data.err) {
            $scope.setItemText(type, data)
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

      $scope.setItemText = function (type, items) {
        switch (type) {
          case 'multi_dutytime':
            $scope.setMultiDutyText(items);
            break;
        }
      };

      $scope.setMultiDutyText = function (datas) {
        datas.forEach(function (data) {
          var hourDiff = data.duty_time / (1000 * 60 * 60);

          var hour = parseInt(hourDiff);
          var minuite = parseInt((hourDiff - hour) * 60);
          hour = hour + '小时' + minuite + '分';
          data.sort_text = (data.user_info.name || '未知姓名') + ' ' + hour;
        });
        $scope.sortItems = datas;
      };

      $scope.getDashboard(type);

      $scope.showFiltrate = function () {
        $rootScope.$broadcast('show.filtratePanel');
      };

      $scope.goSingle = function () {
        $rootScope.$broadcast('show.peopleSelectPanel');
        //$state.go('menu.dashboard_single');
      }
    }]);
