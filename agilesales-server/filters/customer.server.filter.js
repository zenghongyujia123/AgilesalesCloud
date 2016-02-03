/**
 * Created by zenghong on 16/1/20.
 */
'use strict';
var error = require('./../../errors/all');
var crypto = require('./../../libraries/crypto');

var appDb = require('./../../libraries/mongoose').appDb,
  Customer = appDb.model('Customer');

exports.requireCustomer= function (req, res, next) {
  var customer_id = req.body.customer_id|| req.query.customer_id|| '';
  if (!customer_id) {
    return res.send({err: error.params.empty});
  }

  Customer.findOne({_id: customer_id}, function (err, card) {
    if (err)
      return res.send(error.system.db_error);

    if (!card)
      return res.send({err: error.business.customer_not_existed});

    req.customer = card;
    return next();
  });
};