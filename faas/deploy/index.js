'use strict';

const _ = require('lodash');
const BbPromise = require('bluebird');
const got = require('got')

class FaaSDeploy {
    constructor(serverless, options) {
        this.serverless = serverless;
        this.options = options || {};
        this.provider = this.serverless.getProvider('faas');

        this.hooks = {
            "deploy:deploy": () => BbPromise.bind(this).then(this.deployFunction)
        };

        this.serverless.cli.log("Configuring FaaS Deploy plugin");
    }

    deployFunction() {
        this.serverless.cli.log("Attempting to deploy");
        return new BbPromise((resolve, reject) => {
            _.each(this.serverless.service.functions, (description, name) => {
                this.serverless.cli.log("Attempting to deploy " + name);

                let options = {
                  method: 'POST',
                  body: {
                    service: name,
                    network: "func_functions",
                    image: name,
                  },
                  json: true
                }

                got('http://localhost:8080/system/functions', options)
                  .then((req) => console.log("howdy", req))
                  .catch((err) => console.log(err))
              }
            );

            resolve();
        });
    }
}

module.exports = FaaSDeploy;
