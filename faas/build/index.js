'use strict';

const _ = require('lodash');
const BbPromise = require('bluebird');
const Docker = require('dockerode');
const build = require('./build')
const fetch = require('./fetch')
const unpack = require('./unpack')

class FaaSBuild {
    constructor(serverless, options) {
        this.serverless = serverless;
        this.options = options || {};
        this.provider = this.serverless.getProvider('faas');
        this.commands = {
          build: {
            lifecycleEvents: [
              'fetch',
              'unpack',
              'build'
            ],
             usage: 'Bundle function for deployment on OpenFaaS'
          }
        }

        this.hooks = {
            "before:build:fetch": () => BbPromise.bind(this).then(this.fetchTemplate),
            "build:build": () => BbPromise.bind(this).then(this.buildFunction)
        };

        this.serverless.cli.log("Configuring FaaS Build plugin");
    }

    buildFunction() {
        this.serverless.cli.log("Attempting to build");

        return new BbPromise((resolve, reject) => {
            _.each(this.serverless.service.functions, (description, name) => {
                this.serverless.cli.log("Attempting to build " + name);
                // TODO build needs to accept a name
                build(name)
            });

            resolve();
        });
    }

    fetchTemplate() {
      this.serverless.cli.log("Fetching template for build")
      fetch()
    }
}

module.exports = FaaSBuild;
