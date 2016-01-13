/**
 * Created by zenghong on 15/12/27.
 */
angular.module('agilisales').directive('agPhotoDetailPanel', [function () {
  return {
    restrict: 'AE',
    templateUrl: 'directives/photo_panel/photo_detail.client.view.html',
    replace: true,
    scope: {},
    controller: function ($scope, $element) {
      $scope.show = function () {
        $element.addClass('show');
      };

      $scope.hide = function () {
        $element.removeClass('show');
      };

      $scope.$on('show.photoDetailPanel', function () {
        $scope.show();
      });
    }
  };
}]);
