<!--
title: Serverless Framework Commands - OpenFaaS - Deploy
menuText: deploy
menuOrder: 2
description: Deploy your service to the specified provider
layout: Doc
-->

<!-- DOCS-SITE-LINK:START automatically generated -->
### [Read this on the main serverless docs
site](https://www.serverless.com/framework/docs/providers/openfaas/cli-reference/deploy)
<!-- DOCS-SITE-LINK:END -->

# OpenFaaS Deploy

The `serverless deploy` command will package and deploy all functions
specified in the `serverless.yml` file.

Use `serverless deploy function -f my-function` to deploy a specific
function from the `serverless.yml` file.

## Options
- `-f` Invoke `deploy function`
- `list` List all functions on an OpenFaaS instance

## Examples

```bash
# deploy all functions specified in serverless.yml
$ serverless deploy
# deploy a specific function specified in serverless.yml
$ serverless deploy function -f my-function
# list all function on an OpenFaaS instance
$ deploy list
```

## Artifacts

After the `serverless deploy` command runs, a Docker image named
after your function will be available on the host machine.

