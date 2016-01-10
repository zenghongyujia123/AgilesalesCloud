/**
 * Created by zenghong on 15/12/29.
 */
angular.module('agilisales')
  .controller('NearbyShopListCtrl', ['$scope', '$state', '$rootScope', function ($scope, $state, $rootScope) {
    $scope.showShopPanel = function () {
      $rootScope.$broadcast('show.shopCreatePanel');
    };

    $scope.showMapPanel = function () {
      $rootScope.$broadcast('show.mapPanel');
    };
  }]);
