angular.module('agilisales').directive('agMultiSelectQuestion', ['$rootScope', function ($rootScope) {
  return {
    restrict: 'AE',
    template: ' <div class="ag-row-container ag-multi-select-question"> \
                  <div class="ag-row-item">\
                    <div class="left">填空题</div> \
                    <div class="right">请选择</div>\
                  </div> \
                </div>',
    replace: true,
    scope: {},
    link: function ($scope, $element, $attrs) {
      $element.click(function () {
        $rootScope.$broadcast('show.multiSelectPanel');
      });
    }
  };
}]);
