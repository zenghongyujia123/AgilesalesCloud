angular.module("templates").run(["$templateCache", function($templateCache) {$templateCache.put("camera.client.view.html","<ion-view view-title=\"拍照测试\">\n  <ion-content>\n    <h1>拍照测试</h1>\n    <button class=\"button\" ng-click=\"getPicture()\">拍照测试</button>\n    <img ng-src=\"{{info.src}}\" style=\"width:100px;height:100px;\">\n\n    <button class=\"button\" ng-click=\"showMapPanel()\">地图测试</button>\n    <button class=\"button\" ng-click=\"showPhotoPanel()\">照片测试</button>\n\n    <button class=\"button\" ng-click=\"isOnline()\">网络测试</button>\n    <button class=\"button\" ng-click=\"getBarCode()\">扫码测试</button>\n\n    <div>\n      <input type=\"checkbox\">\n    </div>\n    <div>\n      <select>\n        <option>12</option>\n        <option>12</option>\n        <option>12</option>\n        <option>12</option>\n      </select>\n    </div>\n    <ag-single-select-question></ag-single-select-question>\n    <ag-single-select-question></ag-single-select-question>\n    <ag-true-false-question></ag-true-false-question>\n    <ag-blank-question></ag-blank-question>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("daily.client.view.html","<ion-view view-title=\"hardy的日报\" class=\"ag-daily-page\">\n  <ion-content>\n    <div class=\"daily-item\">\n      <div class=\"time\">1999-10-11 </div>\n      <div class=\"content\">今天洗了马桶</div>\n    </div>\n    <div class=\"comment\">\n      <span class=\"time\">1999-10-11 10:01</span>\n      <span class=\"name\">sisly: </span>\n      <span class=\"content\">hahha</span>\n    </div>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("daily_create.client.view.html","<ion-view view-title=\"新建日报\">\n  <ion-content>\n    <h1>新建日报</h1>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("daily_list.client.view.html","<ion-view view-title=\"报表\" class=\"ag-daily-list-page\">\n  <ion-nav-buttons side=\"right\">\n    <button class=\"button\" ng-click=\"showPeopleSelectPanel()\">\n      hardy\n    </button>\n  </ion-nav-buttons>\n  <ion-content>\n    <div class=\"title-container\">\n      <div class=\"title left\" ng-class=\"{select:info.curIndex===0}\" ng-click=\"showPage(0)\">日报</div>\n      <div class=\"title center\" ng-class=\"{select:info.curIndex===1}\" ng-click=\"showPage(1)\">周报</div>\n      <div class=\"title right\" ng-class=\"{select:info.curIndex===2}\" ng-click=\"showPage(2)\">月报</div>\n    </div>\n    <ion-slide-box active-slide=\"info.curIndex\" on-slide-changed=\"slideHasChanged($index)\" style=\"height: 100%;;\">\n      <ion-slide>\n        <div class=\"box blue\">\n          <div class=\"ag-row-container\">\n            <div class=\"ag-row-item\" ui-sref=\"menu.daily\">\n              今天拜访了什么什么什么\n            </div>\n            <div class=\"ag-row-item\">\n              今天拜访了什么什么什么\n            </div>\n            <div class=\"ag-row-item\">\n              今天拜访了什么什么什么\n            </div>\n            <div class=\"ag-row-item\">\n              今天拜访了什么什么什么\n            </div>\n            <div class=\"ag-row-item\">\n              今天拜访了什么什么什么\n            </div>\n          </div>\n        </div>\n      </ion-slide>\n      <ion-slide>\n        <div class=\"box blue\">\n          <div class=\"ag-row-container\">\n            <div class=\"ag-row-item\" ui-sref=\"menu.daily\">\n              今天拜访了什么什么什么\n            </div>\n            <div class=\"ag-row-item\">\n              今天拜访了什么什么什么\n            </div>\n            <div class=\"ag-row-item\">\n              今天拜访了什么什么什么\n            </div>\n            <div class=\"ag-row-item\">\n              今天拜访了什么什么什么\n            </div>\n            <div class=\"ag-row-item\">\n              今天拜访了什么什么什么\n            </div>\n          </div>\n        </div>\n      </ion-slide>\n      <ion-slide>\n        <div class=\"box blue\">\n          <div class=\"ag-row-container\">\n            <div class=\"ag-row-item\" ui-sref=\"menu.daily\">\n              今天拜访了什么什么什么\n            </div>\n            <div class=\"ag-row-item\">\n              今天拜访了什么什么什么\n            </div>\n            <div class=\"ag-row-item\">\n              今天拜访了什么什么什么\n            </div>\n            <div class=\"ag-row-item\">\n              今天拜访了什么什么什么\n            </div>\n            <div class=\"ag-row-item\">\n              今天拜访了什么什么什么\n            </div>\n          </div>\n        </div>\n      </ion-slide>\n    </ion-slide-box>\n  </ion-content>\n  <div class=\"ag-footer\" ng-click=\"showDailyCreate()\">\n    添加新报表\n  </div>\n\n</ion-view>\n");
$templateCache.put("dashboard.client.view.html","<ion-view view-title=\"数据统计\" class=\"ag-dashboard-page\">\n  <ion-content>\n    <div class=\"dashboard-title\">业务员</div>\n    <div class=\"dashboard-container\">\n      <div class=\"dashboard-item green left\" ng-click=\"goMuti()\">考勤统计</div>\n      <div class=\"dashboard-item blue right\" ng-click=\"goMuti()\">店内停留时间</div>\n      <div class=\"dashboard-item oringe left\" ng-click=\"goMuti()\">拜访门店数</div>\n      <div class=\"dashboard-item reddep left\"></div>\n    </div>\n    <div class=\"dashboard-title\">促销员</div>\n    <div class=\"dashboard-container\">\n      <div class=\"dashboard-item green left\" ng-click=\"goMuti()\">考勤统计</div>\n      <div class=\"dashboard-item purple right\" ng-click=\"goMuti()\">当前是否在岗</div>\n      <div class=\"dashboard-item reddep left\" ng-click=\"goMuti()\">销量统计</div>\n      <div class=\"dashboard-item reddep left\"></div>\n    </div>\n\n  </ion-content>\n</ion-view>\n");
$templateCache.put("dashboard_multi.client.view.html","<ion-view view-title=\"考勤统计\" class=\"ag-dashboard-multi-page\">\n  <ion-nav-buttons side=\"right\">\n    <button class=\"button\" ng-click=\"goSingle()\">\n      hardy\n    </button>\n  </ion-nav-buttons>\n  <ion-content>\n    <div class=\"ag-time-filtrate\" ng-click=\"showFiltrate()\">\n      <div class=\"title\">\n        近一个月每日工作时间\n      </div>\n      <div class=\"value\">\n        8.5\n      </div>\n      <div class=\"arrow\">\n        \'>\'\n      </div>\n    </div>\n    <div class=\"ag-dashboard-result\">\n      <div class=\"result-item\" style=\"width:90%\">\n        <span class=\"number\">1.</span>\n        <span class=\"name\">hardy</span>\n        <span class=\"value\">10.2小时</span>\n      </div>\n    </div>\n    <div class=\"ag-dashboard-result\">\n      <div class=\"result-item\" style=\"width:80%\">\n        <span class=\"number\">1.</span>\n        <span class=\"name\">hardy</span>\n        <span class=\"value\">10.2小时</span>\n      </div>\n    </div>\n    <div class=\"ag-dashboard-result\">\n      <div class=\"result-item\" style=\"width:70%\">\n        <span class=\"number\">1.</span>\n        <span class=\"name\">hardy</span>\n        <span class=\"value\">10.2小时</span>\n      </div>\n    </div>\n    <div class=\"ag-dashboard-result\">\n      <div class=\"result-item\" style=\"width:60%\">\n        <span class=\"number\">1.</span>\n        <span class=\"name\">hardy</span>\n        <span class=\"value\">10.2小时</span>\n      </div>\n    </div>\n    <div class=\"ag-dashboard-result\">\n      <div class=\"result-item\" style=\"width:50%\">\n        <span class=\"number\">1.</span>\n        <span class=\"name\">hardy</span>\n        <span class=\"value\">10.2小时</span>\n      </div>\n    </div>\n    <div class=\"ag-dashboard-result\">\n      <div class=\"result-item\" style=\"width:40%\">\n        <span class=\"number\">1.</span>\n        <span class=\"name\">hardy</span>\n        <span class=\"value\">10.2小时</span>\n      </div>\n    </div>\n    <div class=\"ag-dashboard-result\">\n      <div class=\"result-item\" style=\"width:30%\">\n        <span class=\"number\">1.</span>\n        <span class=\"name\">hardy</span>\n        <span class=\"value\">10.2小时</span>\n      </div>\n    </div>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("dashboard_single.client.view.html","<ion-view view-title=\"个人统计\" class=\"ag-dashboard-single-page\">\n  <ion-content>\n    <div class=\"ag-time-filtrate\" ng-click=\"showFiltrate()\">\n      <div class=\"title\">\n        近一个月每日工作时间\n      </div>\n      <div class=\"value\">\n        8.5\n      </div>\n      <div class=\"arrow\">\n        \'>\'\n      </div>\n    </div>\n    <div class=\"ag-dashboard-result\">\n      <div class=\"result-item\">\n        <span class=\"number\">2013-2-1</span>\n        <span class=\"value\">10.2小时</span>\n      </div>\n      <div class=\"result-item\">\n        <span class=\"number\">2013-2-1</span>\n        <span class=\"value\">10.2小时</span>\n      </div>\n      <div class=\"result-item\">\n        <span class=\"number\">2013-2-1</span>\n        <span class=\"value\">10.2小时</span>\n      </div>\n      <div class=\"result-item\">\n        <span class=\"number\">2013-2-1</span>\n        <span class=\"value\">10.2小时</span>\n      </div>\n      <div class=\"result-item\">\n        <span class=\"number\">2013-2-1</span>\n        <span class=\"value\">10.2小时</span>\n      </div>\n      <div class=\"result-item\">\n        <span class=\"number\">2013-2-1</span>\n        <span class=\"value\">10.2小时</span>\n      </div>\n      <div class=\"result-item\">\n        <span class=\"number\">2013-2-1</span>\n        <span class=\"value\">10.2小时</span>\n      </div>\n      <div class=\"result-item\">\n        <span class=\"number\">2013-2-1</span>\n        <span class=\"value\">10.2小时</span>\n      </div>\n      <div class=\"result-item\">\n        <span class=\"number\">2013-2-1</span>\n        <span class=\"value\">10.2小时</span>\n      </div>\n      <div class=\"result-item\">\n        <span class=\"number\">2013-2-1</span>\n        <span class=\"value\">10.2小时</span>\n      </div>\n      <div class=\"result-item\">\n        <span class=\"number\">2013-2-1</span>\n        <span class=\"value\">10.2小时</span>\n      </div>\n      <div class=\"result-item\">\n        <span class=\"number\">2013-2-1</span>\n        <span class=\"value\">10.2小时</span>\n      </div>\n      <div class=\"result-item\">\n        <span class=\"number\">2013-2-1</span>\n        <span class=\"value\">10.2小时</span>\n      </div>\n      <div class=\"result-item\">\n        <span class=\"number\">2013-2-1</span>\n        <span class=\"value\">10.2小时</span>\n      </div>\n      <div class=\"result-item\">\n        <span class=\"number\">2013-2-1</span>\n        <span class=\"value\">10.2小时</span>\n      </div>\n    </div>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("home.client.view.html","<ion-view view-title=\"今日\">\n  <ion-nav-buttons side=\"right\">\n    <button class=\"button\" ui-sref=\"menu.inform_list\">\n      通知\n    </button>\n  </ion-nav-buttons>\n  <ion-content class=\"sm-home-page\">\n    <div class=\"theme-container\">\n      <a class=\"theme-item oringe\" href=\"#/menu/punch\">上班打卡</a>\n      <a class=\"theme-item right blue\" href=\"#/menu/plan\">拜访计划</a>\n      <a class=\"theme-item green\" href=\"#/menu/shop_list\">发现新店</a>\n      <a class=\"theme-item right purple\" href=\"#/menu/daily_list\">日/周/月报</a>\n    </div>\n    <div class=\"ag-row-container\">\n      <div class=\"ag-row-item empty\"></div>\n      <div class=\"ag-row-item empty\"></div>\n      <div class=\"ag-row-item empty\"></div>\n      <div class=\"ag-row-item empty\">无事件</div>\n      <div class=\"ag-row-item empty\"></div>\n      <div class=\"ag-row-item empty\"></div>\n      <div class=\"ag-row-item empty\"></div>\n      <div class=\"ag-row-item empty\"></div>\n      <div class=\"ag-row-item empty\"></div>\n      <div class=\"ag-row-item empty\"></div>\n      <div class=\"ag-row-item empty\"></div>\n      <div class=\"ag-row-item empty\"></div>\n      <div class=\"ag-row-item empty\"></div>\n    </div>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("inform.client.view.html","<ion-view view-title=\"通知\" class=\"ag-inform-page\">\n  <ion-content>\n    <div class=\"time\">2015-10-12 15:45</div>\n    <div class=\"content\">\n      今天拜访了哈哈哈\n    </div>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("inform_list.client.view.html","<ion-view view-title=\"通知列表\" class=\"ag-inform-list-page\">\n  <ion-content ui-sref=\"menu.inform\">\n    <div class=\"ag-row-container\">\n      <div class=\"ag-row-item\">\n        今天拜访了哈哈哈\n      </div>\n      <div class=\"ag-row-item\">\n        今天拜访了哈哈哈\n      </div>\n      <div class=\"ag-row-item\">\n        今天拜访了哈哈哈\n      </div>\n      <div class=\"ag-row-item\">\n        今天拜访了哈哈哈\n      </div>\n      <div class=\"ag-row-item\">\n        今天拜访了哈哈哈\n      </div>\n      <div class=\"ag-row-item\">\n        今天拜访了哈哈哈\n      </div>\n      <div class=\"ag-row-item\">\n        今天拜访了哈哈哈\n      </div>\n      <div class=\"ag-row-item\">\n        今天拜访了哈哈哈\n      </div>\n      <div class=\"ag-row-item\">\n        今天拜访了哈哈哈\n      </div>\n      <div class=\"ag-row-item\">\n        今天拜访了哈哈哈\n      </div>\n    </div>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("login.html","<ion-modal-view>\n  <ion-header-bar>\n    <h1 class=\"title\">Login</h1>\n    <div class=\"buttons\">\n      <button class=\"button button-clear\" ng-click=\"closeLogin()\">Close</button>\n    </div>\n  </ion-header-bar>\n  <ion-content>\n    <form ng-submit=\"doLogin()\">\n      <div class=\"list\">\n        <label class=\"item item-input\">\n          <span class=\"input-label\">Username</span>\n          <input type=\"text\" ng-model=\"loginData.username\">\n        </label>\n        <label class=\"item item-input\">\n          <span class=\"input-label\">Password</span>\n          <input type=\"password\" ng-model=\"loginData.password\">\n        </label>\n        <label class=\"item\">\n          <button class=\"button button-block button-positive\" type=\"submit\">Log in</button>\n        </label>\n      </div>\n    </form>\n  </ion-content>\n</ion-modal-view>\n");
$templateCache.put("menu.client.view.html","<ion-side-menus enable-menu-with-back-views=\"false\">\n  <ion-side-menu-content>\n    <ion-nav-bar class=\"bar-stable\" align-title=\"center\">\n      <ion-nav-back-button>\n      </ion-nav-back-button>\n\n      <ion-nav-buttons side=\"left\">\n        <button class=\"button button-icon button-clear ion-navicon\" menu-toggle=\"left\">\n        </button>\n      </ion-nav-buttons>\n    </ion-nav-bar>\n    <ion-nav-view name=\"menuContent\"></ion-nav-view>\n  </ion-side-menu-content>\n\n  <ion-side-menu side=\"left\">\n    <ion-content>\n      <ion-list>\n        <a class=\"sm-menu-header\">\n          <div class=\"photo\"></div>\n          <div class=\"name\">hardy</div>\n        </a>\n        <a class=\"sm-menu-item\" menu-close href=\"#/menu/dashboard\" style=\"background-color:#3c283a;\">\n          数据统计\n        </a>\n        <a class=\"sm-menu-item\" menu-close href=\"#/menu/nearby_shop_list\" style=\"background-color:#4b3141;\">\n          附近的店\n        </a>\n        <a class=\"sm-menu-item\" menu-close href=\"#/menu/photos\" style=\"background-color:#6c434d;\">\n          照片墙\n        </a>\n        <a class=\"sm-menu-item\" menu-close href=\"#/menu/setting\" style=\"background-color:#815055;\">\n          系统设置\n        </a>\n        <a class=\"sm-menu-item\" menu-close href=\"#/menu/camera\">\n          拍照测试\n        </a>\n        <a class=\"sm-menu-item\" menu-close href=\"#/menu/home\">\n          首页\n        </a>\n        <a class=\"sm-menu-item\" menu-close ng-click=\"login()\">\n          登录\n        </a>\n      </ion-list>\n    </ion-content>\n  </ion-side-menu>\n</ion-side-menus>\n");
$templateCache.put("nearby_shop.client.view.html","<ion-view view-title=\"店详情\">\n  <ion-content>\n    <h1>店详情</h1>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("nearby_shop_list.client.view.html","<ion-view view-title=\"附近的店\" class=\"ag-nearby-shop-list-page\">\n  <ion-nav-buttons side=\"right\">\n    <button class=\"button\" ng-click=\"showMapPanel()\">\n      地图模式\n    </button>\n  </ion-nav-buttons>\n  <ion-content>\n    <div class=\"ag-row-multi-item\" ng-click=\"showShopPanel()\">\n      <div class=\"title\">古北家乐福</div>\n      <div class=\"content\">\n        <span class=\"left\">上海浦东古北</span>\n        <span class=\"right\">2000m</span>\n      </div>\n    </div>\n    <div class=\"ag-row-multi-item\">\n      <div class=\"title\">古北家乐福</div>\n      <div class=\"content\">\n        <span class=\"left\">上海浦东古北</span>\n        <span class=\"right\">2000m</span>\n      </div>\n    </div>\n    <div class=\"ag-row-multi-item\">\n      <div class=\"title\">古北家乐福</div>\n      <div class=\"content\">\n        <span class=\"left\">上海浦东古北</span>\n        <span class=\"right\">2000m</span>\n      </div>\n    </div>\n    <div class=\"ag-row-multi-item\">\n      <div class=\"title\">古北家乐福</div>\n      <div class=\"content\">\n        <span class=\"left\">上海浦东古北</span>\n        <span class=\"right\">2000m</span>\n      </div>\n    </div>\n    <div class=\"ag-row-multi-item\">\n      <div class=\"title\">古北家乐福</div>\n      <div class=\"content\">\n        <span class=\"left\">上海浦东古北</span>\n        <span class=\"right\">2000m</span>\n      </div>\n    </div>\n    <div class=\"ag-row-multi-item\">\n      <div class=\"title\">古北家乐福</div>\n      <div class=\"content\">\n        <span class=\"left\">上海浦东古北</span>\n        <span class=\"right\">2000m</span>\n      </div>\n    </div>\n    <div class=\"ag-row-multi-item\">\n      <div class=\"title\">古北家乐福</div>\n      <div class=\"content\">\n        <span class=\"left\">上海浦东古北</span>\n        <span class=\"right\">2000m</span>\n      </div>\n    </div>\n    <div class=\"ag-row-multi-item\">\n      <div class=\"title\">古北家乐福</div>\n      <div class=\"content\">\n        <span class=\"left\">上海浦东古北</span>\n        <span class=\"right\">2000m</span>\n      </div>\n    </div>\n    <div class=\"ag-row-multi-item\">\n      <div class=\"title\">古北家乐福</div>\n      <div class=\"content\">\n        <span class=\"left\">上海浦东古北</span>\n        <span class=\"right\">2000m</span>\n      </div>\n    </div>\n    <div class=\"ag-row-multi-item\">\n      <div class=\"title\">古北家乐福</div>\n      <div class=\"content\">\n        <span class=\"left\">上海浦东古北</span>\n        <span class=\"right\">2000m</span>\n      </div>\n    </div>\n    <div class=\"ag-row-multi-item\">\n      <div class=\"title\">古北家乐福</div>\n      <div class=\"content\">\n        <span class=\"left\">上海浦东古北</span>\n        <span class=\"right\">2000m</span>\n      </div>\n    </div>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("photos.client.view.html","<ion-view view-title=\"照片墙\" class=\"ag-photos-page\">\n  <ion-nav-buttons side=\"right\">\n    <button class=\"button\" ng-click=\"showPhotoSelectPanel()\">\n      筛选\n    </button>\n  </ion-nav-buttons>\n  <ion-content>\n    <div class=\"ag-photo-container\">\n      <div class=\"ag-photo-item\">\n        <img class=\"photo\" src=\"../img/test-photo.jpg\">\n      </div>\n      <div class=\"ag-photo-item\">\n        <img class=\"photo\" src=\"../img/test-photo.jpg\">\n      </div>\n      <div class=\"ag-photo-item\">\n        <img class=\"photo\" src=\"../img/test-photo.jpg\">\n      </div>\n      <div class=\"ag-photo-item\">\n        <img class=\"photo\" src=\"../img/test-photo.jpg\">\n      </div>\n      <div class=\"ag-photo-item\">\n        <img class=\"photo\" src=\"../img/test-photo.jpg\">\n      </div>\n      <div class=\"ag-photo-item\">\n        <img class=\"photo\" src=\"../img/test-photo.jpg\">\n      </div>\n      <div class=\"ag-photo-item\">\n        <img class=\"photo\" src=\"../img/test-photo.jpg\">\n      </div>\n      <div class=\"ag-photo-item\">\n        <img class=\"photo\" src=\"../img/test-photo.jpg\">\n      </div>\n      <div class=\"ag-photo-item\">\n        <img class=\"photo\" src=\"../img/test-photo.jpg\">\n      </div>\n      <div class=\"ag-photo-item\">\n        <img class=\"photo\" src=\"../img/test-photo.jpg\">\n      </div>\n      <div class=\"ag-photo-item\">\n        <img class=\"photo\" src=\"../img/test-photo.jpg\">\n      </div>\n      <div class=\"ag-photo-item\">\n        <img class=\"photo\" src=\"../img/test-photo.jpg\">\n      </div>\n      <div class=\"ag-photo-item\">\n        <img class=\"photo\" src=\"../img/test-photo.jpg\">\n      </div>\n      <div class=\"ag-photo-item\">\n        <img class=\"photo\" src=\"../img/test-photo.jpg\">\n      </div>\n      <div class=\"ag-photo-item\">\n        <img class=\"photo\" src=\"../img/test-photo.jpg\">\n      </div>\n      <div class=\"ag-photo-item\">\n        <img class=\"photo\" src=\"../img/test-photo.jpg\">\n      </div>\n      <div class=\"ag-photo-item\">\n        <img class=\"photo\" src=\"../img/test-photo.jpg\">\n      </div>\n      <div class=\"ag-photo-item\">\n        <img class=\"photo\" src=\"../img/test-photo.jpg\">\n      </div>\n      <div class=\"ag-photo-item\">\n        <img class=\"photo\" src=\"../img/test-photo.jpg\">\n      </div>\n      <div class=\"ag-photo-item\">\n        <img class=\"photo\" src=\"../img/test-photo.jpg\">\n      </div>\n      <div class=\"ag-photo-item\">\n        <img class=\"photo\" src=\"../img/test-photo.jpg\">\n      </div>\n      <div class=\"ag-photo-item\">\n        <img class=\"photo\" src=\"../img/test-photo.jpg\">\n      </div>\n    </div>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("plan.client.view.html","<ion-view view-title=\"今日事件\" class=\"ag-plan-page\">\n  <ion-nav-buttons side=\"right\">\n    <button class=\"button\" ng-click=\"showPeopleSelectPanel()\">\n      hardy\n    </button>\n  </ion-nav-buttons>\n  <ion-content>\n    <flex-calendar options=\"options\" events=\"events\"></flex-calendar>\n    <div class=\"events-panel\">\n      <div class=\"events-item\"></div>\n      <div class=\"events-item\"></div>\n      <div class=\"events-item\"></div>\n      <div class=\"events-item none\">无事件</div>\n      <div class=\"events-item\"></div>\n      <div class=\"events-item\"></div>\n      <div class=\"events-item\"></div>\n    </div>\n  </ion-content>\n  <div class=\"ag-footer\" ng-click=\"goEventsCreate()\">\n    添加新事件\n  </div>\n</ion-view>\n");
$templateCache.put("plan_create.client.view.html","<ion-view view-title=\"添加事件\">\n  <ion-content>\n    <div>添加事件</div>\n    <button class=\"button\" ng-click=\"$ionicGoBack()\"></button>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("plan_list.client.view.html","<ion-view view-title=\"人员事件列表\">\n  <ion-content>\n    <div>人员事件列表</div>\n    <button class=\"button\" ui-sref=\"menu.plan\">个人事件</button>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("punch.client.view.html","<ion-view view-title=\"考勤打卡\" class=\"ag-punch-page\">\n  <ion-nav-buttons side=\"right\">\n    <button class=\"button\" ng-click=\"goDashboard()\">\n      考勤统计\n    </button>\n  </ion-nav-buttons>\n  <ion-content>\n    <div class=\"center\">\n      <div class=\"time-icon\">\n\n      </div>\n      <div class=\"time-text\">\n\n      </div>\n    </div>\n    <div class=\"footer\">\n      <div class=\"punch-item left\" ng-click=\"showPhotoPanel()\">\n        上班打卡\n      </div>\n      <div class=\"punch-item right\" ng-click=\"showPhotoPanel()\">\n        下班打卡\n      </div>\n    </div>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("punch_detail.client.view.html","<ion-view view-title=\"考情详情\">\n  <ion-content>\n    <div>考情详情</div>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("punch_submit.client.view.html","<ion-view view-title=\"确认递交\">\n  <ion-content>\n    <div>递交页面</div>\n    <button class=\"button\" ng-click=\"$ionicGoBack()\">返回打卡</button>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("setting.client.view.html","<ion-view view-title=\"设置\">\n  <ion-content>\n    <h1>设置</h1>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("shop.client.view.html","<ion-view view-title=\"店铺信息\">\n  <ion-content>\n    <div>店铺信息</div>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("shop_create.client.view.html","<ion-view view-title=\"新店信息\">\n  <ion-content>\n    <div>新店信息</div>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("shop_list.client.view.html","<ion-view view-title=\"新店列表\" class=\"ag-shop-list-page\">\n  <ion-content>\n    <div class=\"ag-row-container\">\n      <div class=\"ag-row-item\">\n        <span class=\"left\">家乐福中原店</span>\n        <span class=\"right\">Sisley  15/12/12上报</span>\n      </div>\n\n      <div class=\"ag-row-item\">\n        <span class=\"left\">家乐福中原店</span>\n        <span class=\"right\">Sisley  15/12/12上报</span>\n      </div>\n\n      <div class=\"ag-row-item\">\n        <span class=\"left\">家乐福中原店</span>\n        <span class=\"right\">Sisley  15/12/12上报</span>\n      </div>\n\n      <div class=\"ag-row-item pass\">\n        <span class=\"left\">家乐福中原店</span>\n        <span class=\"right\">Sisley  15/12/12上报</span>\n      </div>\n\n      <div class=\"ag-row-item pass\">\n        <span class=\"left\">家乐福中原店</span>\n        <span class=\"right\">Sisley  15/12/12上报</span>\n      </div>\n    </div>\n  </ion-content>\n  <div class=\"ag-footer\" ng-click=\"goShopCreate()\">\n    添加新事件\n  </div>\n</ion-view>\n");}]);