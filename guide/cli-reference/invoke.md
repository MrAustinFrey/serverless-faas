<!--
title: Serverless Framework Commands - OpenFaaS - Deploy
menuText: invoke
menuOrder: 3
description: Deploy your service to the specified provider
layout: Doc
-->

<!-- DOCS-SITE-LINK:START automatically generated -->
### [Read this on the main serverless docs site](https://www.serverless.com/framework/docs/providers/openfaas/cli-reference/deploy)
<!-- DOCS-SITE-LINK:END -->

# OpenFaaS Invoke

The `serverless invoke` command will invoke a function running on an
OpenFaaS instance.

## Options
- `-f` Specifies an individial function to invoke
- `-d` Pass data to a function

## Examples
```bash
# invoke a function running on an OpenFaaS instance
$ serverless invoke -f my-function
# pass data to a function
$ serverless invoke -f my-function -d "hello world"
```
