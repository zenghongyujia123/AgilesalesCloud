/**
 * Created by zenghong on 16/1/27.
 */

'use strict';

var productService = require('./../services/all').product;

exports.uploadMultiProducts = function (req, res, next) {
  productService.uploadMultiProducts(req.user.company, req.body.products, function (err, result) {
    if (err) {
      return res.send(err);
    }
    return res.send(result);
  });
};

exports.getProducts = function (req, res, next) {
  productService.getProducts(req.user.company, function (err, result) {
    if (err) {
      return res.send(err);
    }
    return res.send(result);
  });
};

