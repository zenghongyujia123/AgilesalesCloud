/**
 * Created by zenghong on 16/1/15.
 */
angular.module('agilesales-web').controller('BasedataHomeCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
  $scope.showUpload = function () {
    $rootScope.$broadcast('show.dialogUpload', {
      title: '上传地区',
      contents: [{
        key: '请选择需要上传的地区文件',
        value: '点击选择文件',
        tip: '点击选择文件'
      }],
      color: 'blue',
      headers: [
        {key: 'A1', value: '大区'},
        {key: 'B1', value: '省区'},
        {key: 'C1', value: '办事处'}
      ],
      callback: function (data) {
        var areas = {};
        data.forEach(function (item) {
          if(item['大区']){
            if (!areas[item['大区']]) {
              areas[item['大区']] = {};
            }

            if (!areas[item['大区']][item['省区']]) {
              areas[item['大区']][item['省区']] = {};
            }

            if(!areas[item['大区']][item['省区']][item['办事处']]){
              areas[item['大区']][item['省区']][item['办事处']]={};
            }
          }
        });
        console.log(areas);
      }
    });
  };

  $scope.location = window.location;
  $scope.isMenuClose = false;
  $scope.toggleMenu = function () {
    $scope.isMenuClose = !$scope.isMenuClose;
  }
}]);