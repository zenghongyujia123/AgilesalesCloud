/**
 * Created by zenghong on 16/1/26.
 */
angular.module('agilesales-web').factory('PeopleService', ['HttpService', function (HttpService) {
  return {
    uploadMultiPeoples: function (customers) {
      return HttpService.post('/webapp/customer/multi/upload', {customers: customers});
    },
    getPeoples: function () {
      return HttpService.get('/webapp/customers', {});
    }
  };
}]);