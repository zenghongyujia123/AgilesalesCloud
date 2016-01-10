/**
 * Created by zenghong on 15/12/27.
 */
angular.module('agilisales').directive('agEventsSelectPanel', [function () {
  return {
    restrict: 'AE',
    templateUrl: 'directives/events_panel/events_select.client.view.html',
    replace: true,
    scope: {},
    controller: function ($scope, $element) {
      $scope.show = function () {
        $element.addClass('show');
      };

      $scope.hide = function () {
        $element.removeClass('show');
      };

      $scope.$on('show.eventsSelectPanel', function () {
        $scope.show();
      });
    }
  };
}]);
