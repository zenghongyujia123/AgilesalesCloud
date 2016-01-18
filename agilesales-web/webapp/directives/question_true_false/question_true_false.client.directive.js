/**
 * Created by zenghong on 16/1/18.
 */
angular.module('agilesales-web').directive('agQuestionTrueFalse', function () {
  return {
    restrict: 'AE',
    templateUrl: 'directives/question_true_false/question_true_false.client.view.html',
    replace: true,
    scope: {},
    link: function ($scope, $element, $attrs) {

    }
  }
});