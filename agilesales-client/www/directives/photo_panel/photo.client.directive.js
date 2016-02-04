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
          targetWidth: 400,
          targetHeight: 600,
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

      $scope.$on('show.photoPanel', function (event,data) {
        $scope.show();
        $scope.info = data;

      });

      $scope.showPhotoDetailPanel = function () {
        $rootScope.$broadcast('show.photoDetailPanel', $scope.photos);
      };

      $scope.info = {
        title: '拍照',
        sub_title: '拍摄什么照片',
        is_browser: false,
        callback: function () {

        },
        photo_number:1,
        photos: []
      };

      $scope.submit = function () {
        if ($scope.info.callback) {
          $scope.info.callback($scope.info);
        }
        $scope.hide();
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
