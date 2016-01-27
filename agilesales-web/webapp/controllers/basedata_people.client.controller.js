/**
 * Created by zenghong on 16/1/15.
 */
angular.module('agilesales-web').controller('BasedataPeopleCtrl', ['$scope', 'PeopleService', function ($scope, PeopleService) {
  $scope.peoples = [];
  $scope.headers = [
    '人员编号', '工号', '姓名',
    '岗位', '职务', '电话号码',
    '邮箱', '性别', '上级领导编号',
    '上级领导姓名', '常驻城市', '辖区',
    '帐号开通日期', '在职状态', '人员类型'
  ];

  $scope.getPeoples = function () {
    PeopleService.getPeoples().then(function (data) {
      console.log(data);
      if (data && !data.err) {
        $scope.peoples = data;
      }
    }, function (data) {
      console.log(data);
    });
  };

  $scope.getPeoples();

  $scope.uploadMultiPeoples = function (peoples) {
    PeopleService.uploadMultiPeoples(peoples).then(function (data) {
      console.log(data);
    }, function (data) {
      console.log(data);
    });
  }


}]);