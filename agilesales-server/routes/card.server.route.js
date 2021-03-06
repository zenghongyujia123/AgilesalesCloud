/**
 * Created by zenghong on 16/1/7.
 */
'use strict';
var all = require('../controllers/all');
var filter = require('../filters/all').user;

module.exports = function (app) {
  app.route('/webapp/card_template/create').post(filter.requireUser, all.card.createCardTemplate);
  app.route('/webapp/card_template/paper/create').post(filter.requireUser, all.card.createPaperTemplate);
  app.route('/webapp/card_template/question/update').post(filter.requireUser, all.card.updateQuestion);
  app.route('/webapp/card_template/title/update').post(filter.requireUser, all.card.updateCardTitle);
};