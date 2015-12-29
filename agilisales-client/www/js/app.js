// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('agilisales', ['ionic', 'ngCordova'])

  .run(function ($ionicPlatform) {
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
    });
  })

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('home', {
        url: '/home',
        abstract: true,
        templateUrl: 'templates/home.client.view.html',
        controller: 'HomeCtrl'
      })

      .state('home.dashboard', {
        url: '/dashboard',
        views: {
          'menuContent': {
            templateUrl: 'templates/dashboard.client.view.html'
          }
        }
      })

      .state('home.nearby', {
        url: '/nearby',
        views: {
          'menuContent': {
            templateUrl: 'templates/nearby.client.view.html'
          }
        }
      })
      .state('home.setting', {
        url: '/setting',
        views: {
          'menuContent': {
            templateUrl: 'templates/setting.client.view.html'
          }
        }
      })

      .state('home.photos', {
        url: '/photos',
        views: {
          'menuContent': {
            templateUrl: 'templates/photos.client.view.html',
            controller: 'PlaylistCtrl'
          }
        }
      })
      .state('home.punch', {
        url: '/punch',
        views: {
          'menuContent': {
            templateUrl: 'templates/punch.client.view.html'
          }
        }
      })
      .state('home.punch_detail', {
        url: '/punch_detail',
        views: {
          'menuContent': {
            templateUrl: 'templates/punch_detail.client.view.html'
          }
        }
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/home/photos');
  });
