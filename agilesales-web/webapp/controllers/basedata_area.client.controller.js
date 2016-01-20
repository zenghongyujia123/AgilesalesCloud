/**
 * Created by zenghong on 16/1/15.
 */
angular.module('agilesales-web').controller('BasedataAreaCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
  $scope.addColClick = function () {
    $rootScope.$broadcast('show.dialogInput', {
      title: '添加列',
      contents: [{
        key: '请输入列的名称',
        tip: '取个名字',
        value: ''
      }],
      color: 'blue',
      callback: function (info) {
        $scope.addCol(info.contents[0].value);
      }
    });
  };

  $scope.removeColClick = function () {
    $rootScope.$broadcast('show.dialogInput', {
      title: '删除列',
      contents: [{
        key: '请选择需要删除的列',
        value: '大区'
      }],
      color: 'red',
      callback: function () {

      }
    });
  };

  $scope.addCol = function (value) {
    if ($scope.headers.indexOf(value) < 0) {
      $scope.headers.push(value);
    }
  };
  $scope.headers = [];

}]);