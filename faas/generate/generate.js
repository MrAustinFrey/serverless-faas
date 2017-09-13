'use strict';

const {spawn} = require('child_process');
const fs = require('fs');
const BbPromise = require('bluebird');
const yml = require('js-yaml');

const generate = (template, name) => {
	const child = spawn('faas-cli', [
		'new',
		'--lang', template,
		'--name', name
	]);

	child.stdout.on('data', data => console.log(`STDOUT: ${data.toString('utf8')}`));
	child.stderr.on('data', err => console.log(`STDERR: ${err.toString('utf8')}`));
	child.on('close', data => {
		fs.rename(`${name}.yml`, 'serverless.yml', err => {
			if (err) {
				console.log(err);
			} else {
				const yaml = yml.safeLoad(fs.readFileSync('serverless.yml', 'utf8'));
				yaml.service = name;
				yaml.plugins = ['serverless-faas'];
				fs.writeFile('./serverless.yml', yml.safeDump(yaml), 'utf8', err => {
					if (err) {
						console.log(err);
					} else {
						console.log('Updated serverless.yml');
					}
				});
			}
		});
		fs.unlink('./master.zip', err => console.log(err));
		console.log('child process exited with code:', data)
	});
};

module.exports = generate;
