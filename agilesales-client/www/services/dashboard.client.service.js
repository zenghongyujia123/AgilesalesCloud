/**
 * Created by zenghong on 16/2/5.
 */
/**
 * Created by zenghong on 16/2/4.
 */
angular.module('agilisales').factory('DashboardService', ['HttpService', function (HttpService) {
  return {
    //onduty offduty
    getRange: function (isMulti,type ,info) {
      if(isMulti){
        switch (type) {
          case 'dutytime':
            return this.getMultiDutyTimeRange(info);
        }
      }
      else{
        switch (type) {
          case 'dutytime':
            return this.getSingleDutyTimeRange(info);
        }
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
