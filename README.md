cratebind-scripts
=================

Collection of helpful tools used by Cratebind

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
cratebind-scripts/0.0.0 darwin-x64 node-v15.4.0
$ cratebind-scripts --help [COMMAND]
USAGE
  $ cratebind-scripts COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`cratebind-scripts hello [FILE]`](#cratebind-scripts-hello-file)
* [`cratebind-scripts help [COMMAND]`](#cratebind-scripts-help-command)

## `cratebind-scripts hello [FILE]`

describe the command here

```
USAGE
  $ cratebind-scripts hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ cratebind-scripts hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/matt-cratebind/cratebind-scripts/blob/v0.0.0/src/commands/hello.ts)_

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
<!-- commandsstop -->
