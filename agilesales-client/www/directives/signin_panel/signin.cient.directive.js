/**
 * Created by zenghong on 15/12/27.
 */
angular.module('agilisales').directive('agSigninPanel', ['$state', function ($state) {
  return {
    restrict: 'AE',
    templateUrl: 'directives/signin_panel/signin.client.view.html',
    replace: true,
    scope: {},
    controller: function ($scope, $element) {
      $scope.show = function () {
        $element.addClass('show');
      };

      $scope.hide = function () {
        $element.removeClass('show');
        $state.go('menu.home');
      };

      $scope.$on('show.signinPanel', function () {
        $scope.show();
      });
    }
  };
}]);
