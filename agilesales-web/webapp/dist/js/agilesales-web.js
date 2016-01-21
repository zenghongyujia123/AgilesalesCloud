/**
 * Created by zenghong on 16/1/15.
 */
'use strict';

var agilesales = angular.module('agilesales-web', [
  'ui.router',
  'LocalStorageModule'
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
  }])
  .config(['localStorageServiceProvider', function (localStorageServiceProvider) {
    localStorageServiceProvider.setPrefix('ag');
  }])
  .config(['$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push('PublicInterceptor');
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    /**
     * The workhorse; converts an object to x-www-form-urlencoded serialization.
     * @param {Object} obj
     * @return {String}
     */
    var param = function (obj) {
      var query = '', name, value, fullSubName, subName, subValue, innerObj, i;
      for (name in obj) {
        value = obj[name];

        if (value instanceof Array) {
          for (i = 0; i < value.length; ++i) {
            subValue = value[i];
            fullSubName = name + '[' + i + ']';
            innerObj = {};
            innerObj[fullSubName] = subValue;
            query += param(innerObj) + '&';
          }
        }
        else if (value instanceof Object) {
          for (subName in value) {
            subValue = value[subName];
            fullSubName = name + '[' + subName + ']';
            innerObj = {};
            innerObj[fullSubName] = subValue;
            query += param(innerObj) + '&';
          }
        }
        else if (value !== undefined && value !== null)
          query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
      }
      return query.length ? query.substr(0, query.length - 1) : query;
    };

    // Override $http service's default transformRequest
    $httpProvider.defaults.transformRequest = [function (data) {
      return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
    }];
  }])

  .run(['$rootScope', '$state', '$window', 'AuthService', 'UserService',
    function ($rootScope, $state, $window, AuthService, UserService) {
      $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        var to = document.getElementById('error3').getAttribute('data-value');
        if (to !== "") {
          AuthService.setToken(to);
        }
        else {
          if (AuthService.getToken() == "") {
            event.preventDefault();
            window.location = '/webapp/signin';
          }
        }
        //判断用户数据是否存在
        if (!AuthService.isLoggedIn()) {
          event.preventDefault();
          //没有用户数据，需要重新获取用户，页面可能需要被重定向
          UserService.getMe()
            .then(function (data) {
                if (data.err) {
                  return window.location = config.login;
                }
                AuthService.setUser(data);
                var obj = AuthService.getLatestUrl();
                var state = 'home';
                var params = '';
                if (obj && obj != '^' && obj.state) {
                  state = obj.state;
                  params = obj.params;
                }
                return $state.go(state, params);
              },
              function (err) {
                alert('系统错误' + JSON.stringify(err));
              });
        }
      });

      var windowElement = angular.element($window);
      windowElement.on('beforeunload', function (event) {
        AuthService.setLatestUrl($state.current.name, $state.params);
      });

    }]);
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
          tip: '点击输入名称',
          value: ''
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
      $scope.submit = function () {
        $element.removeClass('show');
        $element.find('.ag-dialog-panel').removeClass('animated rotateIn')
        if ($scope.info.callback) {
          $scope.info.callback($scope.info);
        }
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
angular.module('agilesales-web').directive('agDialogUpload', ['$rootScope', 'ExcelReaderService', function ($rootScope, ExcelReaderService) {
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
        color: 'blue',
        type: 'execel',
        headers: [
          {key: 'A1', value: '大区'},
          {key: 'B1', value: '省区'},
          {key: 'C1', value: '办事处'}
        ]
      };

      $scope.show = function () {
        $element.addClass('show');
      };
      $scope.hide = function () {
        $element.removeClass('show');
      };
      $scope.submit = function () {
        $element.removeClass('show');
      };
      $rootScope.$on('show.dialogUpload', function (event, data) {
        setTheme(data);
        $scope.show();
      });

      $scope.handleFile = function (ele) {
        var excelReader = ExcelReaderService.getReader();

        excelReader.getWorkSheet(ele, function (err, excelSheet) {
          excelReader.checkHeader(excelSheet, $scope.info.headers, function (isOurTemplate) {
            if (!isOurTemplate) {
              var a = isOurTemplate;
            }
            excelReader.getSheetData(excelSheet, $scope.info.headers, function (err, sheetData) {
              if ($scope.info.callback) {
                return $scope.info.callback(sheetData);
              }
            });
          });
        });
      };

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
angular.module('agilesales-web').factory('PublicInterceptor', ['AuthService', function (AuthService) {
  return {
    'request': function (req) {
      req.data = req.data ? req.data : {};
      req.data.access_token = AuthService.getToken();
      req.params = req.params ? req.params : {};
      req.params.access_token = AuthService.getToken();
      req.params.no_cache =new Date().getTime();
      return req;
    },
    'response': function (resp) {
      return resp;
    },
    'requestError': function (rejection) {
      return rejection;
    },
    'responseError': function (rejection) {
      return rejection;
    }
  }
}]);


/**
 * Created by zenghong on 16/1/21.
 */
angular.module('agilesales-web').factory('AreaService', ['HttpService', function (HttpService) {
  return {
    updateAreaTitle: function (area) {
      return HttpService.post('/webapp/area/title/update', {area: area});
    }
  };
}]);
/**
 * Created by zenghong on 16/1/21.
 */
angular.module('agilesales-web').factory('AuthService', ['localStorageService', '$rootScope', function (localStorageService, $rootScope) {
  var access_token = '';
  var user = null;
  return {
    setToken: function (t) {
      access_token = t;
      localStorageService.set('access_token', t);
    },
    getToken: function () {
      if (access_token == "") {
        var local = localStorageService.get('access_token');
        if (!local || local == "" || local == "<%=  test %>") {
          localStorageService.set('token', "");
          access_token = "";
        }
        else {
          access_token = local;
        }
      }
      return access_token;
    },
    getUser: function () {
      return user;
    },
    setUser: function (u) {
      user = u;
      console.log(u);
      $rootScope.$broadcast('onUserReset');
    },
    getCompany: function () {
      return user.company;
    },
    isLoggedIn: function () {
      return user ? true : false;
    },
    getLatestUrl: function () {
      return localStorageService.get(user.username + 'state') || '';
    },
    setLatestUrl: function (state, params) {
      if (user) {
        localStorageService.set(user.username + 'state', {'state': state, 'params': params});
      }
    }
  };
}]);
/**
 * Created by zenghong on 16/1/20.
 */
/**
 * Created by Wayne on 15/12/7.
 */

'use strict';
angular.module('agilesales-web').factory('ExcelReaderService', function () {

  var activeXReader = {
    getWorkSheet: function (element, callback) {
      var fileObject = document.getElementById('filename');
      fileObject.select();
      fileObject.blur();

      var filePath = document.selection.createRange().text;
      var suffix = filePath.substring(filePath.lastIndexOf('.') + 1).toLowerCase();

      if (suffix !== 'xls' && suffix != 'xlsx') {
        return callback({type: 'file_type_error', message: '选择的文件不是Excel文件'});
      }

      var excel = new ActiveXObject('Excel.Application');
      var excel_file = excel.Workbooks.open(filePath);
      var excelSheet = excel.Worksheets('Sheet1');

      console.log(excelSheet.UsedRange.Rows.Count);
      console.log(excelSheet.UsedRange.Columns.Count);

      return callback(null, excelSheet);
    },
    checkHeader: function (excelSheet, headers, callback) {
      if (!excelSheet) {
        return callback(false);
      }

      for (var column = 0; column < headers.length; column++) {
        if (excelSheet.Cells(1, column + 1).Value !== headers[column].value) {
          return callback(false);
        }
      }
      return callback(true);
    },
    isHeaderNameExist: function (excelSheet, headerColumn) {
      if (!excelSheet) {
        return false;
      }
      if (excelSheet.Cells(1, headerColumn.index + 1).Value !== headerColumn.value) {
        return false;
      }
      return true;
    },
    getSheetData: function (excelSheet, headers, callback) {
      var dataArray = [];
      var columnCount = excelSheet.UsedRange.Columns.Count;
      var data, hasValue;
      for (var row = 2; row < columnCount; row++) {
        data = {};
        hasValue = false;
        for (var column = 0; column < headers.length; column++) {
          if (excelSheet.Cells(row, column + 1).Value != undefined) {
            data[headers[column]] = excelSheet.Cells(row, column + 1).Value;
            hasValue = true;
          }
        }
        if (hasValue) {
          dataArray.push(data);
        }
      }
      //var jsonResultString = JSON.stringify(dataArray);

      if (dataArray.length === 0) {
        return callback({type: 'file_content_empty', message: '表格中没有数据'});
      }
      return callback(null, dataArray);
    }
  };

  var otherReader = {
    getWorkSheet: function (element, callback) {
      var file = element.files[0];
      var suffix = file.name.substring(file.name.lastIndexOf('.') + 1).toLowerCase();
      if (suffix !== 'xls' && suffix !== 'xlsx') {
        return callback({type: 'file_type_error', message: '选择的文件不是Excel文件'});
      }

      var reader = new FileReader();
      reader.onload = function (e) {
        var workbook;
        var isError = false;
        try {
          var binary = '';

          if (reader.readAsBinaryString) {
            binary = e.target.result;
          }
          else {
            var bytes = new Uint8Array(e.target.result);
            var length = bytes.byteLength;

            for (var i = 0; i < length; i++) {
              binary += String.fromCharCode(bytes[i]);
            }
          }

          workbook = XLSX.read(binary, {type: 'binary'});
          if (workbook.SheetNames.length <= 0) {
            return callback({type: 'file_content_empty', message: '表格中没有数据'});
          }
        }
        catch (ex) {
          isError = true;
        }
        if (isError) {
          return callback({type: 'file_parse_error', message: 'Excel文件解析失败'});
        }
        return callback(null, workbook);
      };

      if (reader.readAsBinaryString) {
        reader.readAsBinaryString(file);
      }
      else {
        reader.readAsArrayBuffer(file);
      }
    },
    checkHeader: function (workbook, headers, callback) {
      var excelSheet = workbook.Sheets.Sheet1;
      if (!excelSheet) {
        return callback(false);
      }
      for (var index = 0; index < headers.length; index++) {
        var column = 'excelSheet.' + headers[index].key;

        if (eval(column)) {
          var columnName = column + '.v';
          if (eval(columnName) !== headers[index].value) {
            return callback(false);
          }
        }
        else {
          return callback(false);
        }
      }
      return callback(true);
    },
    isHeaderNameExist: function (workbook, headerColumn) {
      var excelSheet = workbook.Sheets.Sheet1;
      if (!excelSheet) {
        return false;
      }
      var column = 'excelSheet.' + headerColumn.key;
      if (eval(column)) {
        var columnName = column + '.v';
        if (eval(columnName) === headerColumn.value) {
          return true;
        }
      }
      return false;
    },
    getSheetData: function (workbook, headers, callback) {
      //目前只取第一个sheet的内容
      var sheet1Name = workbook.SheetNames['Sheet1'];
      var xlsSheetArray = XLSX.utils.sheet_to_row_object_array(workbook.Sheets['Sheet1']);
      //var jsonResultString = JSON.stringify(xlsSheetArray);

      if (!xlsSheetArray || xlsSheetArray.length <= 0) {
        return callback({type: 'file_content_empty', message: '表格中没有数据'});
      }
      return callback(null, xlsSheetArray);
    }
  };

  return {
    getReader: function () {
      if (typeof FileReader == 'undefined') {
        return activeXReader;
      }
      return otherReader;
    },
    splitArray: function (dataArray, splitSize) {
      var newArray = [];
      var i = 0;
      while (i < dataArray.length) {
        var sliceArray = dataArray.slice(i, i + splitSize);
        newArray.push(sliceArray);
        i = i + splitSize;
      }

      return newArray;
    }
  };

});
/**
 * Created by zenghong on 16/1/21.
 */
/**
 * Created by zenghong on 16/1/21.
 */
angular.module('agilesales-web').factory('HttpService', ['$http', '$q', function ($http, $q) {
  return {
    post: function (url, params) {
      var q = $q.defer();
      $http.post(url, params)
        .success(function (data) {
          q.resolve(data);
        })
        .error(function (data) {
          q.reject(data);
        });
      return q.promise;
    },
    get: function (url, params) {
      var q = $q.defer();
      $http.get(url, {params: params})
        .success(function (data) {
          q.resolve(data);
        })
        .error(function (data) {
          q.reject(data);
        });
      return q.promise;
    }
  };
}]);
/**
 * Created by zenghong on 16/1/21.
 */
angular.module('agilesales-web').factory('UserService', [ 'HttpService', function (HttpService) {
  return {
    getMe: function () {
      return HttpService.get('/webapp/user/me', {});
    }
  };
}]);
/**
 * Created by zenghong on 16/1/15.
 */
angular.module('agilesales-web').controller('BasedataAreaCtrl', ['$scope', '$rootScope', 'AuthService', 'AreaService', function ($scope, $rootScope, AuthService, AreaService) {
  $scope.company = AuthService.getCompany();

  $scope.editColClick = function (area) {
    $rootScope.$broadcast('show.dialogInput', {
      title: '编辑列',
      contents: [{
        key: '请输入列的名称',
        tip: '取个名字',
        value: area.name
      }],
      color: 'blue',
      callback: function (info) {
        if (area.name !== info.contents[0].value) {
          area.name = info.contents[0].value;
          $scope.updateArea(area);
        }
      }
    });
  };

  $scope.updateArea = function (area) {
    AreaService.updateAreaTitle(area).then(function (data) {
      console.log(data);
    }, function (err) {
      console.log(err);
    });
  };

  $rootScope.$on('show.importAreas', function () {
    var headers = [
      {key: 'A1', value: ''},
      {key: 'B1', value: ''},
      {key: 'C1', value: ''},
      {key: 'D1', value: ''},
      {key: 'E1', value: ''},
      {key: 'F1', value: ''},
      {key: 'G1', value: ''},
      {key: 'H1', value: ''},
      {key: 'I1', value: ''},
      {key: 'J1', value: ''}
    ];

    var index = 0;
    $scope.company.areas.forEach(function (area) {
      headers[index++].value = area.name;
    });

    $rootScope.$broadcast('show.dialogUpload', {
      title: '上传地区',
      contents: [{
        key: '请选择需要上传的地区文件',
        value: '点击选择文件',
        tip: '点击选择文件'
      }],
      color: 'blue',
      headers: headers,
      callback: function (data) {
        var areas = {};
        data.forEach(function (item) {
          if (item['大区']) {
            if (!areas[item['大区']]) {
              areas[item['大区']] = {};
            }

            if (!areas[item['大区']][item['省区']]) {
              areas[item['大区']][item['省区']] = {};
            }

            if (!areas[item['大区']][item['省区']][item['办事处']]) {
              areas[item['大区']][item['省区']][item['办事处']] = {};
            }
          }
        });
        console.log(areas);
      }
    });
  });
}]);
/**
 * Created by zenghong on 16/1/15.
 */
angular.module('agilesales-web').controller('BasedataCustomerCtrl',[ '$scope',function ($scope) {
  $scope.peoples = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,21,22,23,24,25,26,27];
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
    $rootScope.$broadcast('show.importAreas');

  };

  $scope.location = window.location;
  $scope.isMenuClose = false;
  $scope.toggleMenu = function () {
    $scope.isMenuClose = !$scope.isMenuClose;
  }
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