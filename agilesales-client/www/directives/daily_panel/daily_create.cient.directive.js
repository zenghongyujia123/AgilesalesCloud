/**
 * Created by zenghong on 15/12/27.
 */
angular.module('agilisales').directive('agDailyCreatePanel', [function () {
  return {
    restrict: 'AE',
    templateUrl: 'directives/daily_panel/daily_create.client.view.html',
    replace: true,
    scope: {},
    controller: function ($scope, $element) {
      $scope.show = function () {
        $element.addClass('show');
      };

      $scope.hide = function () {
        $element.removeClass('show');
      };

      $scope.$on('show.dailyCreatePanel', function () {
        $scope.show();
      });
    }
  };
}]);
