'use strict';

const _ = require('lodash');
const BbPromise = require('bluebird');
const Docker = require('dockerode');
const build = require('./build');

class FaaSBuild {
	constructor(serverless, options) {
		this.serverless = serverless;
		this.options = options || {};
		this.provider = this.serverless.getProvider('faas');
		this.commands = {
			build: {
				lifecycleEvents: [
					'build'
				],
				usage: 'Bundle function for deployment on OpenFaaS'
			}
		};

		this.hooks = {
			'build:build': () => BbPromise.bind(this).then(this.buildFunction)
		};

		this.serverless.cli.log('Configuring FaaS Build plugin');
	}

	buildFunction() {
		this.serverless.cli.log('Attempting to build');

		return new BbPromise((resolve, reject) => {
			_.each(this.serverless.service.functions, (description, name) => {
				this.serverless.cli.log('Attempting to build ' + name);
				build(name, 'node');
			});
			resolve();
		});
	}
}

module.exports = FaaSBuild;
