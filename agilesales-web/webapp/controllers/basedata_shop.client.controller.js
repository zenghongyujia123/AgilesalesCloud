/**
 * Created by zenghong on 16/1/15.
 */
angular.module('agilesales-web').controller('BasedataShopCtrl', ['$scope', '$rootScope', 'ShopService', function ($scope, $rootScope, ShopService) {
  $scope.shops = [];

  $scope.headers = [
    '门店编码', '门店名称', '门店等级',
    '所属区域', '所属城市', '地址',
    '渠道类型', '门店类型', '渠道',
    '所属客户', '业务员姓名', '业务员工号', '促销员工号', '促销员姓名',
    '月拜访频次', '门店状态', '品牌', '经度', '纬度'
  ];


}]);