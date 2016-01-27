/**
 * Created by zenghong on 16/1/27.
 */
'use strict';
var all = require('../controllers/all');
var filter = require('../filters/all').user;

module.exports = function (app) {
  app.route('/webapp/product/multi/upload').post(filter.requireUser, all.product.uploadMultiProducts);
  app.route('/webapp/products').get(filter.requireUser, all.product.getProducts);
};