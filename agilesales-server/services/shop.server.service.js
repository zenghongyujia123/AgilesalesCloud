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
    Shop.findOne({company: company, number: shop.number}, function (err, findShop) {
      if (!findShop) {
        findShop = new Shop({
          number: shop.number,
          company: company
        });
      }

      findShop.number = shop.number;
      findShop.name = shop.name;
      findShop.level = shop.level;
      findShop.area = shop.area;
      findShop.city = shop.city;
      findShop.address = shop.address;
      findShop.channel_type = shop.channel_type;
      findShop.ship_type = shop.ship_type;
      findShop.channel = shop.channel;
      findShop.customer = shop.customer;
      findShop.salesman_name = shop.salesman_name;
      findShop.salesman_number = shop.salesman_number;
      findShop.promotions_name = shop.promotions_name;
      findShop.promotions_number = shop.promotions_number;
      findShop.call_count = shop.call_count;
      findShop.status = shop.status;

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
