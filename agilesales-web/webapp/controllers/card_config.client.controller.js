/**
 * Created by zenghong on 16/1/15.
 */
angular.module('agilesales-web').controller('CardConfigCtrl', ['$scope', '$rootScope', '$state', '$stateParams', 'AuthService', 'CustomerService',
  function ($scope, $rootScope, $state, $stateParams, AuthService, CustomerService) {
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

  }]);