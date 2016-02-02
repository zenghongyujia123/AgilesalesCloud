/**
 * Created by zenghong on 16/1/18.
 */
angular.module('agilesales-web').directive('agQuestionTable', ['$rootScope', 'AuthService', function ($rootScope, AuthService) {
  return {
    restrict: 'AE',
    templateUrl: 'directives/question_table/question_table.client.view.html',
    replace: true,
    scope: {getQuestion: '&'},
    link: function ($scope, $element, $attrs) {
      $scope.question = $scope.getQuestion();

      $scope.showTableSelect = function () {
        var tables = AuthService.getTables();
        var options = [];
        tables.forEach(function (table) {
          options.push(table.table_name);
        });
        $rootScope.$broadcast('show.dialogSelect', {
          title: '选择表格',
          contents: [{
            key: '请选择表格',
            value: '',
            options: options
          }],
          color: 'blue',
          callback: function (info) {
            $scope.question.content.table_name = info.contents[0].value;
          }
        });
      };

      $scope.showFieldSelect = function () {
        var fields = AuthService.getFieldsByTable($scope.question.content.table_name);
        var options = [];
        fields.forEach(function(field){
          options.push(field.field);
        });

        $rootScope.$broadcast('show.dialogSelect', {
          title: '选择筛选字段',
          contents: [{
            key: '请选择筛选字段',
            value: '',
            options: options
          }],
          color: 'blue',
          callback: function (info) {
            $scope.question.content.table_name = info.contents[0].value;
          }
        });
      };

      if (!$scope.question.content)
        $scope.question.content = {};
      if (!$scope.question.content)
        $scope.question.content = {};
      if (!$scope.question.content.table_name)
        $scope.question.content.table_name = '';

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
}]);