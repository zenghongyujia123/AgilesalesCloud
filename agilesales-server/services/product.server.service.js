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
    Product.findOne({company: company, name: product.name}, function (err, findProduct) {
      if (!findProduct) {
        findProduct = new Product({
          name: product.name,
          company: company
        });
      }

      findProduct.number = product.number;
      findProduct.barcode = product.barcode;
      findProduct.short_name = product.short_name;
      findProduct.brand = product.brand;
      findProduct.series = product.series;
      findProduct.large_type = product.large_type;
      findProduct.small_type = product.small_type;
      findProduct.package_unit = product.package_unit;
      findProduct.specification = product.specification;
      findProduct.system_price = product.system_price;
      findProduct.price = product.price;
      findProduct.product_level = product.product_level;
      findProduct.is_new = product.is_new;
      findProduct.is_key = product.is_key;
      findProduct.is_promotion = product.is_promotion;

      findProduct.save(function (err, saveProduct) {
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
