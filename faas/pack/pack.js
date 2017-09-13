'use strict';

const BbPromise = require('bluebird')
const Docker = require('dockerode')
const path = require('path')

const docker = new Docker({socketPath: '/var/run/docker.sock'});

const pack = (imageName) => {
	return new BbPromise((resolve, reject) => {
		const options = {}
		docker.buildImage({
			context: __dirname,
			src: [
				'../../../Dockerfile',
				'../../../index.js',
				'../../../package.json',
				'../../../function/handler.js',
				'../../../function/package.json'
			]}, {
				t: imageName
			})
				.then((res) => resolve(res))
				.catch((err) => reject(err))
		}
	)
}

module.exports = pack;
