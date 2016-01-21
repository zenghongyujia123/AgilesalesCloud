/**
 * Created by zenghong on 16/1/20.
 */

var appDb = require('./../../libraries/mongoose').appDb,
  Company = appDb.model('Company'),
  User = appDb.model('User'),
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

    company.save(function (err, saveCompany) {
      if (err) {
        console.log(err);
      }
      if (user) {
        user.save(function (err, saveAdmin) {
          console.log(saveCompany);
        });
      }
    });
  });
};

exports.create = function () {

};

exports.updateArea = function () {

};

exports.updateCards = function () {

};


