/**
 * Created by zenghong on 16/1/15.
 */
angular.module('agilesales-web').controller('CardHomeCtrl', ['$scope', '$rootScope', '$state', 'AuthService', function ($scope, $rootScope, $state, AuthService) {
  $scope.cards = AuthService.getCardTemplates();
  $scope.$on('onUserReset', function () {
    $scope.cards = AuthService.getCardTemplates();
  });

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