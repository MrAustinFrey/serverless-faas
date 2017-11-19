<!--
title: Serverless Framework - OpenFaaS Guide - Quick Start
menuTet: Quick Start
menuOrder: 2
description: Getting started with Serverless framework on OpenFaaS
layout: Doc
-->

# OpenFaaS - Quick Start

## Pre-Requisites

1. NodeJS 6+
2. Docker 17.05+
3. faas-cli

Get the OpenFaaS CLI:
```
$ curl -sSL https://cli.openfaas.com | sudo sh
```

## Create a new function

Make a new directory to hosue the function artifacts.
```bash
$ mkdir hello-serverless
$ cd hello-serverless
```

Create a new NodeJS function using the NodeJS template.
// TODO

## Deploy function

```bash
$ serverless deploy
```

## Invoke a function

```bash
$ serverless invoke -f hello-serverless
```

## List deployed functions

```bash
$ serverless deploy list
```

## Remove a function

```bash
$ serverless remove
```
