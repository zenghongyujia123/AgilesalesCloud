/**
 * Created by zenghong on 15/12/27.
 */
angular.module('agilisales').directive('agPhotoSelectPanel', ['$cordovaCamera', '$rootScope',function ($cordovaCamera,$rootScope) {
  return {
    restrict: 'AE',
    templateUrl: 'directives/photo_panel/photo_select.client.view.html',
    replace: true,
    scope: {},
    controller: function ($scope, $element) {
      $scope.show = function () {
        $element.addClass('show');
      };

      $scope.hide = function () {
        $element.removeClass('show');
      };

      $scope.$on('show.photoSelectPanel', function () {
        $scope.show();
      });

      $scope.showMultiSelectPanel = function(){
        $rootScope.$broadcast('show.multiSelectPanel');
      }
    }
  };
}]);
