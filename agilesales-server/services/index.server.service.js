/**
 * Created by zenghong on 16/1/20.
 */

var appDb = require('./../../libraries/mongoose').appDb,
  Company = appDb.model('Company'),
  User = appDb.model('User'),
  CardTemplate = appDb.model('CardTemplate'),
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
        initCardTemplateData(saveCompany);
      }
    });
  });
};

function initCardTemplateData(company, callback) {
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

  cardTemplate1.save(function () {
    cardTemplate2.save(function () {
      company.card_templates.push(cardTemplate1);
      company.card_templates.push(cardTemplate2);
      company.save(function () {
      });
    });
  });


}

exports.create = function () {

};

exports.updateArea = function () {

};

exports.updateCards = function () {

};


