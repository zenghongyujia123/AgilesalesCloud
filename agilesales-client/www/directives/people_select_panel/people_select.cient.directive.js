/**
 * Created by zenghong on 15/12/27.
 */
angular.module('agilisales').directive('agPeopleSelectPanel', [function () {
  return {
    restrict: 'AE',
    templateUrl: 'directives/people_select_panel/people_select.client.view.html',
    replace: true,
    scope: {},
    controller: function ($scope, $element) {
      $scope.show = function () {
        $element.addClass('show');
      };

      $scope.hide = function () {
        $element.removeClass('show');
      };

      $scope.$on('show.peopleSelectPanel', function () {
        $scope.show();
      });
    }
  };
}]);
