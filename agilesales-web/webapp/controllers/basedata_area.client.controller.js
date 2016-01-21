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

  $scope.updateAreaTitle = function (areaTitle) {
    AreaService.updateAreaTitle(areaTitle).then(function (data) {
      console.log(data);
    }, function (err) {
      console.log(err);
    });
  };

  $rootScope.$on('show.importAreas', function () {
    //最多10列
    var headersTemp = [
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
    var headers = [];
    $scope.company.areas_title.forEach(function (areaTitle) {
      if (areaTitle.name) {
        headers.push({
          key: headersTemp[index++].key,
          value: areaTitle.name
        })
      }
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
          var name1 = headers[0].value;
          if (item[name1]) {
            if (!areas[item[name1]]) {
              areas[item[name1]] = {};
            }

            var name2 = headers[1].value;

            if (!areas[item[name1]][item[name2]]) {
              areas[item[name1]][item[name2]] = {};
            }

            var name3 = headers[2].value;

            if (!areas[item[name1]][item[name2]][item[name3]]) {
              areas[item[name1]][item[name2]][item[name3]] = {};
            }
          }

        });

        var items = [];
        for (var area in areas) {
          var a = {name: area, childs: []};
          for (var province in areas[area]) {
            var b = {name: province, childs: []};
            for (var banshichu in areas[area][province]) {
              var c = {name: banshichu, childs: []};
              b.childs.push(c);
            }
            a.childs.push(b);
          }
          items.push(a);
        }

        console.log(JSON.stringify(items));
        console.log(areas);
      }
    });
  });
}]);