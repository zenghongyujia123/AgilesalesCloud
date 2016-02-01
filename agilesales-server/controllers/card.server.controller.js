/**
 * Created by zenghong on 16/1/20.
 */
'use strict';
var cardService = require('./../services/all').card;

exports.createCardTemplate = function (req, res, next) {
  var info = {
    title: req.body.title,
    role: req.body.role
  };
  cardService.createCardTemplate(info, req.user.company, function (err, result) {
    if (err) {
      return res.send(err);
    }
    return res.send(result);
  });
};

exports.updateCardTemplate = function (req, res, next) {

};

