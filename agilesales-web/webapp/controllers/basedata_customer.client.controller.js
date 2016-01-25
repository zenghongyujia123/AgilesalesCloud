/**
 * Created by zenghong on 16/1/15.
 */
angular.module('agilesales-web').controller('BasedataCustomerCtrl', ['$scope', 'CustomerService', '$rootScope', function ($scope, CustomerService, $rootScope) {
  $scope.peoples = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27];
  $scope.headers = [
    '客户编码', '客户等级', '客户名称',
    '客户简称', '客户类型', '渠道类型',
    '大区', '省区', '办事处',
    '客户地址', '客户送货地址', '客户联系人电话',
    '客户联系人姓名', '负责人编号', '负责人姓名'
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
        data.forEach(function (item) {
          if (!obj[item['客户名称']]) {
            obj[item['客户名称']] = {};
            $scope.headers.forEach(function (header) {
              obj[item['客户名称']][header] = item[header];
            });
          }
        });

        for (var p in obj) {
          switch (p){
            case '客户编码':
              break;
            case '客户等级':
              break;
            case '客户名称':
              break;
            case '客户简称':
              break;
            case '客户类型':
              break;
            case '渠道类型':
              break;
            case '大区':
              break;
            case '省区':
              break;
            case '办事处':
              break;
            case '客户地址':
              break;
            case '客户送货地址':
              break;
            case '客户联系人电话':
              break;
            case '客户联系人姓名':
              break;
            case '负责人编号':
              break;
            case '负责人姓名':
              break;
          }
        }
        console.log(obj);
      }
    });
  });

}]);