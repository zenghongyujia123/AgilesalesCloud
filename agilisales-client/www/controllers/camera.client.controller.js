/**
 * Created by zenghong on 16/1/6.
 */
angular.module('agilisales')
  .controller('CameraCtrl', function ($scope, $cordovaCamera) {
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

    //
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
        // error
      });
    }
  });
