/**
 * Created by zenghong on 16/1/20.
 */

var appDb = require('./../../libraries/mongoose').appDb,
  Company = appDb.model('Company'),
  User = appDb.model('User'),
  Area = appDb.model('Area');

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
        areas: [],
        card_templates: []
      });
    }

    if (!company.areas.length) {
      company.areas.push(new Area({
        name: '大区',
        number: '000001'
      }));

      company.areas.push(new Area({
        name: '省份',
        number: '000002'
      }));

      company.areas.push(new Area({
        name: '区域',
        number: '000003'
      }));

      company.areas.push(new Area({
        name: '城市',
        number: '000004'
      }));

      company.areas.push(new Area({
        name: '县区',
        number: '000005'
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


