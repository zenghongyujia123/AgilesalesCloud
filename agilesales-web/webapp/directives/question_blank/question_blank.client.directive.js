/**
 * Created by zenghong on 16/1/18.
 */
angular.module('agilesales-web').directive('agQuestionBlank', ['$rootScope', function ($rootScope) {
  return {
    restrict: 'AE',
    templateUrl: 'directives/question_blank/question_blank.client.view.html',
    replace: true,
    scope: {getQuestion: '&'},
    controller: function ($scope, $element, $attrs) {
      $scope.question = $scope.getQuestion();

      if (!$scope.question.type)
        $scope.question.type = 'blank';
      if (!$scope.question.type_text)
        $scope.question.type_text = '填空题';
      if (!$scope.question.input_type_text)
        $scope.question.input_type_text = '数字';
      if (!$scope.question.input_type)
        $scope.question.input_type = 'number';
      if (!$scope.question.title)
        $scope.question.title = '';
      if (!$scope.question.is_need_photo)
        $scope.question.is_need_photo = false;
      if (!$scope.question.is_need_description)
        $scope.question.is_need_description = false;


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
      };

      $scope.submitQuestion = function () {
        $scope.$emit('onQuestionUpdated', {question: $scope.question});
      }
    }
  }
}]);