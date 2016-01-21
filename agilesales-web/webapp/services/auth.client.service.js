/**
 * Created by zenghong on 16/1/21.
 */
angular.module('agilesales-web').factory('AuthService', ['localStorageService', '$rootScope', function (localStorageService, $rootScope) {
  var access_token = '';
  var user = null;
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
    isLoggedIn: function () {
      return user ? true : false;
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