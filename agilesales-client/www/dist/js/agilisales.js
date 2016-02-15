// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('templates', []);
angular.module('agilisales', [
    'templates',
    'ionic',
    'flexcalendar',
    'flexcalendar.defaultTranslation',
    'ngCordova',
    'LocalStorageModule'
  ])
  .run(function ($ionicPlatform, $rootScope) {
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

      $rootScope.$on('$cordovaNetwork:online', function (event, networkState) {
        console.log(event);
        console.log(networkState);
      });

      $rootScope.$on('$cordovaNetwork:offline', function (event, networkState) {
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
      .state('menu.dashboard_multi', {
        url: '/dashboard_multi/:type',
        views: {
          'menuContent': {
            templateUrl: 'templates/dashboard_multi.client.view.html',
            controller: 'DashboardMultiCtrl'
          }
        }
      })
      .state('menu.dashboard_single', {
        url: '/dashboard_single/:type/:user_id',
        views: {
          'menuContent': {
            templateUrl: 'templates/dashboard_single.client.view.html',
            controller: 'DashboardSingleCtrl'
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
  .config(function ($translateProvider) {
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

  })
  .config(['$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push('PublicInterceptor');
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    /**
     * The workhorse; converts an object to x-www-form-urlencoded serialization.
     * @param {Object} obj
     * @return {String}
     */
    var param = function (obj) {
      var query = '', name, value, fullSubName, subName, subValue, innerObj, i;
      for (name in obj) {
        value = obj[name];

        if (value instanceof Array) {
          for (i = 0; i < value.length; ++i) {
            subValue = value[i];
            fullSubName = name + '[' + i + ']';
            innerObj = {};
            innerObj[fullSubName] = subValue;
            query += param(innerObj) + '&';
          }
        }
        else if (value instanceof Object) {
          for (subName in value) {
            subValue = value[subName];
            fullSubName = name + '[' + subName + ']';
            innerObj = {};
            innerObj[fullSubName] = subValue;
            query += param(innerObj) + '&';
          }
        }
        else if (value !== undefined && value !== null)
          query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
      }
      return query.length ? query.substr(0, query.length - 1) : query;
    };

    // Override $http service's default transformRequest
    $httpProvider.defaults.transformRequest = [function (data) {
      return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
    }];
  }])
  .run(['$rootScope', '$state', '$window', 'AuthService', 'UserService',
    function ($rootScope, $state, $window, AuthService, UserService) {
      $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        if (!AuthService.isLoggedIn()) {
          $rootScope.$broadcast('show.signinPanel');
        }

        //
        //if (AuthService.getToken() == "") {
        //  event.preventDefault();
        //  return $rootScope.$broadcast('show.signinPanel');
        //}
        ////判断用户数据是否存在
        //if (!AuthService.isLoggedIn()) {
        //  event.preventDefault();
        //  //没有用户数据，需要重新获取用户，页面可能需要被重定向
        //  UserService.getMe()
        //    .then(function (data) {
        //        if (data.err) {
        //          return $rootScope.$broadcast('show.signinPanel');
        //        }
        //        AuthService.setUser(data);
        //
        //      },
        //      function (err) {
        //        alert('系统错误' + JSON.stringify(err));
        //      });
        //}
      });

      var windowElement = angular.element($window);
      windowElement.on('beforeunload', function (event) {
        AuthService.setLatestUrl($state.current.name, $state.params);
      });
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
 * Created by zenghong on 16/2/4.
 */
angular.module('agilisales').factory('AuthService', ['localStorageService', '$rootScope', function (localStorageService, $rootScope) {
  var access_token = '';
  var user = null;
  var userUpdateHandles = [];
  return {
    setToken: function (t) {
      access_token = t;
      localStorageService.set('access_token', t);
    },
    getToken: function () {
      if (access_token == "") {
        var local = localStorageService.get('access_token');
        if (!local || local == "" || local == "<%=  test %>") {
          localStorageService.set('token', "");
          access_token = "";
        }
        else {
          access_token = local;
        }
      }
      return access_token;
    },
    getUser: function () {
      return user;
    },
    setUser: function (u) {
      user = u;
      console.log(u);
      $rootScope.$broadcast('onUserReset');
    },
    getCompany: function () {
      return user.company;
    },
    getCardTemplates: function () {
      return user.company.card_templates;
    },
    getCardTemplateById: function (id) {
      var result = {};
      user.company.card_templates.forEach(function (item) {
        if (item._id === id) {
          result = item;
        }
      });
      return result;
    },
    getPaperById: function (cardId, paperId) {
      var card = this.getCardTemplateById(cardId);
      var result = {};
      card.papers.forEach(function (item) {
        if (item._id === paperId) {
          result = item;
        }
      });
      return result;
    },
    getTables: function () {
      return user.company.tables;
    },
    getFieldsByTable: function (tableName) {
      var result = [];
      user.company.tables.forEach(function (table) {
        if (table.table_name === tableName) {
          result = table.fields
        }
      });
      return result;
    },
    isLoggedIn: function () {
      return user ? true : false;
    },
    userUpdated: function () {
      userUpdateHandles.forEach(function (handler) {
        handler.handle(user);
      });
    },
    onUserUpdated: function (name, callback) {
      var result = false;
      for (var i = 0; i < userUpdateHandles.length; i++) {
        if (userUpdateHandles[i].name) {
          result = true;
          break;
        }
      }
      if (!result) {
        userUpdateHandles.push({
          name: name,
          handle: callback
        });
      }
    },
    getLatestUrl: function () {
      return localStorageService.get(user.username + 'state') || '';
    },
    setLatestUrl: function (state, params) {
      if (user) {
        localStorageService.set(user.username + 'state', {'state': state, 'params': params});
      }
    }
  };
}]);

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

/**
 * Created by zenghong on 16/2/4.
 */
angular.module('agilisales').factory('ConfigService', ['$http', '$q', function ($http, $q) {
  return {
    server: 'http://172.20.10.4:3002'
  };
}]);

/**
 * Created by zenghong on 16/2/5.
 */
/**
 * Created by zenghong on 16/2/4.
 */
angular.module('agilisales').factory('DashboardService', ['HttpService', function (HttpService) {
  return {
    //onduty offduty
    getRange: function (isMulti,type ,info) {
      if(isMulti){
        switch (type) {
          case 'dutytime':
            return this.getMultiDutyTimeRange(info);
        }
      }
      else{
        switch (type) {
          case 'dutytime':
            return this.getSingleDutyTimeRange(info);
        }
      }

    },
    getMultiDutyTimeRange: function (info) {
      return HttpService.get('/app/dashboard/multi/dutytime', info);
    },
    getSingleDutyTimeRange: function (info) {
      return HttpService.get('/app/dashboard/single/dutytime', info);
    }
  };
}]);

/**
 * Created by zenghong on 16/1/21.
 */
/**
 * Created by zenghong on 16/1/21.
 */
angular.module('agilisales').factory('HttpService', ['$http', '$q', 'ConfigService', function ($http, $q, ConfigService) {
  return {
    post: function (url, params) {
      var q = $q.defer();
      $http.post(ConfigService.server + url, params)
        .success(function (data) {
          q.resolve(data);
        })
        .error(function (data) {
          q.reject(data);
        });
      return q.promise;
    },
    get: function (url, params) {
      var q = $q.defer();
      $http.get(ConfigService.server + url, {params: params})
        .success(function (data) {
          q.resolve(data);
        })
        .error(function (data) {
          q.reject(data);
        });
      return q.promise;
    }
  };
}]);

/**
 * Created by zenghong on 16/2/4.
 */
angular.module('agilisales').factory('LocationService', ['$http', '$q', function ($http, $q) {
  var curLocation = [];
  return {
    setLocation: function (lng, lat) {
      if (lng && lat) {
        curLocation = [];
        curLocation.push(lng);
        curLocation.push(lat);
      }
    },
    getLocation:function(){

    }
  };
}]);

/**
 * Created by zenghong on 16/2/4.
 */
angular.module('agilisales').factory('PunchService', ['HttpService', function (HttpService) {
  return {
    //onduty offduty
    getTodayPunch: function () {
      return HttpService.get('/app/punch/today', {});
    },
    punch: function (type, photo) {
      return HttpService.post('/app/punch', {type: type, photo: photo});
    }
  };
}]);

angular.module('agilisales').factory('Qiniu', [
  '$cordovaFileTransfer',
  '$window',
  '$q',
  'HttpService',
  'ConfigService',
  function ($cordovaFileTransfer, $window,$q, HttpService, ConfigService) {
    var qiniuUploadAddress = 'http://upload.qiniu.com';
    var qiniuAddress = 'http://7xiwrb.com1.z0.glb.clouddn.com/';

    return {
      getUptoken: function () {
        return HttpService.get('/app/qiniu/uptoken',{});
      },

      uploadImage: function (imageUrl, token) {
        var q = $q.defer();
        $window.resolveLocalFileSystemURL(imageUrl, function (fileEntry) {
          var interUrl = fileEntry.toInternalURL();
          $cordovaFileTransfer.upload(encodeURI('http://upload.qiniu.com'), interUrl, {
            fileKey: 'file',
            fileName: interUrl.substr(interUrl.lastIndexOf('/') + 1),
            chunkedMode: false,
            trustAllHosts: true,
            mimeType: 'image/jpeg',
            params: {
              token: token
            }
          }, true).then(function (result) {
            console.log(result);
            q.resolve(qiniuAddress + JSON.parse(result.response).key);
          }, function (err) {
            q.reject(err);
          })
        });
        return q.promise;
      }
    }
  }]);

/**
 * Created by zenghong on 16/2/4.
 */
angular.module('agilisales').factory('UserService', ['HttpService', function (HttpService) {
  return {
    getMe: function () {
      return HttpService.get('/app/user/me', {});
    },
    getPeopleUnderlings: function () {
      return HttpService.get('/app/peoples/underlings', {});
    },
    signin: function (username, password) {
      return HttpService.post('/app/user/signin', {username: username, password: password});
    }
  };
}]);

angular.module('agilisales').factory('PublicInterceptor', ['AuthService', function (AuthService) {
  return {
    'request': function (req) {
      req.data = req.data ? req.data : {};
      req.data.access_token = AuthService.getToken();
      req.params = req.params ? req.params : {};
      req.params.access_token = AuthService.getToken();
      req.params.no_cache =new Date().getTime();
      return req;
    },
    'response': function (resp) {
      return resp;
    },
    'requestError': function (rejection) {
      return rejection;
    },
    'responseError': function (rejection) {
      return rejection;
    }
  }
}]);


/**
 * Created by zenghong on 15/12/27.
 */
angular.module('agilisales').directive('agDailyCreatePanel', [function () {
  return {
    restrict: 'AE',
    templateUrl: 'directives/daily_panel/daily_create.client.view.html',
    replace: true,
    scope: {},
    controller: function ($scope, $element) {
      $scope.show = function () {
        $element.addClass('show');
      };

      $scope.hide = function () {
        $element.removeClass('show');
      };

      $scope.$on('show.dailyCreatePanel', function () {
        $scope.show();
      });
    }
  };
}]);

/**
 * Created by zenghong on 15/12/27.
 */
angular.module('agilisales').directive('agEventsSelectPanel', [function () {
  return {
    restrict: 'AE',
    templateUrl: 'directives/events_panel/events_select.client.view.html',
    replace: true,
    scope: {},
    controller: function ($scope, $element) {
      $scope.show = function () {
        $element.addClass('show');
      };

      $scope.hide = function () {
        $element.removeClass('show');
      };

      $scope.$on('show.eventsSelectPanel', function () {
        $scope.show();
      });
    }
  };
}]);

/**
 * Created by zenghong on 15/12/27.
 */
angular.module('agilisales').directive('agFiltratePanel', [function () {
  return {
    restrict: 'AE',
    templateUrl: 'directives/filtrate_panel/filtrate.client.view.html',
    replace: true,
    scope: {},
    controller: function ($scope, $element) {
      $scope.show = function () {
        $element.addClass('show');
      };

      $scope.hide = function () {
        $element.removeClass('show');
      };

      $scope.$on('show.filtratePanel', function () {
        $scope.show();
      });
    }
  };
}]);

/**
 * Created by zenghong on 15/12/27.
 */
angular.module('agilisales').directive('agPeopleSelectPanel', ['UserService', function (UserService) {
  return {
    restrict: 'AE',
    templateUrl: 'directives/people_select_panel/people_select.client.view.html',
    replace: true,
    scope: {},
    controller: function ($scope, $element) {

      $scope.show = function () {
        $element.addClass('show');
      };

      $scope.hide = function () {
        $element.removeClass('show');
      };

      $scope.$on('show.peopleSelectPanel', function () {
        $scope.show();
      });
    }
  };
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
 * Created by zenghong on 15/12/27.
 */
angular.module('agilisales').directive('agPhotoPanel', ['$cordovaCamera', '$rootScope', 'Qiniu', function ($cordovaCamera, $rootScope, Qiniu) {
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
          destinationType: Camera.DestinationType.FILE_URI,
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

      $scope.$on('show.photoPanel', function (event, data) {
        $scope.show();
        $scope.info = data;

      });

      $scope.showPhotoDetailPanel = function () {
        $rootScope.$broadcast('show.photoDetailPanel', $scope.info.photos);
      };

      $scope.info = {
        title: '拍照',
        sub_title: '拍摄什么照片',
        is_browser: false,
        callback: function () {

        },
        photo_number: 1,
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

          Qiniu.getUptoken().then(function (data) {
            console.log(data);
            Qiniu.uploadImage(imageData, data.token).then(function (result) {
              console.log(result);
              $scope.info.photos.push({value: result});
            }, function (data) {
              console.log(data);
            });
          }, function (err) {
            console.log(err);
          });
        }, function (err) {
          console.log(err);
        });
      };


      $scope.uploadImage = function () {
        var pic = "填写你的base64后的字符串";
        var url = "http://up.qiniu.com/putb64/20264";
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
          if (xhr.readyState == 4) {
            document.getElementById("myDiv").innerHTML = xhr.responseText;
          }
          ;
          xhr.open("POST", url, true);
          xhr.setRequestHeader("Content-Type", "application/octet-stream");
          xhr.setRequestHeader("Authorization", "UpToken  填写你从服务端获取的上传token");
          xhr.send(pic);
        }
      }
    }
  };
}])
;

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
          $scope.swiper.appendSlide('<div class="swiper-slide"><div class="slide-photo" style="background-image:url(' + datas[i].value + ')"></div></div>');
        }
      }
    }
  };
}]);

/**
 * Created by zenghong on 15/12/27.
 */
angular.module('agilisales').directive('agPhotoSelectPanel', ['$cordovaCamera', '$rootScope',function ($cordovaCamera,$rootScope) {
  return {
    restrict: 'AE',
    templateUrl: 'directives/photo_panel/photo_select.client.view.html',
    replace: true,
    scope: {},
    controller: function ($scope, $element) {
      $scope.show = function () {
        $element.addClass('show');
      };

      $scope.hide = function () {
        $element.removeClass('show');
      };

      $scope.$on('show.photoSelectPanel', function () {
        $scope.show();
      });

      $scope.showMultiSelectPanel = function(){
        $rootScope.$broadcast('show.multiSelectPanel');
      }
    }
  };
}]);

/**
 * Created by zenghong on 15/12/27.
 */
angular.module('agilisales').directive('agShopCreatePanel', [function () {
  return {
    restrict: 'AE',
    templateUrl: 'directives/shop_panel/shop_create.client.view.html',
    replace: true,
    scope: {},
    controller: function ($scope, $element) {
      $scope.show = function () {
        $element.addClass('show');
      };

      $scope.hide = function () {
        $element.removeClass('show');
      };

      $scope.$on('show.shopCreatePanel', function () {
        $scope.show();
      });
    }
  };
}]);

/**
 * Created by zenghong on 15/12/27.
 */
angular.module('agilisales').directive('agStatisticsPanel', [function () {
  return {
    restrict: 'AE',
    templateUrl: 'directives/statistics_panel/statistics.client.view.html',
    replace: true,
    scope: {},
    controller: function ($scope, $element) {
      $scope.show = function () {
        $element.addClass('show');
      };

      $scope.hide = function () {
        $element.removeClass('show');
      };

      $scope.$on('show.statisticsPanel', function () {
        $scope.show();
      });
    }
  };
}]);

/**
 * Created by zenghong on 15/12/27.
 */
angular.module('agilisales').directive('agSigninPanel', ['$state', 'UserService', 'AuthService',
  function ($state, UserService, AuthService) {
    return {
      restrict: 'AE',
      templateUrl: 'directives/signin_panel/signin.client.view.html',
      replace: true,
      scope: {},
      link: function ($scope, $element) {
        $scope.show = function () {
          $element.addClass('show');
        };

        $scope.show();

        $scope.hide = function () {
          $element.removeClass('show');
        };

        $scope.$on('show.signinPanel', function () {
          $scope.show();
        });

        $scope.info = {
          username: '13800001757',
          password: '111111'
        };

        function getPeopleUnderlings() {
          UserService.getPeopleUnderlings().then(function (data) {
            console.log(data);
          }, function (data) {
            console.log(data);
          });
        }

        $scope.clickSignin = function () {
          return $element.addClass('do');
        };


        $scope.goSignin = function () {
          UserService.signin($scope.info.username, $scope.info.password).then(function (data) {
            if (data.err) {
              return alert(data.err.zh_message);
            }
            AuthService.setToken(data.access_token);

            UserService.getMe().then(function (data) {
              if (data.err) {
                return alert(data.err.zh_message);
              }
              AuthService.setUser(data);
              $scope.hide();
              $state.go('menu.home');

              getPeopleUnderlings();


            }, function (data) {

            });
            console.log(data);
          }, function (data) {
            console.log(data);
          });
        }
      }
    };
  }]);

angular.module('agilisales').directive('agMultiSelectQuestion', ['$rootScope', function ($rootScope) {
  return {
    restrict: 'AE',
    template: ' <div class="ag-row-container ag-multi-select-question"> \
                  <div class="ag-row-item">\
                    <div class="left">填空题</div> \
                    <div class="right">请选择</div>\
                  </div> \
                </div>',
    replace: true,
    scope: {},
    link: function ($scope, $element, $attrs) {
      $element.click(function () {
        $rootScope.$broadcast('show.multiSelectPanel');
      });
    }
  };
}]);

angular.module('agilisales').directive('agBlankQuestion', [function () {
  return {
    restrict: 'AE',
    template: ' <div class="ag-row-container ag-blank-question"> \
                  <div class="ag-row-item">\
                    <div class="left">填空题</div> \
                    <div class="right">\
                      <input type="text" placeholder="请输入">\
                    </div>\
                  </div> \
                </div>',
    replace: true,
    scope: {},
    link: function ($scope, $element, $attrs) {

    }
  };
}]);

/**
 * Created by zenghong on 15/12/27.
 */
angular.module('agilisales').directive('agMultiSelectPanel', [function () {
  return {
    restrict: 'AE',
    templateUrl: 'directives/questions/multi_select_panel/multi_select.client.view.html',
    replace: true,
    scope: {},
    controller: function ($scope, $element) {
      $scope.show = function () {
        $element.addClass('show');
      };

      $scope.hide = function () {
        $element.removeClass('show');
      };

      $scope.$on('show.multiSelectPanel', function () {
        $scope.show();
      });
    }
  };
}]);

angular.module('agilisales').directive('agTrueFalseQuestion', [function () {
  return {
    restrict: 'AE',
    template: ' <div class="ag-row-container ag-true-false-question"> \
                  <div class="ag-row-item">\
                    <div class="left">是否符合标准</div> \
                    <div class="right">\
                    <label>\
                    <input type="checkbox">\
                    <div class="ag-track">\
                        <div class="ag-handle"></div> \
                      </div> \
                    </div> \
                    </label>\
                  </div> \
                </div>',
    replace: true,
    scope: {},
    link: function ($scope, $element, $attrs) {

    }
  };
}]);

/**
 * Created by zenghong on 16/1/14.
 */

angular.module('agilisales').directive('agSingleSelectQuestion', [function () {
  return {
    restrict: 'AE',
    template: ' <div class="ag-row-container ag-single-select-question"> \
                  <div class="ag-row-item">\
                    <div class="left">主陈列形式</div> \
                    <select class="right">\
                      <option value="" disabled="true">请选择</option>\
                      <option ng-repeat="option in options">{{option}}</option> \
                    </select>\
                  </div> \
                </div>',
    replace: true,
    scope: {},
    link: function ($scope, $element, $attrs) {
      $scope.options = $attrs.options || ['货架', '货架1'];
      console.log($attrs);
    }
  };
}]);


/**
 * Created by zenghong on 15/12/27.
 */
angular.module('agilisales').directive('agRepeatDone', function () {
  return function (scope, element, attrs) {
    if (scope.$last) { // all are rendered
      scope.$eval(attrs.repeatDone);
    }
  }
});

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

/**
 * Created by zenghong on 16/1/6.
 */
angular.module('agilisales')
  .controller('DailyCtrl', ['$scope', '$state', function ($scope, $state) {
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
  .controller('DailyListCtrl', ['$scope', '$rootScope', '$state', function ($scope, $rootScope, $state) {
    $scope.info = {
      curIndex: 0
    };
    $scope.slideHasChanged = function (index) {
      $scope.info.curIndex = index;
    };

    $scope.showPage = function (index) {
      $scope.info.curIndex = index;
    };

    $scope.showDailyCreate = function () {
      $rootScope.$broadcast('show.dailyCreatePanel');
    };

    $scope.showPeopleSelectPanel = function () {
      $rootScope.$broadcast('show.peopleSelectPanel');
    };
  }]);

/**
 * Created by zenghong on 15/12/29.
 */
angular.module('agilisales')
  .controller('DashboardCtrl', ['$scope', '$state', function ($scope, $state) {
    $scope.goMuti = function(){
      $state.go('menu.dashboard_multi',{type:'dutytime'});
    }
  }]);

/**
 * Created by zenghong on 16/1/5.
 */
angular.module('agilisales')
  .controller('DashboardMultiCtrl', ['$scope', '$rootScope', '$state', '$stateParams', 'DashboardService', 'AuthService',
    function ($scope, $rootScope, $state, $stateParams, DashboardService, AuthService) {
      $scope.type = $stateParams.type;
      $scope.sortItems = [];
      $scope.user = AuthService.getUser();
      $scope.getDashboard = function () {
        DashboardService.getRange(true, $scope.type, {}).then(function (data) {
          if (!data.err) {
            $scope.setItemText(data)
          }
          console.log(data);
        }, function (data) {
          console.log(data);
        });
      };

      $scope.getItemWidth = function (item, index) {
        if (index === 0) {
          return '100%';
        }
        return parseInt(item.sort_value / $scope.sortItems[0].sort_value * 100) + '%';
      };

      $scope.setItemText = function (items) {
        switch ($scope.type) {
          case 'dutytime':
            $scope.setDutyText(items);
            break;
        }
      };

      $scope.setDutyText = function (datas) {
        datas.forEach(function (data) {
          var hourDiff = data.duty_time / (1000 * 60 * 60);

          var hour = parseInt(hourDiff);
          var minuite = parseInt((hourDiff - hour) * 60);
          hour = hour + '小时' + minuite + '分';
          data.sort_text = (data.user_info.name || '未知姓名') + ' ' + hour;
        });
        $scope.sortItems = datas;
      };

      $scope.getDashboard();

      $scope.showFiltrate = function () {
        $rootScope.$broadcast('show.filtratePanel');
      };

      $scope.showSelectPeople = function () {
        $rootScope.$broadcast('show.peopleSelectPanel');
      };

      //$scope.goSingle = function () {
      //  $rootScope.$broadcast('show.peopleSelectPanel');
      //  //$state.go('menu.dashboard_single');
      //};

      $scope.goSingle = function (user_id) {
        $state.go('menu.dashboard_single', {type: $scope.type, user_id: user_id})
      }
    }]);

/**
 * Created by zenghong on 16/1/5.
 */
angular.module('agilisales')
  .controller('DashboardSingleCtrl', ['$scope', '$rootScope', '$state', '$stateParams', 'DashboardService',
    function ($scope, $rootScope, $state, $stateParams, DashboardService) {
      $scope.type = $stateParams.type;
      $scope.user_id = $stateParams.user_id;
      $scope.sortItems = [];
      DashboardService.getRange(false, $scope.type, {user_id: $scope.user_id}).then(function (data) {
        if (!data.err) {
          $scope.setItemText(data)
        }
        console.log(data);
      }, function (data) {
        console.log(data);
      });

      $scope.setItemText = function (items) {
        switch ($scope.type) {
          case 'dutytime':
            $scope.setDutyItemText(items);
            break;
        }
      };

      $scope.setDutyItemText = function (items) {
        items.forEach(function (item) {
          item.sort_text = item.date + ' ' + item.onduty.done_time_format + ' - ' + (item.offduty.done_time_format||'未知');
        });
        $scope.sortItems = items;
      };

      $scope.showFiltrate = function () {
        $rootScope.$broadcast('show.filtratePanel');
      };
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
  .controller('HomeCtrl', ['$scope', '$rootScope', 'AuthService', function ($scope, $rootScope, AuthService) {
    if (!AuthService.isLoggedIn()) {
      $rootScope.$broadcast('show.signinPanel');
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
  .controller('NearbyShopListCtrl', ['$scope', '$state', '$rootScope', function ($scope, $state, $rootScope) {
    $scope.showShopPanel = function () {
      $rootScope.$broadcast('show.shopCreatePanel');
    };

    $scope.showMapPanel = function () {
      $rootScope.$broadcast('show.mapPanel');
    };
  }]);

/**
 * Created by zenghong on 16/1/6.
 */
angular.module('agilisales')
  .controller('PhotosCtrl', ['$scope', '$state', '$rootScope', function ($scope, $state, $rootScope) {
    $scope.showPhotoSelectPanel = function () {
      $rootScope.$broadcast('show.photoSelectPanel');
    }
  }]);


/**
 * Created by zenghong on 16/1/5.
 */
angular.module('agilisales')
  .controller('PlanCtrl', ['$scope', '$state', '$rootScope', function ($scope, $state, $rootScope) {
    $scope.options = {
      defaultDate: new Date(),
      dayNamesLength: 1, // 1 for "M", 2 for "Mo", 3 for "Mon"; 9 will show full day names. Default is 1.
      mondayIsFirstDay: true,//set monday as first day of week. Default is false
      eventClick: function (date) { // called before dateClick and only if clicked day has events
        console.log(date);
      },
      dateClick: function (date) { // called every time a day is clicked
        console.log(date);
      },
      changeMonth: function (month, year) {
        console.log(month, year);
      },
      filteredEventsChange: function (filteredEvents) {
        console.log(filteredEvents);
      }
    };

    $scope.events = [
      {foo: 'bar', eventClass: 'expired', date: "2015-08-18"}, //value of eventClass will be added to CSS class of the day element
      {foo: 'bar', date: "2015-08-20"}
    ];

    $scope.goEventsCreate = function () {
      $rootScope.$broadcast('show.eventsSelectPanel');
    };

    $scope.showPeopleSelectPanel = function () {
      $rootScope.$broadcast('show.peopleSelectPanel');
    };
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
  .controller('PunchCtrl', ['$scope', '$rootScope', '$state', 'PunchService', function ($scope, $rootScope, $state, PunchService) {
    $scope.todayPunch = {};
    $scope.getTodayPunch = function () {
      PunchService.getTodayPunch().then(function (data) {
        console.log(data);
        if (data.err) {
          return;
        }
        $scope.todayPunch = data;

      }, function (data) {
        console.log(data);
      });
    };

    $scope.punch = function (type, photo) {
      PunchService.punch(type, photo).then(function (data) {
        if (!data.err) {
          $scope.todayPunch = data;
        }
        console.log(data);
      }, function (data) {
        console.log(data);
      });
    };

    $scope.clickOnduty = function () {
      var info = {};
      if ($scope.todayPunch.onduty.is_done) {
        info.title = '查看';
        info.sub_title = '上班打卡:' + $scope.todayPunch.offduty.done_time_format;
        info.is_browser = true;
        info.submit_text = '确认';
        info.photos = [{value: $scope.todayPunch.onduty.photo}]
      }
      else {
        info.title = '上班打卡拍照';
        info.sub_title = '上班打卡照片';
        info.is_browser = false;
        info.submit_text = '提交';
        info.number = 1;
        info.photos = [];
        info.callback = function (info) {
          $scope.punch('onduty', info.photos[0].value);
        }
      }
      $rootScope.$broadcast('show.photoPanel', info);
    };

    $scope.clickOffduty = function () {
      var info = {};
      if ($scope.todayPunch.offduty.is_done) {
        info.title = '查看';
        info.sub_title = '下班打卡:' + $scope.todayPunch.offduty.done_time_format;
        info.submit_text = '确认';
        info.is_browser = true;
        info.photos = [{value: $scope.todayPunch.offduty.photo}]
      }
      else {
        info.title = '下班打卡拍照';
        info.sub_title = '下班打卡';
        info.submit_text = '提交';
        info.is_browser = false;
        info.number = 1;
        info.photos = [];
        info.callback = function (info) {
          $scope.punch('offduty', info.photos[0].value);
        }
      }
      $rootScope.$broadcast('show.photoPanel', info);
    };

    $scope.getTodayPunch();

    $scope.goDetail = function () {
      $state.go('menu.punch_detail');
    };

    $scope.goDashboard = function () {
      $state.go('menu.dashboard_multi', {type: 'dutytime'});
    };

    $scope.showPhotoPanel = function () {
      $rootScope.$broadcast('show.photoPanel');
    };

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
  .controller('ShopListCtrl', ['$scope', '$rootScope', '$state', function ($scope, $rootScope, $state) {
    $scope.goShopCreate = function () {
      $rootScope.$broadcast('show.shopCreatePanel');
    }
  }]);

/**
 * Created by zenghong on 15/12/27.
 */
