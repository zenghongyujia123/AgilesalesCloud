/**
 * Created by zenghong on 16/1/21.
 */
angular.module('agilesales-web').factory('CardService', ['HttpService', function (HttpService) {
  return {
    createCardTemplate: function (title, role) {
      return HttpService.post('/webapp/card_template/create', {title: title, role: role});
    }
  };
}]);