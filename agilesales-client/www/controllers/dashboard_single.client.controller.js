/**
 * Created by zenghong on 16/1/5.
 */
angular.module('agilisales')
  .controller('DashboardSingleCtrl', ['$scope', '$rootScope', '$state', '$stateParams', 'DashboardService',
    function ($scope, $rootScope, $state, $stateParams, DashboardService) {
      $scope.type = $stateParams.type;
      $scope.user_id = $stateParams.user_id;

      DashboardService.getRange(false,$scope.type, {user_id: $scope.user_id}).then(function (data) {
        console.log(data);
      }, function (data) {
        console.log(data);
      });


      $scope.showFiltrate = function () {
        $rootScope.$broadcast('show.filtratePanel');
      };
    }]);
