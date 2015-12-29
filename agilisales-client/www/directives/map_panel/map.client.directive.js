/**
 * Created by zenghong on 15/12/27.
 */
angular.module('agilisales').directive('agMapPanel', function () {
  return {
    restrict: 'AE',
    templateUrl: 'directives/map_panel/map.client.view.html',
    replace: true,
    scope: {},
    controller: function ($scope, $element) {

      $element.click(function () {
        hide();
      });

      $scope.$on('show.mapPanel', function () {
        show();
      });

      function show() {
        $element.addClass('show');
      }

      function hide() {
        $element.removeClass('show');
      }

      console.log('haha');
    }
  };
});
