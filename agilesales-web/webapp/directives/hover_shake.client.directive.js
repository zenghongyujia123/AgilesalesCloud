/**
 * Created by zenghong on 16/1/19.
 */
angular.module('agilesales-web').directive('agHoverShake', [function () {
  return {
    restrict: 'AE',
    link: function ($scope, $element, $attrs) {
      $element.mouseover(function () {

        $element.addClass('animated ' + $attrs.agHoverShake + '');
      });
      $element.mouseleave(function () {
        $element.removeClass('animated ' + $attrs.agHoverShake + '');
      });
    }
  }
}]);