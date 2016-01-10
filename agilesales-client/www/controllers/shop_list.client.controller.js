/**
 * Created by zenghong on 16/1/6.
 */
angular.module('agilisales')
  .controller('ShopListCtrl', ['$scope', '$rootScope', '$state', function ($scope, $rootScope, $state) {
    $scope.goShopCreate = function () {
      $rootScope.$broadcast('show.shopCreatePanel');
    }
  }]);
