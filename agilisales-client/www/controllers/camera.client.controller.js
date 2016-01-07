/**
 * Created by zenghong on 16/1/6.
 */
angular.module('agilisales')
  .controller('CameraCtrl', ['$scope', '$cordovaCamera', '$rootScope', 'NetworkTool', function ($scope, $cordovaCamera, $rootScope, NetworkTool) {
    var options = {
      quality: 50,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 100,
      targetHeight: 100,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };


    //document.addEventListener("deviceready", function () {
    //
    //}, false);

    $scope.info = {
      src: ''
    };
    $scope.getPicture = function () {
      $cordovaCamera.getPicture(options).then(function (imageData) {
        $scope.info.src = "data:image/jpeg;base64," + imageData;
      }, function (err) {
        console.log(err);
      });
    };

    $scope.showMap = function () {
      $rootScope.$broadcast('show.mapPanel');
    };

    $scope.isOnline = function () {
      alert(NetworkTool.isOnline());
    };
  }]);
