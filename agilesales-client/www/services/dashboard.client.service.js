/**
 * Created by zenghong on 16/2/5.
 */
/**
 * Created by zenghong on 16/2/4.
 */
angular.module('agilisales').factory('DashboardService', ['HttpService', function (HttpService) {
  return {
    //onduty offduty
    getMultiPeopleRange: function (url, data) {
      return HttpService.get(url, data);
    },
    getSinglePeopleRange: function (url, data) {
      return HttpService.get(url, data);
    }
  };
}]);
