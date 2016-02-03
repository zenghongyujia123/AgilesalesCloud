/**
 * Created by zenghong on 16/1/20.
 */
'use strict';
var errs = require('./../../errors/all');
var appDb = require('./../../libraries/mongoose').appDb,
  Customer = appDb.model('Customer');
var async = require('async');


exports.uploadMultiCustomers = function (company, customers, callback) {
  async.each(customers, function (customer, eachCallback) {
    Customer.findOne({company: company, name: customer.name}, function (err, findCustomer) {
      if (err) {
        return eachCallback();
      }

      if (!findCustomer) {
        findCustomer = new Customer({
          name: customer.name,
          company: company,
          promotion_card: company.promotion_defaul_card,
          salesman_card: company.salesman_defaul_card
        });
      }

      findCustomer.short_name = customer.short_name;
      findCustomer.number = customer.number;
      findCustomer.customer_level = customer.customer_level;
      findCustomer.customer_type = customer.customer_type;
      findCustomer.channel_type = customer.channel_type;
      findCustomer.address = customer.address;
      findCustomer.delivery_address = customer.delivery_address;
      findCustomer.contact_phone = customer.contact_phone;
      findCustomer.contact_telephone = customer.contact_telephone;
      findCustomer.contact_name = customer.contact_name;
      findCustomer.principal_number = customer.principal_number;
      findCustomer.principal_name = customer.principal_name;
      findCustomer.area_level1 = customer.area_level1;
      findCustomer.area_level2 = customer.area_level2;
      findCustomer.area_level3 = customer.area_level3;

      findCustomer.save(function (err, saveCustomer) {
        return eachCallback();
      });
    });
  }, function (err) {
    return callback();
  });
};

exports.getCustomers = function (company, callback) {
  Customer.find({company: company}, function (err, customers) {
    if (err || !customers) {
      return callback({err: errs.system.db_error});
    }
    return callback(null, customers);
  });
};

exports.updateCustomerCard = function (card, customer, callback) {
  if (card.role === 'promotions') {
    customer.promotion_card = card;
    customer.markModified('promotion_card');
  }

  if (card.role === 'salesman') {
    customer.salesman_card = card;
    customer.markModified('salesman_card');
  }

  customer.save(function (err, saveCustomer) {
    if (err || !saveCustomer) {
      return callback({err: errs.system.db_error});
    }

    return callback(null, customer);
  });
};




