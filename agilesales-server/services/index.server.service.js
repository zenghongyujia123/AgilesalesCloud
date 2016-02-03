/**
 * Created by zenghong on 16/1/20.
 */

var appDb = require('./../../libraries/mongoose').appDb,
  Company = appDb.model('Company'),
  User = appDb.model('User'),
  CardTemplate = appDb.model('CardTemplate'),
  PaperTemplate = appDb.model('PaperTemplate'),
  QuestionTemplate = appDb.model('QuestionTemplate'),
  AreaTitle = appDb.model('AreaTitle');

exports.initTempData = function () {
  Company.findOne({name: '敏捷云'}, function (err, company) {
    if (err) {
      console.log(err);
    }
    if (!company) {
      company = new Company({
        name: '敏捷云',
        address: '香楠路408弄76号',
        photo: [],
        contact_name: '默认联系人',
        contact_phone: '13472423583',
        contact_email: 'hardy@zhuzhuqs.com',
        areas_title: [],
        card_templates: []
      });
    }

    if (!company.areas_title.length) {
      company.areas_title.push(new AreaTitle({
        name: '大区',
        number: '000001',
        level: 1
      }));

      company.areas_title.push(new AreaTitle({
        name: '省份',
        number: '000002',
        level: 2
      }));

      company.areas_title.push(new AreaTitle({
        name: '区域',
        number: '000003',
        level: 3
      }));

      company.areas_title.push(new AreaTitle({
        name: '城市',
        number: '000004',
        level: 4
      }));

      company.areas_title.push(new AreaTitle({
        name: '县区',
        number: '000005',
        level: 5
      }));
      company.areas_title.push(new AreaTitle({
        name: '',
        number: '000006',
        level: 6
      }));
      company.areas_title.push(new AreaTitle({
        name: '',
        number: '000007',
        level: 7
      }));
      company.areas_title.push(new AreaTitle({
        name: '',
        number: '000008',
        level: 8
      }));
      company.areas_title.push(new AreaTitle({
        name: '',
        number: '000009',
        level: 9
      }));
      company.areas_title.push(new AreaTitle({
        name: '',
        number: '0000010',
        level: 10
      }));
    }

    var user;
    if (!company.super_admin) {
      user = new User({
        username: '13472423583',
        password: '111111',
        telephone: '13472423583',
        roles: ['superAdmin'],
        number: '007',
        job_number: '008',
        nickname: 'hardy',
        name: 'hardy1',
        job: '销售',
        company: company
      });
      company.super_admin = user;
    }
    if (company.tables.length <= 0) {
      company = initCompanyTables(company);
    }

    company.save(function (err, saveCompany) {
      if (err) {
        console.log(err);
      }
      if (user) {
        user.save(function (err, saveAdmin) {
          console.log(saveCompany);
        });
      }

      if (company.card_templates.length <= 0) {
        initCardTemplate(saveCompany);
      }
    });
  });
};

function initCardTemplate(company, callback) {
  company.card_templates = [];
  var cardTemplate1 = new CardTemplate({
    title: '默认业务员拜访卡',
    role: 'salesman',
    type: 'default',
    papers: [],
    customer: [],
    company: company
  });
  var cardTemplate2 = new CardTemplate({
    title: '默认导购员拜访卡',
    role: 'promotions',
    type: 'default',
    papers: [],
    customer: [],
    company: company
  });

  cardTemplate1 = initCardPapers(cardTemplate1, company);
  cardTemplate2 = initCardPapers(cardTemplate2, company);

  cardTemplate1.save(function () {
    cardTemplate2.save(function () {
      company.card_templates.push(cardTemplate1);
      company.card_templates.push(cardTemplate2);
      company.save(function () {
      });
    });
  });
}

function initCardPapers(cardTemplate, company) {
  var paper = new PaperTemplate({
    title: '陈列检查报告',
    questions: [],
    company: company
  });

  paper = initPaperQuestions(paper, company);
  cardTemplate.papers.push(paper);
  paper = new PaperTemplate({
    title: '分销检查报告',
    questions: [],
    company: company
  });
  paper = initPaperQuestions(paper, company);
  cardTemplate.papers.push(paper);
  paper = new PaperTemplate({
    title: '价格检查报告',
    questions: [],
    company: company
  });
  paper = initPaperQuestions(paper, company);
  cardTemplate.papers.push(paper);
  paper = new PaperTemplate({
    title: '人员检查报告',
    questions: [],
    company: company
  });
  paper = initPaperQuestions(paper, company);
  cardTemplate.papers.push(paper);
  paper = new PaperTemplate({
    title: '竞品检查报告',
    questions: [],
    company: company
  });
  paper = initPaperQuestions(paper, company);
  cardTemplate.papers.push(paper);
  paper = new PaperTemplate({
    title: '订单',
    questions: [],
    company: company
  });
  cardTemplate.papers.push(paper);
  return cardTemplate;
}

function initPaperQuestions(paper, company) {
  var question = new QuestionTemplate({
    type: 'blank',
    title: '填空题标题1',
    content: {
      input_type: 'number',
      is_need_description: true,
      is_need_photo: true,
      input_type_text: '数字',
      type_text: '填空题',
      title: '填空题标题1',
      type: 'blank'
    },
    company: company
  });
  paper.questions.push(question);

  question = new QuestionTemplate({
    type: 'single',
    title: '单选题标题1',
    content: {
      is_need_description: true,
      is_need_photo: true,
      type_text: '单选题',
      title: '单选题标题1',
      type: 'single',
      options: [
        {value: '是正品', key: ''},
        {value: '不是正品', key: ''}
      ]
    },
    company: company
  });
  paper.questions.push(question);

  question = new QuestionTemplate({
    type: 'multi',
    title: '多选题标题1',
    content: {
      is_need_description: true,
      is_need_photo: true,
      type_text: '多选题',
      title: '多选题标题1',
      type: 'multi',
      options: [
        {value: '是正品', key: ''},
        {value: '不是正品', key: ''}
      ]
    },
    company: company
  });
  paper.questions.push(question);

  question = new QuestionTemplate({
    type: 'trueorfalse',
    title: '是非题标题1',
    content: {
      is_need_description: true,
      is_need_photo: true,
      type_text: '是非题',
      title: '是非题标题1',
      type: 'trueorfalse',
    },
    company: company
  });
  paper.questions.push(question);

  question = new QuestionTemplate({
    type: 'table',
    title: '表格题标题1',
    content: {},
    company: company
  });
  paper.questions.push(question);
  return paper;
}

function initCompanyTables(company) {
  company.tables = [];
  company.tables.push({
    table: 'Product',
    table_name: '产品表',
    fields: [
      {
        name: '产品编码',
        field: 'number'
      },
      {
        name: '产品条码',
        field: 'barcode'
      },
      {
        name: '产品名称',
        field: 'name'
      },
      {
        name: '产品简称',
        field: 'short_name'
      },
      {
        name: '品牌',
        field: 'brand'
      },
      {
        name: '系列',
        field: 'series'
      },
      {
        name: '大类',
        field: 'large_type'
      },
      {
        name: '小类',
        field: 'small_type'
      },
      {
        name: '包装单位',
        field: 'package_unit'
      },
      {
        name: '规格',
        field: 'specification'
      },
      {
        name: '产品等级',
        field: 'product_level'
      },
      {
        name: '是否新品',
        field: 'is_new'
      },
      {
        name: '是否重点产品',
        field: 'is_key'
      },
      {
        name: '是否档期促销品',
        field: 'is_promotion'
      }
    ]
  });
  company.tables.push({
    table: 'Customer',
    table_name: '客户经销商',
    fields: [
      {
        name: '客户名称',
        field: 'name'
      },
      {
        name: '客户简称',
        field: 'short_name'
      },
      {
        name: '客户编码',
        field: 'number'
      },
      {
        name: '客户等级',
        field: 'customer_level'
      },
      {
        name: '客户类型',
        field: 'customer_type'
      },
      {
        name: '渠道类型',
        field: 'channel_type'
      }
    ]
  });
  company.markModified('tables');
  return company;
}

exports.create = function () {

};

exports.updateArea = function () {

};

exports.updateCards = function () {

};


