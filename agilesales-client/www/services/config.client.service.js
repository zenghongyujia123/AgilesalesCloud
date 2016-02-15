/**
 * Created by zenghong on 16/2/4.
 */
angular.module('agilisales').factory('ConfigService', ['$http', '$q', function ($http, $q) {
  return {
    server: 'http://172.20.10.4:3002'
  };
}]);
