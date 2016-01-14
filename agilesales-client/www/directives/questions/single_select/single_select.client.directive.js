/**
 * Created by zenghong on 16/1/14.
 */

angular.module('agilisales').directive('agSingleSelectQuestion', [function () {
  return {
    restrict: 'AE',
    template: ' <div class="ag-row-container ag-single-select-question"> \
                  <div class="ag-row-item">\
                    <div class="left">主陈列形式</div> \
                    <select class="right" placeho>\
                      <option value="" disabled="true">请选择</option>\
                      <option ng-repeat="option in options">{{option}}</option> \
                    </select>\
                  </div> \
                </div>',
    replace: true,
    scope: {},
    link: function ($scope, $element, $attrs) {

      $scope.options = $attrs.options || ['货架', '货架1'];
      console.log($attrs);
    }
  };
}]);
