/**
 * Created by zenghong on 16/1/15.
 */
angular.module('agilesales-web').controller('BasedataCustomerCtrl',[ '$scope',function ($scope) {
  $scope.peoples = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  $scope.values = [
    '人员编号', '工号', '姓名',
    '岗位', '职务', '电话号码',
    '邮箱', '性别', '上级领导编号',
    '上级领导姓名', '常驻城市', '辖区',
    '帐号开通日期', '在职状态', '人员类型'
  ];
}]);