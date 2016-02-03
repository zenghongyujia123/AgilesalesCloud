/**
 * Created by zenghong on 16/1/15.
 */
angular.module('agilesales-web').controller('CardConfigCtrl', ['$scope', '$rootScope', '$state', '$stateParams', '$window', 'AuthService', 'CustomerService', 'CardService',
  function ($scope, $rootScope, $state, $stateParams, $window, AuthService, CustomerService, CardService) {
    $scope.location = window.location;
    $scope.card = {};
    if ($stateParams.card_id) {
      $scope.card = AuthService.getCardTemplateById($stateParams.card_id);
      console.log($scope.card);
    }

    $scope.headers = [
      '客户编码', '客户等级', '客户名称',
      '客户简称', '客户类型', '渠道类型',
      '大区', '省区', '办事处',
      '客户地址', '客户送货地址', '客户联系人电话',
      '客户联系人姓名', '负责人编号', '负责人姓名',
      '导购拜访卡', '业务员拜访卡'
    ];

    $scope.customers = [];
    $scope.getCustomers = function () {
      CustomerService.getCustomers().then(function (data) {
        console.log(data);
        if (!data.err) {
          $scope.customers = data;
        }
      }, function (err) {
        console.log(err);
      });
    };

    $scope.getCustomers();

    $scope.showUpdateCardTitle = function () {
      $rootScope.$broadcast('show.dialogInput', {
        title: '修改拜访卡名称',
        contents: [{
          key: '修改拜访卡名称',
          value: $scope.card.title,
          tip: '请拜访卡名称',
          param: 'title'
        }],
        color: 'blue',
        callback: function (info) {
          if (info.contents[0].value) {
            $scope.updateCardTemplateTitle(info.contents[0].value);
          }
        }
      });
    };

    $scope.updateCardTemplateTitle = function (title) {
      CardService.updateCardTemplateTitle($scope.card._id, title).then(function (data) {
        if (!data.err) {
          $window.location.reload();
        }
        console.log(data);
      }, function (data) {
        console.log(data);
      });
    }

  }]);