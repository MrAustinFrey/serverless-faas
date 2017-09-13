'use strict';

const BbPromise = require('bluebird');
const init = require('./init');

class FaaSInit {
	constructor(serverless, options) {
		this.serverless = serverless;
		this.options = options || {};
		this.provider = this.serverless.getProvider('faas');
		this.commands = {
			init: {
				lifecycleEvents: [
					'init'
				],
				usage: 'Setup OpenFaaS function boilerplate'
			}
		};

		this.hooks = {
			'init:init': () => BbPromise.bind(this).then(this.initFunction)
		};

		this.serverless.cli.log('Configuring FaaS Init plugin');
	}

	initFunction() {
		this.serverless.cli.log('Attempting to launch the OpenFaaS framework.');

//		Return new BbPromise(resolve => {
		this.serverless.cli.log('launching...');
		init();

//			Resolve();
//		});
	}
}

module.exports = FaaSInit;
