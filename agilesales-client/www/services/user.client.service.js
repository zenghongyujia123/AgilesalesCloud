/**
 * Created by zenghong on 16/2/4.
 */
angular.module('agilisales').factory('UserService', ['HttpService', function (HttpService) {
  return {
    getMe: function () {
      return HttpService.get('/app/user/me', {});
    },
    signin: function (username, password) {
      return HttpService.post('/app/user/signin', {username: username, password: password});
    }
  };
}]);
