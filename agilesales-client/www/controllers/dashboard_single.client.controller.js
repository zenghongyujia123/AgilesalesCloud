/**
 * Created by zenghong on 16/1/5.
 */
angular.module('agilisales')
  .controller('DashboardSingleCtrl', ['$scope', '$rootScope', '$state', '$stateParams', 'DashboardService',
    function ($scope, $rootScope, $state, $stateParams, DashboardService) {
      $scope.type = $stateParams.type;
      $scope.user_id = $stateParams.user_id;
      $scope.sortItems = [];
      DashboardService.getRange(false, $scope.type, {user_id: $scope.user_id}).then(function (data) {
        if (!data.err) {
          $scope.setItemText(data)
        }
        console.log(data);
      }, function (data) {
        console.log(data);
      });

      $scope.setItemText = function (items) {
        switch ($scope.type) {
          case 'dutytime':
            $scope.setDutyItemText(items);
            break;
        }
      };

      $scope.setDutyItemText = function (items) {
        items.forEach(function (item) {
          item.sort_text = item.date + ' ' + item.onduty.done_time_format + ' - ' + (item.offduty.done_time_format||'未知');
        });
        $scope.sortItems = items;
      };

      $scope.showFiltrate = function () {
        $rootScope.$broadcast('show.filtratePanel');
      };
    }]);
