cratebind-scripts
=================

Collection of helpful CLI tools used by Cratebind

Built using [Oclif](https://github.com/oclif/oclif)

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/cratebind-scripts.svg)](https://npmjs.org/package/cratebind-scripts)
[![Downloads/week](https://img.shields.io/npm/dw/cratebind-scripts.svg)](https://npmjs.org/package/cratebind-scripts)
[![License](https://img.shields.io/npm/l/cratebind-scripts.svg)](https://github.com/matt-cratebind/cratebind-scripts/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g cratebind-scripts
$ cratebind-scripts COMMAND
running command...
$ cratebind-scripts (-v|--version|version)
cratebind-scripts/0.0.0 darwin-arm64 node-v16.13.1
$ cratebind-scripts --help [COMMAND]
USAGE
  $ cratebind-scripts COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`cratebind-scripts help [COMMAND]`](#cratebind-scripts-help-command)
* [`cratebind-scripts lint-setup`](#cratebind-scripts-lint-setup)

## `cratebind-scripts help [COMMAND]`

display help for cratebind-scripts

```
USAGE
  $ cratebind-scripts help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

## `cratebind-scripts lint-setup`

Add ES lint config with husky and lint-staged to lint on commit

```
USAGE
  $ cratebind-scripts lint-setup

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ cratebind-scripts lint-setup
```

_See code: [src/commands/lint-setup.ts](https://github.com/matt-cratebind/cratebind-scripts/blob/v0.0.0/src/commands/lint-setup.ts)_
<!-- commandsstop -->
