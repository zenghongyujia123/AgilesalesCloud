/**
 * Created by zenghong on 16/1/15.
 */
angular.module('agilesales-web').controller('BasedataAreaCtrl', ['$scope', '$rootScope', 'AuthService', 'AreaService', function ($scope, $rootScope, AuthService, AreaService) {
  $scope.company = AuthService.getCompany();

  $scope.editColClick = function (area) {
    $rootScope.$broadcast('show.dialogInput', {
      title: '编辑列',
      contents: [{
        key: '请输入列的名称',
        tip: '取个名字',
        value: area.name
      }],
      color: 'blue',
      callback: function (info) {
        if (area.name !== info.contents[0].value) {
          area.name = info.contents[0].value;
          $scope.updateAreaTitle(area);
        }
      }
    });
  };

  $scope.updateAreaTitle = function (area) {
    AreaService.updateAreaTitle(area).then(function (data) {
      console.log(data);
    }, function (err) {
      console.log(err);
    });
  };

  $rootScope.$on('show.importAreas', function () {
    var headers = [
      {key: 'A1', value: ''},
      {key: 'B1', value: ''},
      {key: 'C1', value: ''},
      {key: 'D1', value: ''},
      {key: 'E1', value: ''},
      {key: 'F1', value: ''},
      {key: 'G1', value: ''},
      {key: 'H1', value: ''},
      {key: 'I1', value: ''},
      {key: 'J1', value: ''}
    ];

    var index = 0;
    $scope.company.areas.forEach(function (area) {
      headers[index++].value = area.name;
    });

    $rootScope.$broadcast('show.dialogUpload', {
      title: '上传地区',
      contents: [{
        key: '请选择需要上传的地区文件',
        value: '点击选择文件',
        tip: '点击选择文件'
      }],
      color: 'blue',
      headers: headers,
      callback: function (data) {
        var areas = {};
        data.forEach(function (item) {
          if (item['大区']) {
            if (!areas[item['大区']]) {
              areas[item['大区']] = {};
            }

            if (!areas[item['大区']][item['省区']]) {
              areas[item['大区']][item['省区']] = {};
            }

            if (!areas[item['大区']][item['省区']][item['办事处']]) {
              areas[item['大区']][item['省区']][item['办事处']] = {};
            }
          }
        });
        console.log(areas);
      }
    });
  });
}]);