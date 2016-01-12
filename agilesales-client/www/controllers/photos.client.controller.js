/**
 * Created by zenghong on 16/1/6.
 */
angular.module('agilisales')
  .controller('PhotosCtrl', ['$scope', '$state', '$rootScope', function ($scope, $state, $rootScope) {
    $scope.showPhotoSelectPanel = function () {
      $rootScope.$broadcast('show.photoSelectPanel');
    }
  }]);

