'use strict';

const BbPromise = require('bluebird');
const got = require('got');

const deploy = (funcName, imageName) => {
	return new BbPromise((resolve, reject) => {
		const options = {
			method: 'POST',
			json: true,
			body: {
				service: funcName,
				network: 'func_functions',
				image: imageName
			}
		};

		got('http://localhost:8080/system/functions', options)
			.then(res => resolve(res))
			.catch(err => reject(err));
	}
	);
};

module.exports = deploy;
