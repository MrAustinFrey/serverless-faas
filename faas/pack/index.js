'use strict';

const _ = require('lodash');
const BbPromise = require('bluebird');
const pack = require('./pack');

class FaaSPackage {
	constructor(serverless, options) {
		this.serverless = serverless;
		this.options = options || {};
		this.provider = this.serverless.getProvider('faas');
		this.commands = {
			package: {
				lifecycleEvents: [
					'package'
				],
				usage: 'Bundle function for deployment on OpenFaaS'
			}
		};

		this.hooks = {
			'package:package': () => BbPromise.bind(this).then(this.packageFunction)
		};

		this.serverless.cli.log('Configuring FaaS Package plugin');
	}

	packageFunction() {
		this.serverless.cli.log('Attempting to package');
		return new BbPromise((resolve, reject) => {
			_.each(this.serverless.service.functions, (description, name) => {
				this.serverless.cli.log('Attempting to package ' + name);
				pack()
					.then((res) => this.serverless.cli.log(`Packaged function: ${name}`))
					.then(() => resolve());
			});
		});
	}
}

module.exports = FaaSPackage;
