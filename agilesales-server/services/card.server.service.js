/**
 * Created by zenghong on 16/2/1.
 */

var errs = require('./../../errors/all');
var appDb = require('./../../libraries/mongoose').appDb,
  CardTemplate = appDb.model('CardTemplate');

exports.createCardTemplate = function (info, company, callback) {
  var title = info.title || '';
  var role = info.role === 'promotions' ? 'promotions' : 'salesman';

  var cardTemplate = new CardTemplate({
    title: title,
    role: role,
    company: company
  });

  cardTemplate.save(function (err, saveCardTemplate) {
    if (err || !saveCardTemplate) {
      return callback({err: errs.system.db_error});
    }
    company.card_templates.push(saveCardTemplate);
    company.markModified('card_templates');
    company.save(function (err, saveCompany) {
      if (err || !saveCompany) {
        return callback({err: errs.system.db_error});
      }
      return callback(null, saveCardTemplate);
    });
  });
};


