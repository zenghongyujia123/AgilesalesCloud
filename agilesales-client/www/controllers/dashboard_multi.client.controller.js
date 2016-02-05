/**
 * Created by zenghong on 16/1/5.
 */
angular.module('agilisales')
  .controller('DashboardMultiCtrl', ['$scope', '$rootScope', '$state', '$stateParams', 'DashboardService',
    function ($scope, $rootScope, $state, $stateParams, DashboardService) {
      var type = $stateParams.type;

      $scope.getDashboard = function (type) {
        DashboardService.getRange(type, {}).then(function (data) {
          console.log(data);
        }, function (data) {
          console.log(data);
        });
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
