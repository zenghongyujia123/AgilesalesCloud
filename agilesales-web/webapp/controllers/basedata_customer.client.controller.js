/**
 * Created by zenghong on 16/1/15.
 */
angular.module('agilesales-web').controller('BasedataCustomerCtrl', ['$scope', 'CustomerService', '$rootScope', function ($scope, CustomerService, $rootScope) {
  $scope.peoples = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27];
  $scope.values = [
    '客户编码', '客户等级', '客户名称',
    '客户简称', '客户性质', '渠道类型',
    '所辖区域', '省份', '城市',
    '地址', '送货地址', '电话',
    '联系人', '负责人编号', '负责人姓名'
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

  $rootScope.$on('show.importCustomers', function () {
    //最多10列
    var headers = [
      {key: 'A1', value: '客户编码'},
      {key: 'B1', value: '客户等级'},
      {key: 'C1', value: '客户名称'},
      {key: 'D1', value: '客户简称'},
      {key: 'E1', value: '客户类型'},
      {key: 'F1', value: '渠道类型'},
      {key: 'G1', value: '大区'},
      {key: 'H1', value: '省区'},
      {key: 'I1', value: '办事处'},
      {key: 'J1', value: '客户地址'},
      {key: 'K1', value: '客户送货地址'},
      {key: 'L1', value: '客户联系人电话'},
      {key: 'M1', value: '客户联系人姓名'},
      {key: 'N1', value: '负责人编号'},
      {key: 'O1', value: '负责人姓名'}
    ];

    $scope.uploadMultiCutomers = function (customers) {
      //AreaService.uploadMultiCutomers(customers).then(function (data) {
      //  console.log(data);
      //}, function (data) {
      //  console.log(data);
      //});
    };

    $rootScope.$broadcast('show.dialogUpload', {
      title: '上传客户',
      contents: [{
        key: '请选择需要上传的客户文件',
        value: '点击选择文件',
        tip: '点击选择文件'
      }],
      color: 'blue',
      headers: headers,
      callback: function (data) {
        var obj = {};
        var arr = [];
        //data.forEach(function (item) {
        //  var a = {};
        //  for (var p in item) {
        //    switch (p) {
        //      case headers[0].value:
        //        a['level1'] = item[headers[0].value] || '';
        //        break;
        //      case headers[1].value:
        //        a['level2'] = item[headers[1].value] || '';
        //        break;
        //      case headers[2].value:
        //        a['level3'] = item[headers[2].value] || '';
        //        break;
        //      case headers[3].value:
        //        a['level4'] = item[headers[3].value] || '';
        //        break;
        //      case headers[4].value:
        //        a['level5'] = item[headers[4].value] || '';
        //        break;
        //      case headers[5].value:
        //        a['level6'] = item[headers[5].value] || '';
        //        break;
        //      case headers[6].value:
        //        a['level7'] = item[headers[6].value] || '';
        //        break;
        //      case headers[7].value:
        //        a['level8'] = item[headers[7].value] || '';
        //        break;
        //      case headers[8].value:
        //        a['level9'] = item[headers[8].value] || '';
        //        break;
        //      case headers[9].value:
        //        a['level10'] = item[headers[9].value] || '';
        //        break;
        //    }
        //  }
        //
        //  a['key'] = (a.level1 || '') + ( a.level2 || '') + ( a.level3 || '') + ( a.level4 || '') + ( a.level5 || '') + ( a.level6 || '') + ( a.level7 || '') + ( a.level8 || '') + ( a.level9 || '') + ( a.level10 || '');
        //  if (!obj[a['key']]) {
        //    obj[a['key']] = a;
        //    arr.push(a);
        //  }
        //
        //
        //});
        //console.log(obj);
        //
        //$scope.uploadMultiArea(arr);
        console.log(data);
      }
    });
  });

}]);