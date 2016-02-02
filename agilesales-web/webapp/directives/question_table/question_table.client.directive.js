/**
 * Created by zenghong on 16/1/18.
 */
angular.module('agilesales-web').directive('agQuestionTable', function () {
  return {
    restrict: 'AE',
    templateUrl: 'directives/question_table/question_table.client.view.html',
    replace: true,
    scope: {getQuestion: '&'},
    link: function ($scope, $element, $attrs) {
      $scope.question = $scope.getQuestion();

      if (!$scope.question.content)
        $scope.question.content = {};
      if (!$scope.question.content)
        $scope.question.content = {};

      if (!$scope.question.content.title)
        $scope.question.content.title = '';

      if (!$scope.question.content.table)
        $scope.question.content.table = '';

      if (!$scope.question.content.filter_fields)
        $scope.question.content.filter_fields = [];

      if (!$scope.question.content.show_fields) {
        $scope.question.content.show_fields = [];

        $scope.question.content.show_fields.push({
          type: 'single'
        });
        $scope.question.content.show_fields.push({
          type: 'blank'
        });
        $scope.question.content.show_fields.push({
          type: 'trueorfalse'
        });
        $scope.question.content.show_fields.push({
          type: 'multi'
        });
      }


    }
  }
});