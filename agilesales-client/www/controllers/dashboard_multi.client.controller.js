/**
 * Created by zenghong on 16/1/5.
 */
angular.module('agilisales')
  .controller('DashboardMultiCtrl', ['$scope', '$rootScope', '$state', function ($scope, $rootScope, $state) {
    $scope.goSingle = function(){
      $state.go('menu.dashboard_single');
    }
  }]);
