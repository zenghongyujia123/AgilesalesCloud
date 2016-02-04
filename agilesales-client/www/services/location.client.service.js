/**
 * Created by zenghong on 16/2/4.
 */
angular.module('agilisales').factory('ConfigService', ['$http', '$q', function ($http, $q) {
  var curLocation = [];
  return {
    setLocation: function (lng, lat) {
      if (lng && lat) {
        curLocation = [];
        curLocation.push(lng);
        curLocation.push(lat);
      }
    },
    getLocation:function(){

    }
  };
}]);
