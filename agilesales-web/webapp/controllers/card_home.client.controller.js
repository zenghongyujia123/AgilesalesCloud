/**
 * Created by zenghong on 16/1/15.
 */
angular.module('agilesales-web').controller('CardHomeCtrl', ['$scope', '$rootScope', '$state', function ($scope, $rootScope, $state) {
  $scope.cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  $scope.goEdit = function () {
    $state.go('card_edit');
  };
  $scope.showCardAdd = function () {
    $rootScope.$broadcast('show.dialogSelect', {
      title: '添加拜访卡',
      contents: [{
        key: '请输入拜访卡名称',
        value: '点击输入名称',
        options: ['ahha', 'jaja', 'sdfadfs']
      },
        {
          key: '请输入拜访卡名称',
          value: '点击输入名称',
          options: ['ahha', 'jaja', 'sdfadfs']
        }],
      color: 'blue'

    });
  };
}]);