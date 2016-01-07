'use strict';

module.exports = {
  appDb: 'mongodb://localhost/agcloud-dev',
  loggerLevel: 'debug',
  app: {
    title: 'zhuzhuqs - Development Environment'
  },
  app_version: '1000',
  app_url_android: '',
  app_url_ios: '',
  port: process.env.PORT || 3002
};
