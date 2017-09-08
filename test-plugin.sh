#!/bin/bash

rm -rf driver
mkdir -p driver/serv

cp -r node_modules driver/
cp -r faas driver/node_modules/serverless-faas
cp serverless.yml driver/
cp handler.js driver/serv/

cd driver/

SLS_DEBUG=* serverless $1 $2 $3 $4 $5
SLS_DEBUG=* serverless build
echo building
SLS_DEBUG=* serverless deploy
echo "deployed"
SLS_DEBUG=* serverless invoke -f faas-hello-test -d "huhuhuh" -l
echo "Hello invoked"

SLS_DEBUG=* serverless remove
echo "removed"
