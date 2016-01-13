/**
 * Created by zenghong on 15/12/27.
 */
angular.module('agilisales').directive('agPhotoDetailPanel', ['$ionicSlideBoxDelegate', function ($ionicSlideBoxDelegate) {
  return {
    restrict: 'AE',
    templateUrl: 'directives/photo_panel/photo_detail.client.view.html',
    replace: true,
    scope: {},
    controller: function ($scope, $element) {
      $scope.show = function () {
        $element.addClass('show');
      };

      $scope.hide = function () {
        $element.removeClass('show');
      };

      $scope.swiper = new Swiper('#ag-photo-swiper');

      $scope.$on('show.photoDetailPanel', function (event, photos) {
        $scope.swiper.removeAllSlides();
        appendSlides(photos);
        console.log(photos);
        $scope.show();
      });

      function appendSlides(datas) {
        for (var i = 0; i < datas.length; i++) {
          $scope.swiper.appendSlide('<div class="swiper-slide" style="color:white;"><img src="' + datas[i].value + '"></div>');
        }
      }
    }
  };
}]);
