/**
 * Created by zenghong on 15/12/27.
 */
angular.module('agilisales').directive('agRepeatDone', function () {
  return function (scope, element, attrs) {
    if (scope.$last) { // all are rendered
      scope.$eval(attrs.repeatDone);
    }
  }
});
