/**
 * Created by zenghong on 15/12/27.
 */
angular.module('agilisales').directive('agPhotoPanel', ['$cordovaCamera', '$rootScope', function ($cordovaCamera, $rootScope) {
  return {
    restrict: 'AE',
    templateUrl: 'directives/photo_panel/photo.client.view.html',
    replace: true,
    scope: {},
    controller: function ($scope, $element) {
      var options;
      document.addEventListener("deviceready", function () {
        options = {
          quality: 50,
          destinationType: Camera.DestinationType.DATA_URL,
          sourceType: Camera.PictureSourceType.CAMERA,
          //allowEdit: true,
          encodingType: Camera.EncodingType.JPEG,
          targetWidth: 100,
          targetHeight: 100,
          popoverOptions: CameraPopoverOptions,
          saveToPhotoAlbum: false,
          correctOrientation: true
        };
      }, false);


      $scope.show = function () {
        $element.addClass('show');
      };

      $scope.hide = function () {
        $element.removeClass('show');
      };

      $scope.$on('show.photoPanel', function () {
        $scope.show();
      });

      $scope.showPhotoDetailPanel = function () {
        $rootScope.$broadcast('show.photoDetailPanel', $scope.photos);
      };

      $scope.photos = [];

      $scope.getPicture = function () {
        $cordovaCamera.getPicture(options).then(function (imageData) {

          $scope.photos.push({
            key: $scope.photos.length + 1,
            value: "data:image/jpeg;base64," + imageData
          });
        }, function (err) {
          console.log(err);
        });
      }
    }
  };
}]);
