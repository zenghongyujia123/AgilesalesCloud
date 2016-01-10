/**
 * Created by zenghong on 15/12/27.
 */
angular.module('agilisales').directive('agFiltratePanel', [function () {
  return {
    restrict: 'AE',
    templateUrl: 'directives/filtrate_panel/filtrate.client.view.html',
    replace: true,
    scope: {},
    controller: function ($scope, $element) {
      $scope.show = function () {
        $element.addClass('show');
      };

      $scope.hide = function () {
        $element.removeClass('show');
      };

      $scope.$on('show.filtratePanel', function () {
        $scope.show();
      });
    }
  };
}]);
