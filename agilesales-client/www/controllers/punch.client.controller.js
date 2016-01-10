/**
 * Created by zenghong on 16/1/5.
 */
angular.module('agilisales')
  .controller('PunchCtrl', ['$scope', '$rootScope', '$state', function ($scope, $rootScope, $state) {
    $scope.goDetail = function () {
      $state.go('menu.punch_detail');
    };

    $scope.goSubmit = function () {
      $state.go('menu.punch_submit');
    };

    $scope.showPhotoPanel = function () {
      $rootScope.$broadcast('show.photoPanel');
    };
  }]);
