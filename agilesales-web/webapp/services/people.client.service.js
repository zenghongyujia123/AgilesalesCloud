/**
 * Created by zenghong on 16/1/26.
 */
angular.module('agilesales-web').factory('PeopleService', ['HttpService',function (HttpService) {
  return {
    uploadMultiPeoples: function (peoples) {
      return HttpService.post('/webapp/people/multi/upload', {peoples: peoples});
    },
    getPeoples: function () {
      return HttpService.get('/webapp/peoples', {});
    }
  };
}]);