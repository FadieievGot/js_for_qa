# Your Store site E2E tests

## Table of Contents

- [Getting Started](#getting-started)
- [Project structure](#project-structure)
- [Prepare environment](#prepare-environment)
- [Running AT from command line](#running-at-from-command-line)

## Getting Started

Check you have already installed:
For mac
1. [Chrome](https://www.google.com/chrome/) is a default browser for running AT

## Project structure

Test project contains following directories:

* **data** - a place for test data (constants, test data generator and etc.)
* **pages** - describes base system components
* **suites** - all tests for the project

## Prepare environment

Install JS dependencies:
```bash
npm install
```
## Running AT from command line

To run test case, say:
```bash
npm run test
```

For more running options see [WebdriverIO documentation](http://webdriver.io/guide/testrunner/gettingstarted.html)
