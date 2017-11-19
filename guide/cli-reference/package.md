<!--
title: Serverless Framework Commands - OpenFaaS - Deploy
menuText: package
menuOrder: 1
description: Deploy your service to the specified provider
layout: Doc
-->

<!-- DOCS-SITE-LINK:START automatically generated -->
### [Read this on the main serverless docs site](https://www.serverless.com/framework/docs/providers/openfaas/cli-reference/deploy)
<!-- DOCS-SITE-LINK:END -->

# OpenFaaS Package

The `serverless package` command packages all the functions
listed in the `serverless.yml` file into individual Docker
images. These images will be deployed to an OpenFaaS instance as
individual functions using the `serverless deploy`

## Examples
```bash
$ serverless package
```

## Artifacts

After the `serverless package` command runs, a Docker image named
after your function will be available on the host machine.


