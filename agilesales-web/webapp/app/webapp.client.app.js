/**
 * Created by zenghong on 16/1/15.
 */
'use strict';

var agilesales = angular.module('agilesales-web', [
  'ui.router'
//  'LocalStorageModule'
]);

angular.module('agilesales-web').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'templates/home.client.view.html',
      controller: "HomeCtrl"
    })
    .state('basedata_home', {
      url: '/basedata_home',
      templateUrl: 'templates/basedata_home.client.view.html',
      controller: "BasedataHomeCtrl"
    })
    .state('card_home', {
      url: '/card_home',
      templateUrl: 'templates/card_home.client.view.html',
      controller: "CardHomeCtrl"
    })
  ;
  $urlRouterProvider.otherwise('/');
}]);


//zhuzhuqs.config(['localStorageServiceProvider', function (localStorageServiceProvider) {
//  localStorageServiceProvider.setPrefix('ag-web');
//}]);

//zhuzhuqs.config(['$httpProvider', function ($httpProvider) {
//  $httpProvider.interceptors.push('PublicInterceptor');
//
//  $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
//  /**
//   * The workhorse; converts an object to x-www-form-urlencoded serialization.
//   * @param {Object} obj
//   * @return {String}
//   */
//  var param = function (obj) {
//    var query = '', name, value, fullSubName, subName, subValue, innerObj, i;
//    for (name in obj) {
//      value = obj[name];
//
//      if (value instanceof Array) {
//        for (i = 0; i < value.length; ++i) {
//          subValue = value[i];
//          fullSubName = name + '[' + i + ']';
//          innerObj = {};
//          innerObj[fullSubName] = subValue;
//          query += param(innerObj) + '&';
//        }
//      }
//      else if (value instanceof Object) {
//        for (subName in value) {
//          subValue = value[subName];
//          fullSubName = name + '[' + subName + ']';
//          innerObj = {};
//          innerObj[fullSubName] = subValue;
//          query += param(innerObj) + '&';
//        }
//      }
//      else if (value !== undefined && value !== null)
//        query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
//    }
//    return query.length ? query.substr(0, query.length - 1) : query;
//  };
//
//  // Override $http service's default transformRequest
//  $httpProvider.defaults.transformRequest = [function (data) {
//    return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
//  }];
//}]);


//zhuzhuqs.run(
//  ['$rootScope', '$state', '$location', 'Auth', 'User', 'config', 'GlobalEvent', '$window', 'dateRangePickerConfig',
//    function ($rootScope, $state, $location, Auth, User, config, GlobalEvent, $window, dateRangePickerConfig) {
//      //dateRangePickerConfig.separator = ' ~ ';
//      //dateRangePickerConfig.format = 'YY/MM/DD HH:mm';
//      //
//      //$rootScope.showLoading = false;
//      //$rootScope.showMasking = false;
//      //$rootScope.$on(GlobalEvent.onShowLoading, function (event, bo) {
//      //  $rootScope.showLoading = bo;
//      //});
//      //$rootScope.$on(GlobalEvent.onShowMasking, function (event, bo) {
//      //  $rootScope.showMasking = bo;
//      //});
//      //$rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
//      //  var to = document.getElementById('error3').getAttribute('data-value');
//      //  if (to != "") {
//      //    Auth.setToken(to);
//      //  }
//      //  else {
//      //    if (Auth.getToken() == "") {
//      //      event.preventDefault();
//      //      window.location = config.login;
//      //    }
//      //  }
//      //  //判断用户数据是否存在
//      //  if (!Auth.isLoggedIn()) {
//      //    event.preventDefault();
//      //    //没有用户数据，需要重新获取用户，页面可能需要被重定向
//      //    User.getMe(Auth.getToken())
//      //      .then(function (data) {
//      //          if (data.err) {
//      //            return window.location = config.login;
//      //          }
//      //          Auth.setUser(data);
//      //          if (!data.company) {
//      //            //当前用户信息需要补充
//      //            return $state.go('company_info');
//      //          }
//      //          if (!data.nickname) {
//      //            return $state.go('personal_info');
//      //          }
//      //          var obj = Auth.getLatestUrl();
//      //          var state = 'home';
//      //          var params = '';
//      //          if (obj && obj != '^' && obj.state) {
//      //            state = obj.state;
//      //            params = obj.params;
//      //          }
//      //          return $state.go(state, params);
//      //        },
//      //        function (err) {
//      //          alert('系统错误' + JSON.stringify(err));
//      //        });
//      //  }
//      //});
//      //var windowElement = angular.element($window);
//      //windowElement.on('beforeunload', function (event) {
//      //  Auth.setLatestUrl($state.current.name, $state.params);
//      //});
//    }]);
//
//zhuzhuqs.config(function () {
//  //为了解决IE9下，console对象为空的问题。
//  // 此时浏览器没有log输出，如果打开了调试器，则console对象存在，可正常输出log，不过需要刷新。
//  if (!window.console) {
//    window.console = {
//      log: function () {
//      }
//    };
//  }
//
//});

//zhuzhuqs.run(['Angularytics', '$rootScope', '$timeout', function (Angularytics, $rootScope, $timeout) {
//  Angularytics.init();
//}]);

//ga.js
//(function (i, s, o, g, r, a, m) {
//  i['GoogleAnalyticsObject'] = r;
//  i[r] = i[r] || function () {
//    (i[r].q = i[r].q || []).push(arguments)
//  }, i[r].l = 1 * new Date();
//  a = s.createElement(o),
//    m = s.getElementsByTagName(o)[0];
//  a.async = 1;
//  a.src = g;
//  m.parentNode.insertBefore(a, m)
//})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
//
//ga('create', 'UA-8594346-14', 'auto');
//ga('send', 'pageview');
//
