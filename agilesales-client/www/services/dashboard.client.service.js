/**
 * Created by zenghong on 16/2/5.
 */
/**
 * Created by zenghong on 16/2/4.
 */
angular.module('agilisales').factory('DashboardService', ['HttpService', function (HttpService) {
  return {
    //onduty offduty
    getRange: function (type, info) {
      switch (type) {
        case 'multi_dutytime':
          return this.getMultiDutyTimeRange(info);
        case 'single_dutytime':
          return this.getMultiDutyTimeRange(info);
      }
    },
    getMultiDutyTimeRange: function (info) {
      return HttpService.get('/app/dashboard/multi/dutytime', info);
    },
    getSingleDutyTimeRange: function (info) {
      return HttpService.get('/app/dashboard/single/dutytime', info);
    }
  };
}]);
