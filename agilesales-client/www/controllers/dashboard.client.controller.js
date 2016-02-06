/**
 * Created by zenghong on 15/12/29.
 */
angular.module('agilisales')
  .controller('DashboardCtrl', ['$scope', '$state', function ($scope, $state) {
    $scope.goMuti = function(){
      $state.go('menu.dashboard_multi',{type:'dutytime'});
    }
  }]);
