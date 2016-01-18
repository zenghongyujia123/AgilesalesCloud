/**
 * Created by zenghong on 16/1/15.
 */
angular.module('agilesales-web').controller('CardEditCtrl', ['$scope', '$rootScope', '$state', function ($scope, $rootScope, $state) {
  $scope.addPaper = function () {
    $rootScope.$broadcast('show.dialogInput', {
      title: '添加试卷',
      contents: [{
        key: '请输入试卷名称',
        value: '点击输入名称'
      }],
      color: 'blue'
    });
  };
  $scope.location = window.location;
}]);