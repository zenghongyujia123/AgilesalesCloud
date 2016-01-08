// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('agilisales', ['ionic', 'flexcalendar', 'flexcalendar.defaultTranslation', 'ngCordova'])
  .run(function ($ionicPlatform,$rootScope) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }

      $rootScope.$on('$cordovaNetwork:online', function(event, networkState){
        console.log(event);
        console.log(networkState);
      });

      $rootScope.$on('$cordovaNetwork:offline', function(event, networkState){
        console.log(event);
        console.log(networkState);
      });
    });
  })

  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('menu', {
        url: '/menu',
        abstract: true,
        templateUrl: 'templates/menu.client.view.html',
        controller: 'MenuCtrl'
      })
      .state('menu.home', {
        url: '/home',
        views: {
          'menuContent': {
            templateUrl: 'templates/home.client.view.html',
            controller: 'HomeCtrl'
          }
        }
      })
      .state('menu.inform', {
        url: '/inform',
        views: {
          'menuContent': {
            templateUrl: 'templates/inform.client.view.html',
            controller: 'InformCtrl'
          }
        }
      })
      .state('menu.inform_list', {
        url: '/inform_list',
        views: {
          'menuContent': {
            templateUrl: 'templates/inform_list.client.view.html',
            controller: 'InformListCtrl'
          }
        }
      })
      .state('menu.dashboard', {
        url: '/dashboard',
        views: {
          'menuContent': {
            templateUrl: 'templates/dashboard.client.view.html',
            controller: 'DashboardCtrl'
          }
        }
      })
      .state('menu.nearby_shop_list', {
        url: '/nearby_shop_list',
        views: {
          'menuContent': {
            templateUrl: 'templates/nearby_shop_list.client.view.html',
            controller: 'NearbyShopListCtrl'
          }
        }
      })
      .state('menu.nearby_shop', {
        url: '/nearby_shop',
        views: {
          'menuContent': {
            templateUrl: 'templates/nearby_shop.client.view.html',
            controller: 'NearbyShopCtrl'
          }
        }
      })
      .state('menu.setting', {
        url: '/setting',
        views: {
          'menuContent': {
            templateUrl: 'templates/setting.client.view.html',
            controller: 'SettingCtrl'
          }
        }
      })
      .state('menu.photos', {
        url: '/photos',
        views: {
          'menuContent': {
            templateUrl: 'templates/photos.client.view.html',
            controller: 'PhotosCtrl'
          }
        }
      })
      .state('menu.punch', {
        url: '/punch',
        views: {
          'menuContent': {
            templateUrl: 'templates/punch.client.view.html',
            controller: 'PunchCtrl'
          }
        }
      })
      .state('menu.punch_detail', {
        url: '/punch_detail',
        views: {
          'menuContent': {
            templateUrl: 'templates/punch_detail.client.view.html'
          }
        }
      })
      .state('menu.punch_submit', {
        url: '/punch_submit',
        views: {
          'menuContent': {
            templateUrl: 'templates/punch_submit.client.view.html',
            controller: 'PunchSubmitCtrl'
          }
        }
      })
      .state('menu.plan', {
        url: '/plan',
        views: {
          'menuContent': {
            templateUrl: 'templates/plan.client.view.html',
            controller: 'PlanCtrl'
          }
        }
      })
      .state('menu.plan_list', {
        url: '/plan_list',
        views: {
          'menuContent': {
            templateUrl: 'templates/plan_list.client.view.html',
            controller: 'PlanListCtrl'
          }
        }
      })
      .state('menu.plan_create', {
        url: '/plan_create',
        views: {
          'menuContent': {
            templateUrl: 'templates/plan_create.client.view.html',
            controller: 'PlanCreateCtrl'
          }
        }
      })
      .state('menu.shop', {
        url: '/shop',
        views: {
          'menuContent': {
            templateUrl: 'templates/shop.client.view.html',
            controller: 'ShopCtrl'
          }
        }
      })
      .state('menu.shop_create', {
        url: '/shop_create',
        views: {
          'menuContent': {
            templateUrl: 'templates/shop_create.client.view.html',
            controller: 'ShopCreateCtrl'
          }
        }
      })
      .state('menu.shop_list', {
        url: '/shop_list',
        views: {
          'menuContent': {
            templateUrl: 'templates/shop_list.client.view.html',
            controller: 'ShopListCtrl'
          }
        }
      })
      .state('menu.daily', {
        url: '/daily',
        views: {
          'menuContent': {
            templateUrl: 'templates/daily.client.view.html',
            controller: 'DailyCtrl'
          }
        }
      })
      .state('menu.daily_create', {
        url: '/daily_create',
        views: {
          'menuContent': {
            templateUrl: 'templates/daily_create.client.view.html',
            controller: 'DailyCreateCtrl'
          }
        }
      })
      .state('menu.daily_list', {
        url: '/daily_list',
        views: {
          'menuContent': {
            templateUrl: 'templates/daily_list.client.view.html',
            controller: 'DailyListCtrl'
          }
        }
      })
      .state('menu.camera', {
        url: '/camera',
        views: {
          'menuContent': {
            templateUrl: 'templates/camera.client.view.html',
            controller: 'CameraCtrl'
          }
        }
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/menu/home');
  })
  .config(function($translateProvider){
    $translateProvider.translations('ch', {
      JANUARY: '1月',
      FEBRUARY: '2月',
      MARCH: '3月',
      APRIL: '4月',
      MAI: '5月',
      JUNE: '6月',
      JULY: '7月',
      AUGUST: '8月',
      SEPTEMBER: '9月',
      OCTOBER: '10月',
      NOVEMBER: '11月',
      DECEMBER: '12月',

      SUNDAY: '日',
      MONDAY: '一',
      TUESDAY: '二',
      WEDNESDAY: '三',
      THURSDAY: '四',
      FRIDAY: '五',
      SATURDAY: '六'
    });
    $translateProvider.preferredLanguage('ch');

  });

/**
 * Created by zenghong on 16/1/7.
 */
angular.module('agilisales').factory('NetworkTool', ['$cordovaNetwork', function ($cordovaNetwork) {
  return {};
}]);

/**
 * Created by zenghong on 16/1/7.
 */
angular.module('agilisales').factory('NetworkTool', ['$cordovaNetwork', function ($cordovaNetwork) {
  return {
    isOnline: function () {
      return $cordovaNetwork.isOnline();
    }
  }
}]);

/**
 * Created by zenghong on 16/1/7.
 */
angular.module('agilisales').factory('NetworkTool', ['$cordovaNetwork', function ($cordovaNetwork) {
  return {
    isOnline: function () {
      return $cordovaNetwork.isOnline();
    }
  }
}]);

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

/**
 * Created by zenghong on 16/1/6.
 */
angular.module('agilisales')
  .controller('CameraCtrl', ['$scope', '$cordovaCamera', '$cordovaBarcodeScanner', '$rootScope', 'NetworkTool', function ($scope, $cordovaCamera, $cordovaBarcodeScanner, $rootScope, NetworkTool) {
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


      //// NOTE: encoding not functioning yet
      //$cordovaBarcodeScanner
      //  .encode(BarcodeScanner.Encode.TEXT_TYPE, "http://www.nytimes.com")
      //  .then(function (success) {
      //    alert(success);
      //  }, function (error) {
      //    alert(error);
      //    // An error occurred
      //  });
    };
  }]);

/**
 * Created by zenghong on 16/1/6.
 */
angular.module('agilisales')
  .controller('DailyCtrl', ['$scope', '$state', function ($scope, $state) {
    $scope.options = {
      defaultDate: new Date(),
      dayNamesLength: 1, // 1 for "M", 2 for "Mo", 3 for "Mon"; 9 will show full day names. Default is 1.
      mondayIsFirstDay: true,//set monday as first day of week. Default is false
      eventClick: function(date) { // called before dateClick and only if clicked day has events
        console.log(date);
      },
      dateClick: function(date) { // called every time a day is clicked
        console.log(date);
      },
      changeMonth: function(month, year) {
        console.log(month, year);
      },
      filteredEventsChange: function(filteredEvents) {
        console.log(filteredEvents);
      },
    };

    $scope.events = [
      {foo: 'bar', eventClass: 'expired', date: "2015-08-18"}, //value of eventClass will be added to CSS class of the day element
      {foo: 'bar', date: "2015-08-20"}
    ];
  }]);

/**
 * Created by zenghong on 16/1/6.
 */
angular.module('agilisales')
  .controller('DailyCreateCtrl', ['$scope', '$state', function ($scope, $state) {

  }]);

/**
 * Created by zenghong on 16/1/6.
 */
angular.module('agilisales')
  .controller('DailyListCtrl', ['$scope', '$state', function ($scope, $state) {

  }]);

/**
 * Created by zenghong on 15/12/29.
 */
angular.module('agilisales')
  .controller('DashboardCtrl', ['$scope', '$state', function ($scope, $state) {

  }]);

angular.module('agilisales').controller('MenuCtrl', function ($scope, $ionicModal, $timeout) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
      scope: $scope
    }).then(function (modal) {
      $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function () {
      $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function () {
      $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function () {
      console.log('Doing login', $scope.loginData);

      // Simulate a login delay. Remove this and replace with your login
      // code if using a login system
      $timeout(function () {
        $scope.closeLogin();
      }, 1000);
    };
  })
  .controller('HomeCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $scope.showMap = function () {
      $rootScope.$broadcast('show.mapPanel');
    }
  }])
  .controller('IndexCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {

  }]);

angular.module('agilisales')
  .controller('InformCtrl', ['$scope', '$state', function ($scope, $state) {

  }]);

/**
 * Created by zenghong on 16/1/5.
 */
angular.module('agilisales')
  .controller('InformListCtrl', ['$scope', '$state', function ($scope, $state) {

  }]);


/**
 * Created by zenghong on 15/12/29.
 */
angular.module('agilisales')
  .controller('NearbyShopCtrl', ['$scope', '$state', function ($scope, $state) {

  }]);

/**
 * Created by zenghong on 15/12/29.
 */
angular.module('agilisales')
  .controller('NearbyShopListCtrl', ['$scope', '$state', function ($scope, $state) {

  }]);

/**
 * Created by zenghong on 16/1/6.
 */
angular.module('agilisales')
  .controller('PhotosCtrl', ['$scope', '$state', function ($scope, $state) {

  }]);


/**
 * Created by zenghong on 16/1/5.
 */
angular.module('agilisales')
  .controller('PlanCtrl', ['$scope', '$state', function ($scope, $state) {

  }]);


/**
 * Created by zenghong on 16/1/5.
 */
angular.module('agilisales')
  .controller('PlanCreateCtrl', ['$scope', '$state', function ($scope, $state) {

  }]);


/**
 * Created by zenghong on 16/1/5.
 */
angular.module('agilisales')
  .controller('PlanListCtrl', ['$scope', '$state', function ($scope, $state) {

  }]);


/**
 * Created by zenghong on 16/1/5.
 */
angular.module('agilisales')
  .controller('PunchCtrl', ['$scope', '$state', function ($scope, $state) {
    $scope.goDetail = function () {
      $state.go('menu.punch_detail');
    };

    $scope.goSubmit = function () {
      $state.go('menu.punch_submit');
    }
  }]);

/**
 * Created by zenghong on 16/1/5.
 */
angular.module('agilisales')
  .controller('PunchSubmitCtrl', ['$scope', '$state', function ($scope, $state) {

  }]);

/**
 * Created by zenghong on 15/12/29.
 */
angular.module('agilisales')
  .controller('SettingCtrl', ['$scope', '$state', function ($scope, $state) {

  }]);

/**
 * Created by zenghong on 16/1/6.
 */
angular.module('agilisales')
  .controller('ShopCtrl', ['$scope', '$state', function ($scope, $state) {

  }]);

/**
 * Created by zenghong on 16/1/6.
 */
angular.module('agilisales')
  .controller('ShopCreateCtrl', ['$scope', '$state', function ($scope, $state) {

  }]);

/**
 * Created by zenghong on 16/1/6.
 */
angular.module('agilisales')
  .controller('ShopListCtrl', ['$scope', '$state', function ($scope, $state) {

  }]);

/**
 * Created by zenghong on 15/12/27.
 */