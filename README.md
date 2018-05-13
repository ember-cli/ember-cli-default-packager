# ember-cli-default-packager

[![Build Status](https://travis-ci.org/ember-cli/ember-cli-default-packager.svg?branch=master)](https://travis-ci.org/ember-cli/ember-cli-default-packager)
[![Build status](https://ci.appveyor.com/api/projects/status/j21toym135ix7g6k?svg=true)](https://ci.appveyor.com/project/embercli/ember-cli-default-packager)
[![Coverage Status](https://coveralls.io/repos/github/ember-cli/ember-cli-default-packager/badge.svg)](https://coveralls.io/github/ember-cli/ember-cli-default-packager)

Default Packager for Ember CLI. More details in [Packager RFC](https://github.com/ember-cli/rfcs/pull/110).

## Building

Run `yarn compile` to build the project. This will create `dist` folder with
`index.js` file in it and necessary typings as well.

## Docs

Run `yarn docs` to generate documentation. This will create `docs` folder.
Documentation is done via [typedoc](http://typedoc.org/).

## Tests

Tests are written using [mocha](https://mochajs.org/).

Run `yarn test:all` to run unit, linting and coverage tests.

### Unit

Tests are written using [mocha-typescript](https://github.com/pana-cc/mocha-typescript)
which allows you to use [decorators](https://github.com/wycats/javascript-decorators)
while writting tests.

Run `yarn test` to run test suite as well as lint tests.

### Linting

Linting is done using [tslint](https://github.com/palantir/tslint) with a
combintation of [prettier](https://github.com/prettier/prettier) and [tslint-config-prettier](https://github.com/alexjoverm/tslint-config-prettier) config.

Run `yarn lint` to ensure there are no linting errors. Run `yarn lint:fix` to
fix linting errors automatically.

### Coverage

Run `yarn test:coverage` to genenerat coverage report. This will create
`coverage` folder. Code coverage is done via [istanbul](https://github.com/istanbuljs/istanbuljs).
