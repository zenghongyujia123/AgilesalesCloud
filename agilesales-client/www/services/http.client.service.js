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
