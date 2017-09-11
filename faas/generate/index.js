'use strict';

const BbPromise = require('bluebird');
const generate = require('./generate');

class FaaSGenerate {
	constructor(serverless, options) {
		this.serverless = serverless;
		this.options = options || {};
		this.provider = this.serverless.getProvider('faas');
		this.commands = {
			generate: {
				lifecycleEvents: [
					'generate'
				],
				options: {
					template: {
						usage: 'Specify an OpenFaaS template.',
						required: true,
						shortcut: 't'
					}
				},
				usage: 'Setup OpenFaaS function boilerplate'
			}
		};

		this.hooks = {
			'generate:generate': () => BbPromise.bind(this).then(this.generateFunction)
		};

		this.serverless.cli.log('Configuring FaaS generate plugin');
	}

	generateFunction() {
		this.serverless.cli.log('Attempting to generate');
		this.serverless.cli.log(JSON.stringify(this.serverless.service.functions));

		return new BbPromise(resolve => {
			this.serverless.cli.log('Attempting to generate OpenFaaS ' +
				this.options.template + ' boilerplate...');
			generate(this.options.template, this.options.name);

			resolve();
		});
	}
}

module.exports = FaaSGenerate;
