/**
 * Created by zenghong on 16/1/5.
 */
angular.module('agilisales')
  .controller('DashboardMultiCtrl', ['$scope', '$rootScope', '$state', function ($scope, $rootScope, $state) {
    $scope.showFiltrate = function () {
      $rootScope.$broadcast('show.filtratePanel');
    };
    $scope.goSingle = function () {
      $state.go('menu.dashboard_single');
    }
  }]);
