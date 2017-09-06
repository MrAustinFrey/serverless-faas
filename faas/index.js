"use strict"

const FaasProvider = require("./provider")
const FaaSDeploy = require('./deploy');
const FaaSRemove = require('./remove');
const FaaSInvoke = require('./invoke');
const FaaSBuild = require('./build');

class FaaSIndex {
  constructor(serverless, options) {
    this.serverless = serverless;
    this.options = options;
    this.serverless.cli.log("Configuring FaaS plugins");

    this.serverless.pluginManager.addPlugin(FaasProvider);
    this.serverless.pluginManager.addPlugin(FaaSDeploy);
    this.serverless.pluginManager.addPlugin(FaaSRemove);
    this.serverless.pluginManager.addPlugin(FaaSInvoke);
    this.serverless.pluginManager.addPlugin(FaaSBuild);
  }
}

module.exports = FaaSIndex;

