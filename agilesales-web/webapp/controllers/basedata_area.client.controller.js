/**
 * Created by zenghong on 16/1/15.
 */
angular.module('agilesales-web').controller('BasedataAreaCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
  $scope.addCol = function () {
    $rootScope.$broadcast('show.dialogInput', {
      title: '添加列',
      contents: [{
        key: '请输入列的名称',
        value: '取个名字'
      }],
      color: 'blue'
    });
  };

  $scope.removeCol = function () {
    $rootScope.$broadcast('show.dialogInput', {
      title: '删除列',
      contents: [{
        key: '请选择需要删除的列',
        value: '大区'
      }],
      color: 'red'
    });
  };
}]);