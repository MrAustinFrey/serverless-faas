"use strict"

const fs = require('fs');
const Docker = require('dockerode');

const docker = new Docker({socketPath: '/var/run/docker.sock'});


const build = (imageName) => {
  console.log(__dirname)
  docker.buildImage({
    context: __dirname,
    src: ['../../../Dockerfile', '../../../handler.js']
  },{
    t: imageName
  }, (err, res) => {
    if (err) console.log(err)
    else console.log('Finished building function:',imageName)
  })
}

module.exports = build
