/**
 * Created by zenghong on 16/1/15.
 */
angular.module('agilesales-web').controller('BasedataCustomerCtrl',[ '$scope',function ($scope) {
  $scope.peoples = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,21,22,23,24,25,26,27];
  $scope.values = [
    '客户编码', '客户等级', '客户名称',
    '客户简称', '客户性质', '渠道类型',
    '所辖区域', '省份', '城市',
    '地址', '送货地址', '电话',
    '联系人', '负责人编号', '负责人姓名'
  ];
}]);