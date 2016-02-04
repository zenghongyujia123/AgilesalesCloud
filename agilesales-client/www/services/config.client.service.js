/**
 * Created by zenghong on 16/2/4.
 */
angular.module('agilisales').factory('ConfigService', ['$http', '$q', function ($http, $q) {
  return {
    server: 'http://192.168.11.128:3002'
  };
}]);
