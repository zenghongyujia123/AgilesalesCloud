/**
 * Created by zenghong on 16/1/20.
 */
'use strict';
var cardService = require('./../services/all').card;

exports.createCardTemplate = function (req, res, next) {
  cardService.createCardTemplate(req.body.info, function (err, result) {
    if (err) {
      return res.send(err);
    }
    return res.send(result);
  });
};

exports.updateCardTemplate = function (req, res, next) {
};

