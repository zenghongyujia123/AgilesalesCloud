/**
 * Created by zenghong on 16/2/1.
 */

var errs = require('./../../errors/all');
var appDb = require('./../../libraries/mongoose').appDb,
  PaperTemplate = appDb.model('PaperTemplate'),
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

exports.createPaperTemplate = function (info, company, callback) {
  var paperTemplate = new PaperTemplate({
    title: info.title
  });

  CardTemplate.findOne({_id: info.card_id}, function (err, cardTemplate) {
    if (err) {
      return callback({err: errs.system.db_error});
    }

    if (!cardTemplate) {
      return callback({err: errs.business.card_template_not_existed});
    }

    cardTemplate.papers.push(paperTemplate);
    cardTemplate.markModified('papers');
    cardTemplate.save(function (err, saveCardTemplate) {
      if (err || !saveCardTemplate) {
        return callback({err: errs.system.db_error});
      }

      var isModified = false;
      company.card_templates.forEach(function (card) {
        if (card._id.toString() === saveCardTemplate._id.toString()) {
          isModified = true;
        }
      });

      if (isModified) {
        company.markModified('card_templates');
      }
      company.save(function (err, saveCompany) {
        if (err || !company) {
          return callback({err: errs.system.db_error});
        }
        return callback(null, saveCompany);
      });
    });
  });
};


