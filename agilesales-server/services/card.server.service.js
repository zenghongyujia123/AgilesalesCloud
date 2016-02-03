/**
 * Created by zenghong on 16/2/1.
 */

var errs = require('./../../errors/all');
var appDb = require('./../../libraries/mongoose').appDb,
  PaperTemplate = appDb.model('PaperTemplate'),
  QuestionTemplate = appDb.model('QuestionTemplate'),
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

      CardTemplate.find({company: company}, function (err, cardTemplates) {
        if (err || !cardTemplates) {
          return callback({err: errs.system.db_error});
        }
        company.card_templates = cardTemplates;
        company.markModified('card_templates');
        company.save(function (err, saveCompany) {
          if (err || !company) {
            return callback({err: errs.system.db_error});
          }
          return callback(null, saveCompany);
        });
      });
    });
  });
};

exports.updateQuestion = function (question, cardId, paperId, company, callback) {
  CardTemplate.findOne({_id: cardId}, function (err, cardTemplate) {
    if (err) {
      return callback({err: errs.system.db_error});
    }

    if (!cardTemplate) {
      return callback({err: errs.business.card_template_not_existed});
    }

    cardTemplate.papers.forEach(function (paper) {
      if (paper._id.toString() === paperId.toString()) {
        if (!question._id) {
          question = new QuestionTemplate({
            type: question.type,
            title: question.title,
            content: question.content,
            company: company
          });
          paper.questions.push(question.toObject());
        }
        else {
          paper.questions.forEach(function (item) {
            if (item._id.toString() === question._id.toString()) {
              item.title = question.title;
              item.content = question.content;
            }
          });
        }
      }
    });
    cardTemplate.markModified('papers');

    cardTemplate.save(function (err, saveCardTemplate) {
      if (err || !saveCardTemplate) {
        return callback({err: errs.system.db_error});
      }

      CardTemplate.find({company: company}, function (err, cardTemplates) {
        if (err || !cardTemplates) {
          return callback({err: errs.system.db_error});
        }
        company.card_templates = cardTemplates;
        company.markModified('card_templates');
        company.save(function (err, saveCompany) {
          if (err || !company) {
            return callback({err: errs.system.db_error});
          }
          return callback(null, saveCompany);
        });
      });
    });
  });
};

exports.updateCardTitle = function (cardId, title, company, callback) {
  CardTemplate.findOne({_id: cardId}, function (err, card) {
    if (err) {
      return callback({err: errs.system.db_error});
    }
    if (!card) {
      return callback({err: errs.business.card_template_not_existed});
    }

    card.title = title;
    card.save(function (err, saveCard) {
      if (err || !saveCard) {
        return callback({err: errs.system.db_error});
      }

      CardTemplate.find({company: company}).sort({created:1}).exec(function (err, cards) {
        if (err || !cards) {
          return callback({err: errs.system.db_error});
        }
        company.card_templates = cards;
        company.markModified('card_templates');
        company.save(function (err, saveCompany) {
          if (err || !saveCompany) {
            return callback({err: errs.system.db_error});
          }
          return callback(null, card);
        });
      });
    })

  });
};


