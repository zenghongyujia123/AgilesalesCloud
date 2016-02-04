/**
 * Created by zenghong on 15/1/30.
 */
angular.module('agilisales').factory('CameraService', [
  '$q',
  '$cordovaCamera',
  function ($q, $cordovaCamera) {
    var options = {
      destinationType: Camera.DestinationType.FILE_URI,
      sourceType: Camera.PictureSourceType.CAMERA,
      targetWidth: 800,
      targetHeight: 800
    };
    return {
      getPicture: function () {
        var q = $q.defer();
        $cordovaCamera.getPicture(options).then(function (imageURI) {
          q.resolve(imageURI);
        }, function (err) {
          q.resolve(err);
        });
        return q.promise;
      }
    }
  }]);
