'use strict';

const {spawn} = require('child_process');
const fs = require('fs');
const got = require('got');

const init = () => {
	const swarm = spawn('docker', ['swarm', 'init']);

	swarm.stdout.on('data', data => console.log(data.toString('utf8')));
	swarm.stdout.on('close', data => {
		console.log(data.toString('utf8'));
		console.log('downloading OpenFaaS');

		got(
			'https://raw.githubusercontent.com/alexellis/faas/master/docker-compose.yml'
		).then(req => {
			fs.writeFile('docker-compose.yml', req.body, err => {
				if (err) {
					console.log(err);
				}
			});
		}).then(() => {
			const stackDeploy = spawn('docker', [
				'stack', 'deploy',
				'-c', 'docker-compose.yml',
				'functions'
			]);

			stackDeploy.stdout.on('data', data => console.log(data.toString('utf8')));
			stackDeploy.stdout.on('close', data => console.log(data.toString('utf8')));
			stackDeploy.stderr.on('data', err => console.log(err.toString('utf8')));
		}).catch(err => console.log(err));
	});
	swarm.stderr.on('data', err => console.log(err.toString('utf8')));
};

module.exports = init;

