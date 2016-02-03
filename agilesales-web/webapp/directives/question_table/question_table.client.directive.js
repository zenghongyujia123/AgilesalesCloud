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
            value: '请选择表格',
            options: options
          }],
          color: 'blue',
          callback: function (info) {
            $scope.question.content.table_name = info.contents[0].value;
          }
        });
      };

      $scope.showFieldSelect = function(){
        var fields = AuthService.getFieldsByTable($scope.question.content.table_name);
        var options = [];
        fields.forEach(function (field) {
          options.push(field.name);
        });

        $rootScope.$broadcast('show.dialogSelect', {
          title: '选择显示字段',
          contents: [{
            key: '请选择显示字段',
            value: '请选择显示字段',
            options: options
          }],
          color: 'blue',
          callback: function (info) {
            $scope.question.content.col_field_1= info.contents[0].value;
          }
        });
      };

      $scope.showFilterFieldSelect = function (index) {
        var fields = AuthService.getFieldsByTable($scope.question.content.table_name);
        var options = [];
        fields.forEach(function (field) {
          options.push(field.name);
        });

        $rootScope.$broadcast('show.dialogSelect', {
          title: '选择筛选字段',
          contents: [{
            key: '请选择筛选字段',
            value: '',
            options: options
          }],
          color: 'blue',
          index: index,
          callback: function (info) {
            $scope.question.content.filter_fields[info.index].value = info.contents[0].value;
          }
        });
      };

      if (!$scope.question.content)
        $scope.question.content = {};
      if (!$scope.question.content)
        $scope.question.content = {};
      if (!$scope.question.content.table_name)
        $scope.question.content.table_name = '';

      if (!$scope.question.content.col_field_1) {
        $scope.question.content.col_field_1 = '';
      }

      if (!$scope.question.content.title)
        $scope.question.content.title = '';

      if (!$scope.question.content.table)
        $scope.question.content.table = '';

      if (!$scope.question.content.filter_fields) {
        $scope.question.content.filter_fields = [];
        $scope.question.content.filter_fields.push({
          key: '请选择筛选字段',
          value: '请选择筛选字段',
          index: 0
        });
        $scope.question.content.filter_fields.push({
          key: '',
          value: '请选择筛选字段',
          index: 1
        });
      }

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