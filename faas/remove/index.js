'use strict';

const _ = require('lodash');
const BbPromise = require('bluebird');
const got = require('got');

class FaaSRemove {
	constructor(serverless, options) {
		this.serverless = serverless;
		this.options = options || {};
		this.provider = this.serverless.getProvider('faas');

		this.hooks = {
			'remove:remove': () => BbPromise.bind(this).then(this.removeFunction)
		};

		this.serverless.cli.log('Configuring FaaS Remove plugin');
	}

	removeFunction() {
		return new BbPromise((resolve, reject) => {
			_.each(this.serverless.service.functions, (description, name) => {
				this.serverless.cli.log('Attempting to remove ' + name);

				const options = {
					method: 'DELETE',
					json: true,
					body: {
						functionName: name
					}
				};

				got('http://localhost:8080/system/functions', options)
                  .then(res => this.serverless.cli.log(res.body))
                  .catch(err => this.serverless.cli.log(err));
			});

			resolve();
		});
	}
}

module.exports = FaaSRemove;
