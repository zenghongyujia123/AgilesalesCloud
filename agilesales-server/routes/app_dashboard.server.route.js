/**
 * Created by zenghong on 16/1/7.
 */
'use strict';
var all = require('../controllers/all');
var filter = require('../filters/all').user;

module.exports = function (app) {
  app.route('/app/dashboard/multi/dutytime').get(filter.requireUser, all.app_dashboard.getMultiDutyTimeRange);
  app.route('/app/dashboard/single/dutytime').get(filter.requireUser, filter.requireOtherUser, all.app_dashboard.getSingleDutyTimeRange);
};
