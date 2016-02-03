/**
 * Created by zenghong on 16/1/20.
 */
'use strict';
var error = require('./../../errors/all');
var crypto = require('./../../libraries/crypto');

var appDb = require('./../../libraries/mongoose').appDb,
  CardTemplate= appDb.model('CardTemplate');

exports.requireCardTemplate = function (req, res, next) {
  var card_id = req.body.card_id || req.query.card_id || '';
  if (!card_id) {
    return res.send({err: err.params.empty});
  }

  CardTemplate.findOne({_id: card_id}, function (err, card) {
    if (err)
      return res.send({err:error.system.db_error});

    if (!card)
      return res.send({err: error.business.card_template_not_existed});

    req.card_template = card;
    return next();

  });
};