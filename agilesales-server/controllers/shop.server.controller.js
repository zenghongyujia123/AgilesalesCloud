/**
 * Created by zenghong on 16/1/20.
 */

'use strict';

var shopService = require('./../services/all').shop;

exports.uploadMultiShops = function (req, res, next) {
  shopService.uploadMultiShops(req.user.company, req.body.shops, function (err, result) {
    if (err) {
      return res.send(err);
    }
    return res.send(result);
  });
};

exports.getShops = function (req, res, next) {
  shopService.getShops(req.user.company, function (err, result) {
    if (err) {
      return res.send(err);
    }
    return res.send(result);
  });
};

