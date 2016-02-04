/**
 * Created by zenghong on 16/2/4.
 */
'use strict';
var all = require('../controllers/all');
var filter = require('../filters/all');

module.exports = function (app) {
  app.route('/app/punch/today').get(filter.user.requireUser, filter.punch.requireTodayPunch, all.punch.getTodayPunch);
};