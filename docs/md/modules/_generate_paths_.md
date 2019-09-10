**[core.jsm](../README.md)**

[Globals](../globals.md) › [&quot;generate.paths&quot;](_generate_paths_.md)

# External module: "generate.paths"

Generates dot delimited paths for each symbol in a file payload and captures `$refs` into the payload for later dereferencing.

**`module`** generatePaths

## Index

### Functions

* [default](_generate_paths_.md#default)

## Functions

###  default

▸ **default**(`payload`: FilePayload[], `callback`: Function): *void*

*Defined in [generate.paths.ts:12](https://github.com/terryweiss/jsm/blob/072a529/src/generate.paths.ts#L12)*

Generates dot delimited paths for each symbol in a file payload and captures `$refs` into the payload for later dereferencing.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`payload` | FilePayload[] | The files to look at |
`callback` | Function | The callback to raise when it is done. It will get 2 parameters, a standard `err` parameter and `symbols` of the entire symbol tree   |

**Returns:** *void*