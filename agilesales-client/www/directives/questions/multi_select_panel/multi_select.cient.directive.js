/**
 * Created by zenghong on 15/12/27.
 */
angular.module('agilisales').directive('agMultiSelectPanel', [function () {
  return {
    restrict: 'AE',
    templateUrl: 'directives/questions/multi_select_panel/multi_select.client.view.html',
    replace: true,
    scope: {},
    controller: function ($scope, $element) {
      $scope.show = function () {
        $element.addClass('show');
      };

      $scope.hide = function () {
        $element.removeClass('show');
      };

      $scope.$on('show.multiSelectPanel', function () {
        $scope.show();
      });
    }
  };
}]);
