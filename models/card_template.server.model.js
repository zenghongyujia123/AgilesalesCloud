/**
 * Created by zenghong on 16/1/27.
 */
'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  timestamps = require('mongoose-timestamp');

module.exports = function (appDb) {
  var CardTemplateSchema = new Schema({
    object: {
      type: String,
      default: 'cardTemplate'
    },
    title: {
      type: String
    },
    role: {
      type: String,
      enum: ['promotions', 'salesman'],
      default: 'promotions'
    },
    type: {
      type: String,
      enum: ['default', 'selfdefine'],
      default: 'selfdefine'
    },
    papers: [{
      type: Schema.Types.Mixed
    }],
    customers: [{
      type: String
    }]
    ,
    company: {
      type: Schema.Types.ObjectId,
      ref: 'Company'
    },
    paper_count: {
      type: Number,
      default: 0
    },
    question_count: {
      type: Number,
      default: 0
    }
  });

  var PaperTemplateSchema = new Schema({
    object: {
      type: String,
      default: 'paperTemplate'
    },
    title: {
      type: String
    },
    questions: [{
      type: Schema.Types.Mixed
    }],
    company: {
      type: Schema.Types.ObjectId,
      ref: 'Company'
    }
  });

  var QuestionTemplateSchema = new Schema({
    object: {
      type: String,
      default: 'questionTemplate'
    },
    type: {
      type: String
    },
    title: {
      type: String
    },
    content:{
      type: Schema.Types.Mixed
    },
    company: {
      type: Schema.Types.ObjectId,
      ref: 'Company'
    }
  });

  CardTemplateSchema.plugin(timestamps, {
    createdAt: 'created',
    updatedAt: 'updated'
  });

  appDb.model('QuestionTemplate', QuestionTemplateSchema);
  appDb.model('PaperTemplate', PaperTemplateSchema);
  appDb.model('CardTemplate', CardTemplateSchema);
};
