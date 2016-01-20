/**
 * Created by zenghong on 16/1/20.
 */
'use strict';
var err = require('./../../errors/all');
var crypto = require('./../../libraries/crypto');

exports.requireUser = function (req, res, next) {
  var access_token = req.body.access_token || req.query.access_token || '';

  if (!access_token) {
    return res.send({err: err.business.user_token_empty});
  }

  try {
    access_token = cryptoLib.decrpToken(access_token, 'secret');
  }
  catch (e) {
    return res.send({err: err.business.user_token_invalid});
  }

  User.findOne({_id: access_token._id}).populate('company').exec(function (err, user) {
    if (err)
      return res.send(err.system.db_error);

    if (!user)
      return res.send({err: err.business.user_token_invalid});

    req.user = user;
    return next();
  });
};