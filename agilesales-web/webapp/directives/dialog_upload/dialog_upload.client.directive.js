/**
 * Created by zenghong on 16/1/18.
 */
angular.module('agilesales-web').directive('agDialogUpload', ['$rootScope', function ($rootScope) {
  return {
    restrict: 'AE',
    templateUrl: 'directives/dialog_upload/dialog_upload.client.view.html',
    replace: true,
    scope: {},
    link: function ($scope, $element, $attrs) {
      $scope.info = {
        title: '',
        contents: [{
          key: '请输入拜访卡名称',
          value: '点击输入名称'
        }],
        color: 'blue'
      };

      $scope.show = function () {
        $element.addClass('show');
      };
      $scope.hide = function () {
        $element.removeClass('show');
      };
      $scope.submit = function(){
        $element.removeClass('show');
      };
      $rootScope.$on('show.dialogUpload', function (event, data) {
        setTheme(data);
        $scope.show();
      });

      function setTheme(info) {
        $element.find('.ag-dialog-panel').removeClass($scope.info.color).addClass(info.color);
        $scope.info = info;
      }
    }
  }
}]);