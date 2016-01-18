/**
 * Created by zenghong on 16/1/18.
 */
angular.module('agilesales-web').directive('agQuestionSingle', function () {
  return {
    restrict: 'AE',
    templateUrl: 'directives/question_single/question_single.client.view.html',
    replace: true,
    scope: {},
    link: function ($scope, $element, $attrs) {

    }
  }
});