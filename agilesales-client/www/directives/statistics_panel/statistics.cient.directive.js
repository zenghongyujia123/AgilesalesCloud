/**
 * Created by zenghong on 15/12/27.
 */
angular.module('agilisales').directive('agStatisticsPanel', [function () {
  return {
    restrict: 'AE',
    templateUrl: 'directives/statistics_panel/statistics.client.view.html',
    replace: true,
    scope: {},
    controller: function ($scope, $element) {
      $scope.show = function () {
        $element.addClass('show');
      };

      $scope.hide = function () {
        $element.removeClass('show');
      };

      $scope.$on('show.statisticsPanel', function () {
        $scope.show();
      });
    }
  };
}]);
