/**
 * Created by zenghong on 16/1/22.
 */
angular.module('agilesales-web').factory('CustomerService', ['HttpService', function (HttpService) {
  return {
    uploadMultiCustomers: function (customers) {
      return HttpService.post('/webapp/customer/multi/upload', {customers: customers});
    },
    getCustomers: function () {
      return HttpService.get('/webapp/customers', {});
    }
  };
}]);