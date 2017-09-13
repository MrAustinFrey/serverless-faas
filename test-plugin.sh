#!/bin/bash

rm -rf driver
mkdir -p driver/

cd driver
SLS_DEBUG=* serverless install --url https://github.com/aafrey/openfaas-nodejs --name faas-func

cd ..

cp -r node_modules driver/faas-func/
cp -r faas driver/faas-func/node_modules/serverless-faas

cd driver/faas-func

SLS_DEBUG=* serverless init


#SLS_DEBUG=* serverless $1 $2 $3 $4 $5
SLS_DEBUG=* serverless package
echo building
SLS_DEBUG=* serverless deploy
echo "deployed"
sleep 10
SLS_DEBUG=* serverless invoke -f hello-serverless
echo "hello-serverless invoked"

SLS_DEBUG=* serverless remove
echo "removed"
