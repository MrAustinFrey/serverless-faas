'use strict';

const {spawn} = require('child_process');

const pack = () => {
	const child = spawn('faas-cli', ['build', '-f', './serverless.yml']);

	child.stdout.on('data', data => console.log(data.toString('utf8')));
	child.stdout.on('err', err => console.log(err.toString('utf8')));
};

module.exports = pack;
