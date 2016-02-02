/**
 * Created by zenghong on 16/1/18.
 */
angular.module('agilesales-web').directive('agQuestionBlank', ['$rootScope', function ($rootScope) {
  return {
    restrict: 'AE',
    templateUrl: 'directives/question_blank/question_blank.client.view.html',
    replace: true,
    scope: {},
    link: function ($scope, $element, $attrs) {
      $scope.question = {
        type: 'blank',
        type_text: '填空题',
        input_type_text: '数字',
        input_type: 'number',
        title: '',
        is_need_photo: false,
        is_need_description: false
      };

      $scope.showInputType = function () {
        $rootScope.$broadcast('show.dialogSelect', {
          title: '输入方式',
          contents: [{
            key: '请选择输入方式',
            value: '',
            tip: '点击输入名称',
            options: ['数字', '文本']
          }],
          color: 'blue',
          callback: function (info) {
            $scope.question.input_type_text = info.contents[0].value;
            $scope.question.input_type = $scope.getInputType($scope.question.input_type_text);
          }
        });
      };

      $scope.togglePhoto = function () {
        $scope.question.is_need_photo = !$scope.question.is_need_photo;
      };
      $scope.toggleDescription = function () {
        $scope.question.is_need_description = !$scope.question.is_need_description;
      };

      $scope.getInputType = function (type) {
        switch (type) {
          case '数字':
            return 'numbner';
          case '文本':
            return 'text';
        }
      }
    }
  }
}]);