/**
 * Created by zenghong on 16/2/4.
 */

/**
 * Created by zenghong on 16/1/7.
 */
'use strict';
var all = require('../controllers/all');
var filter = require('../filters/all').user;

module.exports = function (app) {
  app.route('/app/user/signin').post(all.app_user.signin);
  app.route('/app/user/me').get(filter.requireUser, all.app_user.getMe);
};
