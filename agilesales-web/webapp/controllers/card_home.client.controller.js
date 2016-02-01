/**
 * Created by zenghong on 16/1/15.
 */
angular.module('agilesales-web').controller('CardHomeCtrl', ['$scope', '$rootScope', '$state', 'AuthService', 'CardService', function ($scope, $rootScope, $state, AuthService, CardService) {
  $scope.cards = AuthService.getCardTemplates();
  $scope.$on('onUserReset', function () {
    $scope.cards = AuthService.getCardTemplates();
  });

  $scope.goEdit = function (card) {
    $state.go('card_edit', {card: JSON.stringify(card)});
  };

  $scope.showCardAdd = function () {
    $rootScope.$broadcast('show.dialogInput', {
      title: '添加拜访卡',
      contents: [{
        key: '请输入拜访卡名称',
        value: '',
        tip: '请输入拜访卡名称',
        param: 'title'
      },
        {
          key: '请输入拜访卡使用角色',
          value: '',
          tip: '请输入拜访卡使用角色',
          param: 'role'
        }],
      color: 'blue',
      callback: function (info) {
        $scope.createCardTemplate(info);
      }
    });
  };

  $scope.createCardTemplate = function (info) {
    var title = '';
    var role = '';
    info.contents.forEach(function (item) {
      if (item.param === 'title')
        title = item.value;
      if (item.param === 'role')
        role = item.value;
    });

    CardService.createCardTemplate(title, role).then(function (data) {
      console.log(data);
    }, function (data) {
      console.log(data);
    });
  }
}]);