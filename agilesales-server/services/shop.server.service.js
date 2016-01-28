/**
 * Created by zenghong on 16/1/27.
 */
'use strict';

var appDb = require('./../../libraries/mongoose').appDb,
  err = require('./../../errors/all'),
  async = require('async'),
  Shop = appDb.model('Shop');

exports.uploadMultiShops = function (company, shops, callback) {
  async.each(shops, function (shop, eachCallback) {
    Product.findOne({company: company, number: shop.number}, function (err, findShop) {
      if (!findShop) {
        findShop = new Product({
          number: shop.number,
          company: company
        });
      }

      findShop.number = shop.number;

      findShop.save(function (err, saveProduct) {
        return eachCallback();
      });
    });

  }, function (err) {
    if (err) {
      return callback(err);
    }
    return callback({});
  });
};

exports.getShops = function (company, callback) {
  Shop.find({company: company}, function (err, shops) {
    if (err || !shops) {
      return callback({err: err.system.db_error});
    }
    return callback(null, shops);
  });
};
