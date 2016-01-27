/**
 * Created by zenghong on 16/1/15.
 */
angular.module('agilesales-web').controller('BasedataSkuCtrl', ['$scope','$rootScope','ProductService',function ($scope,$rootScope,ProductService) {
  $scope.products = [];
  $scope.headers = [
    '产品编号', '产品条码', '产品名称',
    '产品简称', '品牌', '系列',
    '大类', '小类', '包装单位',
    '规格', '系统供价', '价格',
    '产品等级', '是否新品', '是否重点产品',
    '是否档期促销品'
  ];

  function upload(products, i) {
    ProductService.uploadMultiProducts(products[i++])
      .then(function (data) {
        console.log(data);
        if (products[i]) {
          upload(products, i);
        }
      }, function (err) {
        console.log(err);
      });
  }

  $scope.uploadMultiProducts = function (products) {
    var i = 0;
    upload(products, i);
  };

  $rootScope.$broadcast('show.dialogUpload', {
    title: '上传产品',
    contents: [{
      key: '请选择需要上传的产品文件',
      value: '点击选择文件',
      tip: '点击选择文件'
    }],
    color: 'blue',
    headers: headers,
    callback: function (data) {
      var obj = {};
      var arr = [];
      data.forEach(function (item) {
        if (!obj[item['电话号码']]) {
          obj[item['电话号码']] = {};
          $scope.headers.forEach(function (header) {
            obj[item['电话号码']][header] = item[header];
          });
        }
      });

      var result = [];

      for (var p in obj) {
        var item = {};
        for (var i in obj[p]) {
          switch (i) {
            case '产品编号':
              item.number = obj[p][i];
              break;
            case '产品条码':
              item.barcode = obj[p][i];
              break;
            case '产品名称':
              item.name = obj[p][i];
              break;
            case '产品简称':
              item.short_name= obj[p][i];
              break;
            case '品牌':
              item.brand = obj[p][i];
              break;
            case '系列':
              item.series = obj[p][i];
              break;
            case '大类':
              item.large_type = obj[p][i];
              break;
            case '小类':
              item.small_type = obj[p][i];
              break;
            case '包装单位':
              item.package_unit = obj[p][i];
              break;
            case '规格':
              item.specification = obj[p][i];
              break;
            case '系统供价':
              item.system_price = obj[p][i];
              break;
            case '价格':
              item.price = obj[p][i];
              break;
            case '产品等级':
              item.product_level = obj[p][i];
              break;
            case '是否新品':
              item.is_new = obj[p][i];
              break;
            case '是否重点产品':
              item.is_key = obj[p][i];
              break;
            case '是否档期促销品':
              item.is_promotion = obj[p][i];
              break;
          }

        }
        result.push(item);
      }
      var peoples = [];
      for (var i = 0, len = result.length; i < len; i += 100) {
        peoples.push(result.slice(i, i + 100));
      }

      console.log(obj);
      console.log(result);
      console.log(peoples);
      $scope.uploadMultiPeoples(peoples);
    }
  });



}]);