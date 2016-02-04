/**
 * Created by zenghong on 15/12/27.
 */
angular.module('agilisales').directive('agMapPanel', ['$cordovaGeolocation', '$ionicPlatform', '$timeout', function ($cordovaGeolocation, $ionicPlatform, $timeout) {
  return {
    restrict: 'AE',
    templateUrl: 'directives/map_panel/map.client.view.html',
    replace: true,
    scope: {},
    controller: function ($scope, $element) {

      //$element.click(function () {
      //  hide();
      //});

      var map;
      var selfLocation = {};
      var geolocation;

      initMap();
      $scope.$on('show.mapPanel', function () {
        show();
      });
      $scope.hide = function () {
        hide();
      };
      $scope.moveToSelf = function () {
        setCenter(selfLocation.lng, selfLocation.lat);
      };
      $ionicPlatform.ready(function () {
        initLocation();
      });
      function show() {
        $element.addClass('show');
      }
      function hide() {
        $element.removeClass('show');
      }
      function setCenter(lng, lat) {
        if (lng && lat)
          map.setCenter(new AMap.LngLat(lng, lat));
      }
      function initMap() {
        map = new AMap.Map('gd-map-container', {
          resizeEnable: true,
          zoom: 15
        });
      }
      function initLocation() {
        if ($ionicPlatform.is('android')) {
          initAndroidLocation();
        } else {
          initIosLocation();
        }
      }

      var androidLocationMk = null;
      function initAndroidLocation() {
        window.plugins.AMapLocationService.getCurrentPosition(function (result) {
          console.log(result);
          if (result.position && result.position.lng) {
            selfLocation.lng = result.position.lng;
            selfLocation.lat = result.position.lat;
          }
        }, function (err) {
          console.log(err);
        });
      }
      function initIosLocation() {
        map.plugin('AMap.Geolocation', function () {
          geolocation = new AMap.Geolocation({
            enableHighAccuracy: true,//是否使用高精度定位，默认:true
            timeout: 10000,          //超过10秒后停止定位，默认：无穷大
            buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
            buttonPosition: 'RB',
            panToLocation: false,
            useNative:true
          });
          map.addControl(geolocation);
          AMap.event.addListener(geolocation, 'complete', onComplete);//返回定位信息
          AMap.event.addListener(geolocation, 'error', onError);      //返回定位出错信息
        });
        //解析定位结果
        function onComplete(data) {
          console.log(data);
          selfLocation.lng = data.position.getLng();
          selfLocation.lat = data.position.getLat();
        }

        //解析定位错误信息
        function onError(data) {
          console.log(data);
        }
        geolocation.watchPosition();
      }
    }
  };
}]);
