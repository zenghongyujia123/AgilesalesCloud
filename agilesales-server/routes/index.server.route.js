/**
 * Created by zenghong on 16/1/7.
 */

var indexCtrl = require('../routes/index');
module.exports = function (app) {
  app.route('/').get(indexCtrl.index);
};