/**
 * Created by zenghong on 16/2/4.
 */
angular.module('agilisales').factory('PunchService', ['HttpService', function (HttpService) {
  return {
    //onduty offduty
    getTodayPunch: function () {
      return HttpService.get('/app/punch/today', {});
    },
    punch: function (type, photo) {
      return HttpService.post('/app/punch', {type: type, photo: photo});
    }
  };
}]);
