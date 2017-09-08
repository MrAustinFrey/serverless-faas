const {spawn} = require('child_process');

const deploy = (funcName, imageName) => {
	const child = spawn('faas-cli', ['deploy', '--gateway', 'http://localhost:8080', '--name', funcName, '--image', imageName]);

	child.stdout.on('data', data => console.log(data.toString('utf8')));
	child.stdout.on('close', () => console.log('Function deployed'));
	child.stderr.on('data', err => console.log(err.toString('utf8')));
};

module.exports = deploy;
