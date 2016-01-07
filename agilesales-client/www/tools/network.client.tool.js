/**
 * Created by zenghong on 16/1/7.
 */
angular.module('agilisales').factory('NetworkTool', ['$cordovaNetwork', function ($cordovaNetwork) {
  return {
    isOnline: function () {
      return $cordovaNetwork.isOnline();
    }
  }
}]);
