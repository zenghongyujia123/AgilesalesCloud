angular.module('agilisales').directive('agBlankQuestion', [function () {
  return {
    restrict: 'AE',
    template: ' <div class="ag-row-container ag-blank-question"> \
                  <div class="ag-row-item">\
                    <div class="left">填空题</div> \
                    <div class="right">\
                      <input type="text" placeholder="请输入">\
                    </div>\
                  </div> \
                </div>',
    replace: true,
    scope: {},
    link: function ($scope, $element, $attrs) {

    }
  };
}]);
