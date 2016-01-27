/**
 * Created by zenghong on 16/1/27.
 */
'use strict';

var appDb = require('./../../libraries/mongoose').appDb,
  err = require('./../../errors/all'),
  async = require('async'),
  Product = appDb.model('Product');

exports.uploadMultiProducts = function (company, products, callback) {
  async.each(products, function (product, eachCallback) {
    User.findOne({company: company, number: product.number}, function (err, product) {
      if (!product) {
        product = new Product({
          number: product.number,
          company: company
        });
      }

      product.save(function (err, saveProduct) {
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

exports.getProducts = function (company, callback) {
  Product.find({company: company}, function (err, products) {
    if (err || !products) {
      return callback({err: err.system.db_error});
    }
    return callback(null, products);
  });
};
