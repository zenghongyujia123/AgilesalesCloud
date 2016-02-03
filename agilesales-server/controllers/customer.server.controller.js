/**
 * Created by zenghong on 16/1/20.
 */
'use strict';

var customerService = require('./../services/all').customer;

exports.uploadMultiCustomers = function (req, res, next) {
  customerService.uploadMultiCustomers(req.user.company, req.body.customers, function (err, result) {
    if (err) {
      return res.send(err);
    }
    return res.send(result);
  });
};

exports.getCustomers = function (req, res, next) {
  customerService.getCustomers(req.user.company, function (err, result) {
    if (err) {
      return res.send(err);
    }
    return res.send(result);
  });
};

exports.updateCustomerCard = function (req, res, next) {
  customerService.updateCustomerCard(req.card_template, req.customer, function (err, result) {
    if (err) {
      return res.send(err);
    }
    return res.send(result);
  });
};