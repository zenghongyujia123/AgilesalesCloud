/**
 * Created by zenghong on 16/1/21.
 */
angular.module('agilesales-web').factory('AuthService', ['localStorageService', function (localStorageService) {
  var access_token = '';
  var user = null;
  return {
    setToken: function (t) {
      token = t;
      localStorageService.set('access_token', t);
    },
    getToken: function () {
      if (token == "") {
        var local = localStorageService.get('access_token');
        if (!local || local == "" || local == "<%=  test %>") {
          localStorageService.set('token', "");
          token = "";
        }
        else {
          token = local;
        }
      }
      return token;
    },
    getUser: function () {
      return user;
    },
    setUser: function (u) {
      user = u;
      $rootScope.$broadcast('onUserReset');
    }
  };
}]);