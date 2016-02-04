/**
 * Created by zenghong on 16/2/4.
 */
angular.module('agilisales').factory('UserService', [ 'HttpService', function (HttpService) {
  return {
    getMe: function () {
      return HttpService.get('/webapp/user/me', {});
    }
  };
}]);
