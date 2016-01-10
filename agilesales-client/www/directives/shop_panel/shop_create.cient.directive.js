/**
 * Created by zenghong on 15/12/27.
 */
angular.module('agilisales').directive('agShopCreatePanel', [function () {
  return {
    restrict: 'AE',
    templateUrl: 'directives/shop_panel/shop_create.client.view.html',
    replace: true,
    scope: {},
    controller: function ($scope, $element) {
      $scope.show = function () {
        $element.addClass('show');
      };

      $scope.hide = function () {
        $element.removeClass('show');
      };

      $scope.$on('show.shopCreatePanel', function () {
        $scope.show();
      });
    }
  };
}]);
