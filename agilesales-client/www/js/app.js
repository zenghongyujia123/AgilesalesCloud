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