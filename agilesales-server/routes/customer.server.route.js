/**
 * Created by zenghong on 16/1/7.
 */
'use strict';
var all = require('../controllers/all');
var filter = require('../filters/all').user;

module.exports = function (app) {
  app.route('/webapp/customer/multi/upload').post(filter.requireUser, all.customer.uploadMultiCustomers);
  app.route('/webapp/customers').get(filter.requireUser, all.customer.getCustomers);
};