/**
 * Created by zenghong on 16/1/7.
 */
'use strict';
var all = require('../controllers/all');
var filter = require('../filters/all');

module.exports = function (app) {
  app.route('/webapp/customer/multi/upload').post(filter.user.requireUser, all.customer.uploadMultiCustomers);
  app.route('/webapp/customers').get(filter.user.requireUser, all.customer.getCustomers);
  app.route('/webapp/customers/card/update').post(filter.user.requireUser, filter.customer.requireCustomer, filter.card.requireCardTemplate, all.customer.updateCustomerCard);
};