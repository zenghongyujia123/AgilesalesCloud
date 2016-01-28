/**
 * Created by zenghong on 16/1/27.
 */
'use strict';
var all = require('../controllers/all');
var filter = require('../filters/all').user;

module.exports = function (app) {
  app.route('/webapp/shop/multi/upload').post(filter.requireUser, all.shop.uploadMultiShops);
  app.route('/webapp/shops').get(filter.requireUser, all.shop.getShops);
};