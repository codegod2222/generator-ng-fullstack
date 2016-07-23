'use strict';

const optionsParser = require('../utils/options_parser');
const AngularFactory = require('./angular').AngularFactory;
const FeatureMissingError = require('../utils/errors').FeatureMissingError;
const ModuleDoesntImplementError = require('../utils/errors').ModuleDoesntImplementError;

exports.FilterSubGenerator = class FilterSubGenerator {
  constructor(generator) {
    this.wrapper = generator;
    this.wrapper.appName = this.wrapper.config.get('appName');
    this.wrapper.client = this.wrapper.config.get('client');
    this.wrapper.testsSeparated = this.wrapper.config.get('testsSeparated');
  }

  initializing() {
    this.wrapper.argument('name', {
      required: true,
      type: String,
      desc: 'filter'
    });
  }

  writing() {
    let _feature = optionsParser.getFeature(this.wrapper.options);
    let _client = this.wrapper.client;

    if (!_feature.length) {
      throw new FeatureMissingError();
    }

    if (_client !== AngularFactory.tokens().NG1) {
      throw new ModuleDoesntImplementError(_client, 'filter');
    }

    AngularFactory.build(AngularFactory.tokens().NG1, this.wrapper).copyFilter();
  }
};
