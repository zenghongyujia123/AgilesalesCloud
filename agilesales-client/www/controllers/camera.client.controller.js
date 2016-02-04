/**
 * Created by zenghong on 16/1/6.
 */
angular.module('agilisales')
  .controller('CameraCtrl', ['$scope', '$cordovaCamera', '$cordovaBarcodeScanner', '$rootScope', 'NetworkTool', function ($scope, $cordovaCamera, $cordovaBarcodeScanner, $rootScope, NetworkTool) {
    $scope.info = {
      src: ''
    };
    $scope.getPicture = function () {

    };

    $scope.showMapPanel = function () {
      $rootScope.$broadcast('show.mapPanel');
    };

    $scope.showPhotoPanel = function () {
      $rootScope.$broadcast('show.photoPanel');
    };

    $scope.isOnline = function () {
      alert(NetworkTool.isOnline());
    };

    $scope.getBarCode = function () {
      $cordovaBarcodeScanner
        .scan()
        .then(function (barcodeData) {
          // Success! Barcode data is here
          alert(JSON.stringify(barcodeData));
        }, function (error) {
          // An error occurred
          alert(JSON.stringify(error));
        });
    };
  }]);
