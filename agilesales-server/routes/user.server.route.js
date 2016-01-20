/**
 * Created by zenghong on 16/1/7.
 */
'use strict';
var all = require('../controllers/all');

module.exports = function (app) {
  app.route('/webapp/signin').post(all.user.signin);
};