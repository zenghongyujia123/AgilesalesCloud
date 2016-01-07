/**
 * Created by zenghong on 16/1/7.
 */

var contro = require('../routes/index');
module.exports = function (app) {
  app.route('/').get(userFilter.requireUser, dashboard.sortByOrderCount);
};