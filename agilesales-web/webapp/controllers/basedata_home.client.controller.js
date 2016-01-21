/**
 * Created by zenghong on 16/1/15.
 */
angular.module('agilesales-web').controller('BasedataHomeCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
  $scope.showUpload = function () {
    $rootScope.$broadcast('show.importAreas');

  };

  $scope.location = window.location;
  $scope.isMenuClose = false;
  $scope.toggleMenu = function () {
    $scope.isMenuClose = !$scope.isMenuClose;
  }
}]);