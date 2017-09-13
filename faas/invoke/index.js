'use strict';

const BbPromise = require('bluebird');
const got = require('got');

class FaaSInvoke {
	constructor(serverless, options) {
		this.serverless = serverless;
		this.options = options || {};
		this.provider = this.serverless.getProvider('faas');
		this.command = {
			invoke: {
				lifecycleEvents: [
					'invoke'
				],
				options: {
					data: {
						shortcut: 'd'
					}
				}
			}
		};

		this.hooks = {
			'invoke:invoke': () => BbPromise.bind(this).then(this.invokeFunction)
		};

		this.serverless.cli.log('Configuring FaaS Invoke plugin');
	}

	invokeFunction() {
		new BbPromise((resolve) => {
			this.serverless.cli.log('Attempting to invoke ' + this.options.function);

			const options = {
				method: 'POST',
				body: this.options.data
			};

			got(`http://localhost:8080/function/${this.options.function}`, options)
				.then(res => this.serverless.cli.log(res.body))
				.catch(err => console.log(err));
		})
	}
}

module.exports = FaaSInvoke;
