angular.module('agilisales').directive('agTrueFalseQuestion', [function () {
  return {
    restrict: 'AE',
    template: ' <div class="ag-row-container ag-true-false-question"> \
                  <div class="ag-row-item">\
                    <div class="left">是否符合标准</div> \
                    <div class="right">\
                    <label>\
                    <input type="checkbox">\
                    <div class="ag-track">\
                        <div class="ag-handle"></div> \
                      </div> \
                    </div> \
                    </label>\
                  </div> \
                </div>',
    replace: true,
    scope: {},
    link: function ($scope, $element, $attrs) {

    }
  };
}]);
