/**
 * Created by zenghong on 16/1/15.
 */
angular.module('agilesales-web').controller('CardEditCtrl', ['$scope', '$rootScope', '$state', '$stateParams', function ($scope, $rootScope, $state, $stateParams) {
  $scope.showAddPaper = function () {
    $rootScope.$broadcast('show.dialogInput', {
      title: '添加试卷',
      contents: [{
        key: '请输入试卷名称',
        value: '',
        tip: '点击输入名称'
      }],
      color: 'blue',
      callback: function (info) {

      }
    });
  };
  $scope.addPaper = function (title) {
    $scope.addPaperTemplate(title, $scope.card._id).then(function (data) {
      console.log(data);
    }, function (data) {
      console.log(data);
    });
  };
  $scope.card = {};
  if ($stateParams.card) {
    $scope.card = JSON.parse($stateParams.card);
    console.log($scope.card);
  }

  $scope.goConfig = function () {
    $state.go('card_edit.card_config', {card: JSON.stringify($scope.card)});
  };

  $scope.location = window.location;
}]);