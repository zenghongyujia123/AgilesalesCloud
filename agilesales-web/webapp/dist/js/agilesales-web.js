/**
 * Created by zenghong on 16/1/15.
 */
'use strict';

var agilesales = angular.module('agilesales-web', [
  'ui.router'
//  'LocalStorageModule'
]);

angular.module('agilesales-web').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'templates/home.client.view.html',
      controller: "HomeCtrl"
    })
    .state('basedata_home', {
      url: '/basedata_home',
      templateUrl: 'templates/basedata_home.client.view.html',
      controller: "BasedataHomeCtrl"
    })
    .state('basedata_home.basedata_area', {
      url: '/basedata_area',
      templateUrl: 'templates/basedata_area.client.view.html',
      controller: "BasedataAreaCtrl"
    })
    .state('basedata_home.basedata_customer', {
      url: '/basedata_customer',
      templateUrl: 'templates/basedata_customer.client.view.html',
      controller: "BasedataCustomerCtrl"
    })
    .state('basedata_home.basedata_people', {
      url: '/basedata_people',
      templateUrl: 'templates/basedata_people.client.view.html',
      controller: "BasedataPeopleCtrl"
    })
    .state('basedata_home.basedata_shop', {
      url: '/basedata_shop',
      templateUrl: 'templates/basedata_shop.client.view.html',
      controller: "BasedataShopCtrl"
    })
    .state('basedata_home.basedata_sku', {
      url: '/basedata_sku',
      templateUrl: 'templates/basedata_sku.client.view.html',
      controller: "BasedataSkuCtrl"
    })
    .state('card_home', {
      url: '/card_home',
      templateUrl: 'templates/card_home.client.view.html',
      controller: "CardHomeCtrl"
    })
    .state('card_edit', {
      url: '/card_edit',
      templateUrl: 'templates/card_edit.client.view.html',
      controller: "CardEditCtrl"
    })
    .state('card_edit.card_config', {
      url: '/card_config',
      templateUrl: 'templates/card_config.client.view.html'
    })
    .state('card_edit.card_preview', {
      url: '/card_preview',
      templateUrl: 'templates/card_preview.client.view.html'
    })
  ;
  $urlRouterProvider.otherwise('/');
}]);


//zhuzhuqs.config(['localStorageServiceProvider', function (localStorageServiceProvider) {
//  localStorageServiceProvider.setPrefix('ag-web');
//}]);

//zhuzhuqs.config(['$httpProvider', function ($httpProvider) {
//  $httpProvider.interceptors.push('PublicInterceptor');
//
//  $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
//  /**
//   * The workhorse; converts an object to x-www-form-urlencoded serialization.
//   * @param {Object} obj
//   * @return {String}
//   */
//  var param = function (obj) {
//    var query = '', name, value, fullSubName, subName, subValue, innerObj, i;
//    for (name in obj) {
//      value = obj[name];
//
//      if (value instanceof Array) {
//        for (i = 0; i < value.length; ++i) {
//          subValue = value[i];
//          fullSubName = name + '[' + i + ']';
//          innerObj = {};
//          innerObj[fullSubName] = subValue;
//          query += param(innerObj) + '&';
//        }
//      }
//      else if (value instanceof Object) {
//        for (subName in value) {
//          subValue = value[subName];
//          fullSubName = name + '[' + subName + ']';
//          innerObj = {};
//          innerObj[fullSubName] = subValue;
//          query += param(innerObj) + '&';
//        }
//      }
//      else if (value !== undefined && value !== null)
//        query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
//    }
//    return query.length ? query.substr(0, query.length - 1) : query;
//  };
//
//  // Override $http service's default transformRequest
//  $httpProvider.defaults.transformRequest = [function (data) {
//    return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
//  }];
//}]);


//zhuzhuqs.run(
//  ['$rootScope', '$state', '$location', 'Auth', 'User', 'config', 'GlobalEvent', '$window', 'dateRangePickerConfig',
//    function ($rootScope, $state, $location, Auth, User, config, GlobalEvent, $window, dateRangePickerConfig) {
//      //dateRangePickerConfig.separator = ' ~ ';
//      //dateRangePickerConfig.format = 'YY/MM/DD HH:mm';
//      //
//      //$rootScope.showLoading = false;
//      //$rootScope.showMasking = false;
//      //$rootScope.$on(GlobalEvent.onShowLoading, function (event, bo) {
//      //  $rootScope.showLoading = bo;
//      //});
//      //$rootScope.$on(GlobalEvent.onShowMasking, function (event, bo) {
//      //  $rootScope.showMasking = bo;
//      //});
//      //$rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
//      //  var to = document.getElementById('error3').getAttribute('data-value');
//      //  if (to != "") {
//      //    Auth.setToken(to);
//      //  }
//      //  else {
//      //    if (Auth.getToken() == "") {
//      //      event.preventDefault();
//      //      window.location = config.login;
//      //    }
//      //  }
//      //  //判断用户数据是否存在
//      //  if (!Auth.isLoggedIn()) {
//      //    event.preventDefault();
//      //    //没有用户数据，需要重新获取用户，页面可能需要被重定向
//      //    User.getMe(Auth.getToken())
//      //      .then(function (data) {
//      //          if (data.err) {
//      //            return window.location = config.login;
//      //          }
//      //          Auth.setUser(data);
//      //          if (!data.company) {
//      //            //当前用户信息需要补充
//      //            return $state.go('company_info');
//      //          }
//      //          if (!data.nickname) {
//      //            return $state.go('personal_info');
//      //          }
//      //          var obj = Auth.getLatestUrl();
//      //          var state = 'home';
//      //          var params = '';
//      //          if (obj && obj != '^' && obj.state) {
//      //            state = obj.state;
//      //            params = obj.params;
//      //          }
//      //          return $state.go(state, params);
//      //        },
//      //        function (err) {
//      //          alert('系统错误' + JSON.stringify(err));
//      //        });
//      //  }
//      //});
//      //var windowElement = angular.element($window);
//      //windowElement.on('beforeunload', function (event) {
//      //  Auth.setLatestUrl($state.current.name, $state.params);
//      //});
//    }]);
//
//zhuzhuqs.config(function () {
//  //为了解决IE9下，console对象为空的问题。
//  // 此时浏览器没有log输出，如果打开了调试器，则console对象存在，可正常输出log，不过需要刷新。
//  if (!window.console) {
//    window.console = {
//      log: function () {
//      }
//    };
//  }
//
//});

//zhuzhuqs.run(['Angularytics', '$rootScope', '$timeout', function (Angularytics, $rootScope, $timeout) {
//  Angularytics.init();
//}]);

//ga.js
//(function (i, s, o, g, r, a, m) {
//  i['GoogleAnalyticsObject'] = r;
//  i[r] = i[r] || function () {
//    (i[r].q = i[r].q || []).push(arguments)
//  }, i[r].l = 1 * new Date();
//  a = s.createElement(o),
//    m = s.getElementsByTagName(o)[0];
//  a.async = 1;
//  a.src = g;
//  m.parentNode.insertBefore(a, m)
//})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
//
//ga('create', 'UA-8594346-14', 'auto');
//ga('send', 'pageview');
//

/**
 * Created by zenghong on 16/1/19.
 */
angular.module('agilesales-web').directive('agGlobalEvent', ['$window', function ($window) {
  return {
    restrict: 'AE',
    link: function ($scope, $element, $attrs) {
      $(window).resize(function () {
        $element.height($(this).height()-60);
      }).resize();
    }
  }
}]);
/**
 * Created by zenghong on 16/1/19.
 */
angular.module('agilesales-web').directive('agHoverShake', [function () {
  return {
    restrict: 'AE',
    link: function ($scope, $element, $attrs) {
      $element.mouseover(function () {
        $element.find('.icon').addClass('animated ' + $attrs.agHoverShake + '');
      });
      $element.mouseleave(function () {
        $element.find('.icon').removeClass('animated ' + $attrs.agHoverShake + '');
      });
    }
  }
}]);
/**
 * Created by zenghong on 16/1/19.
 */

/**
 * Created by zenghong on 16/1/18.
 */
angular.module('agilesales-web').directive('agDialogConfirm', function () {
  return {
    restrict: 'AE',
    templateUrl: 'directives/dialog_confirm/dialog_confirm.client.view.html',
    replace: true,
    scope: {},
    link: function ($scope, $element, $attrs) {

    }
  }
});
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
/**
 * Created by zenghong on 16/1/18.
 */
angular.module('agilesales-web').directive('agDialogSelect', ['$rootScope',function ($rootScope) {
  return {
    restrict: 'AE',
    templateUrl: 'directives/dialog_select/dialog_select.client.view.html',
    replace: true,
    scope: {},
    link: function ($scope, $element, $attrs) {
      $scope.options = [];
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
        $element.find('.ag-dialog-panel').addClass('animated rotateIn');
      };
      $scope.hide = function () {
        $element.removeClass('show');
        $element.find('.ag-dialog-panel').removeClass('animated rotateIn')
      };
      $scope.submit = function(){
        $element.removeClass('show');
        $element.find('.ag-dialog-panel').removeClass('animated rotateIn')
      };
      $scope.toggleOptions = function (index) {
        if ($element.find('.ag-row-option-container').eq(index).hasClass('show')) {
          $scope.hideOptions(index);
        }
        else {
          $scope.showOptions(index);
        }
      };
      $rootScope.$on('show.dialogSelect', function (event, data) {
        setTheme(data);
        $scope.show();
      });
      function setTheme(info) {
        $element.find('.ag-dialog-panel').removeClass($scope.info.color).addClass(info.color);
        $scope.info = info;
      }
      $scope.showOptions = function (index) {
        $element.find('.ag-row-option-container').eq(index).addClass('show');
      };
      $scope.hideOptions = function (index) {
        $element.find('.ag-row-option-container').eq(index).removeClass('show');
      }
    }
  }
}]);
/**
 * Created by zenghong on 16/1/18.
 */
angular.module('agilesales-web').directive('agQuestionBlank', function () {
  return {
    restrict: 'AE',
    templateUrl: 'directives/question_blank/question_blank.client.view.html',
    replace: true,
    scope: {},
    link: function ($scope, $element, $attrs) {

    }
  }
});
/**
 * Created by zenghong on 16/1/18.
 */
angular.module('agilesales-web').directive('agDialogInput', ['$rootScope', function ($rootScope) {
  return {
    restrict: 'AE',
    templateUrl: 'directives/dialog_input/dialog_input.client.view.html',
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
        $element.find('.ag-dialog-panel').addClass('animated rotateIn');
      };
      $scope.hide = function () {
        $element.removeClass('show');
        $element.find('.ag-dialog-panel').removeClass('animated rotateIn')
      };
      $scope.submit = function(){
        $element.removeClass('show');
        $element.find('.ag-dialog-panel').removeClass('animated rotateIn')
      };
      $rootScope.$on('show.dialogInput', function (event, data) {
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
/**
 * Created by zenghong on 16/1/18.
 */
angular.module('agilesales-web').directive('agQuestionSingle', function () {
  return {
    restrict: 'AE',
    templateUrl: 'directives/question_single/question_single.client.view.html',
    replace: true,
    scope: {},
    link: function ($scope, $element, $attrs) {

    }
  }
});
/**
 * Created by zenghong on 16/1/18.
 */
angular.module('agilesales-web').directive('agQuestionTable', function () {
  return {
    restrict: 'AE',
    templateUrl: 'directives/question_table/question_table.client.view.html',
    replace: true,
    scope: {},
    link: function ($scope, $element, $attrs) {

    }
  }
});
/**
 * Created by zenghong on 16/1/18.
 */
angular.module('agilesales-web').directive('agQuestionTrueFalse', function () {
  return {
    restrict: 'AE',
    templateUrl: 'directives/question_true_false/question_true_false.client.view.html',
    replace: true,
    scope: {},
    link: function ($scope, $element, $attrs) {

    }
  }
});
/**
 * Created by zenghong on 16/1/15.
 */
angular.module('agilesales-web').controller('BasedataAreaCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
  $scope.addCol = function () {
    $rootScope.$broadcast('show.dialogInput', {
      title: '添加列',
      contents: [{
        key: '请输入列的名称',
        value: '取个名字'
      }],
      color: 'blue'
    });
  };

  $scope.removeCol = function () {
    $rootScope.$broadcast('show.dialogInput', {
      title: '删除列',
      contents: [{
        key: '请选择需要删除的列',
        value: '大区'
      }],
      color: 'red'
    });
  };
}]);
/**
 * Created by zenghong on 16/1/15.
 */
angular.module('agilesales-web').controller('BasedataCustomerCtrl',[ '$scope',function ($scope) {
  $scope.peoples = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  $scope.values = [
    '客户编码', '客户等级', '客户名称',
    '客户简称', '客户性质', '渠道类型',
    '所辖区域', '省份', '城市',
    '地址', '送货地址', '电话',
    '联系人', '负责人编号', '负责人姓名'
  ];
}]);
/**
 * Created by zenghong on 16/1/15.
 */
angular.module('agilesales-web').controller('BasedataHomeCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
  $scope.showUpload = function () {
    $rootScope.$broadcast('show.dialogUpload', {
      title: '上传地区',
      contents: [{
        key: '请选择需要上传的地区文件',
        value: '点击选择文件'
      }],
      color: 'blue'
    });
  };
}]);
/**
 * Created by zenghong on 16/1/15.
 */
angular.module('agilesales-web').controller('BasedataPeopleCtrl', ['$scope', function ($scope) {
  $scope.peoples = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  $scope.values = [
    '人员编号', '工号', '姓名',
    '岗位', '职务', '电话号码',
    '邮箱', '性别', '上级领导编号',
    '上级领导姓名', '常驻城市', '辖区',
    '帐号开通日期', '在职状态', '人员类型'
  ];
}]);
/**
 * Created by zenghong on 16/1/15.
 */
angular.module('agilesales-web').controller('BasedataShopCtrl', ['$scope',function ($scope) {
  $scope.peoples = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  $scope.values = [
    '门店编码', '门店名称', '门店等级',
    '所属区域', '所属城市', '地址',
    '渠道类型', '门店类型', '渠道',
    '所属客户', '业务人员', '促销人员',
    '月拜访频次', '门店状态', '品牌','经度','纬度'
  ];

}]);
/**
 * Created by zenghong on 16/1/15.
 */
angular.module('agilesales-web').controller('BasedataSkuCtrl', ['$scope',function ($scope) {
  $scope.peoples = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  $scope.values = [
    '产品编号', '产品条码', '产品名称',
    '产品简介', '品牌', '系列',
    '大类', '小类', '包装单位',
    '规格', '系统供价', '价格',
    '产品等级', '是否新品', '是否重点产品',
    '是否档期促销'
  ];

}]);
/**
 * Created by zenghong on 16/1/15.
 */
angular.module('agilesales-web').controller('CardEditCtrl', ['$scope', '$rootScope', '$state', function ($scope, $rootScope, $state) {
  $scope.addPaper = function () {
    $rootScope.$broadcast('show.dialogInput', {
      title: '添加试卷',
      contents: [{
        key: '请输入试卷名称',
        value: '点击输入名称'
      }],
      color: 'blue'
    });
  };
  $scope.location = window.location;
}]);
/**
 * Created by zenghong on 16/1/15.
 */
angular.module('agilesales-web').controller('CardHomeCtrl', ['$scope', '$rootScope', '$state', function ($scope, $rootScope, $state) {
  $scope.cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  $scope.goEdit = function () {
    $state.go('card_edit');
  };
  $scope.showCardAdd = function () {
    $rootScope.$broadcast('show.dialogSelect', {
      title: '添加拜访卡',
      contents: [{
        key: '请输入拜访卡名称',
        value: '点击输入名称',
        options: ['ahha', 'jaja', 'sdfadfs']
      },
        {
          key: '请输入拜访卡名称',
          value: '点击输入名称',
          options: ['ahha', 'jaja', 'sdfadfs']
        }],
      color: 'blue'

    });
  };
}]);
/**
 * Created by zenghong on 16/1/15.
 */
angular.module('agilesales-web').controller('HomeCtrl', function () {

});
/**
 * Created by zenghong on 16/1/15.
 */
angular.module('agilesales-web').controller('IndexCtrl', ['$scope',function ($scope) {
  $scope.location = window.location;
}]);