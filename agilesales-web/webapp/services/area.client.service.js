/**
 * Created by zenghong on 16/1/21.
 */
angular.module('agilesales-web').factory('AreaService', ['HttpService', function (HttpService) {
  return {
    updateAreaTitle: function (area) {
      return HttpService.post('/webapp/area/title/update', {area: area});
    }
  };
}]);