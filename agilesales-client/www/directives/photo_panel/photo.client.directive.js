/**
 * Created by zenghong on 15/12/27.
 */
angular.module('agilisales').directive('agPhotoPanel', [function () {
  return {
    restrict: 'AE',
    templateUrl: 'directives/map_panel/map.client.view.html',
    replace: true,
    scope: {},
    controller: function ($scope, $element) {
      $scope.show = function () {
        $element.addClass('show');
      };

      $scope.hide = function () {
        $element.removeClass('show');
      };

      $scope.$on('show.photoPanel', function () {
        $scope.show();
      });
    }
  };
}]);
